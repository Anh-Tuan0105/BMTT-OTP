import bcrypt from "bcryptjs";
import User from "../models/user.js"
import speakeasy from "speakeasy";
import qrCode from "qrcode";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // mã hóa mật khẩu bằng hàm băm vs 10 vòng
        const newUser = new User(
            {
                username,
                password: hashedPassword,
                isMfaActive: false
            }
        );
        console.log("New User: ", newUser);
        await newUser.save();
        res.status(201).json({ message: "Đăng ký thành công" });
    } catch (error) {
        res.status(500).json({ error: "Error register user", message: error });
    }
};

export const login = async (req, res) => {
    console.log("The authenticated user is : ", req.user);
    res.status(200).json({
        message: "Đăng nhập thành công",
        username: req.user.username,
        isMfaActive: req.user.isMfaActive,
    });
};

export const authStatus = async (req, res) => {
    if (req.user) {
        res.status(200).json({
            message: "Đăng nhập thành công",
            username: req.user.username,
            isMfaActive: req.user.isMfaActive,
        });
    } else {
        res.status(401).json({ message: "Unauthorized user" });
    }
}

export const logout = async (req, res) => {
    if (!req.user) res.status(401).json({ message: "Unauthorized user" });
    // Reset 2FA fields before ending the session
    // try {
    //     const user = req.user;
    //     if (user) {
    //         // remove the field
    //         user.twoFactorSecret = undefined;
    //         user.isMfaActive = false;
    //         await user.save();
    //     }
    // } catch (e) {
    //     // If resetting fails, proceed with logout anyway
    //     res.status(500).json({ error: "Error reseting fails", message: error });
    // }
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            // Clear Cookie
            res.clearCookie("connect.sid");
            res.status(200).json({ message: "Đăng xuất thành công" });
        });
    });
};

export const setup2FA = async (req, res) => {
    try {
        console.log("The req.user is : ", req.user);
        const user = req.user;
        var secret = speakeasy.generateSecret();
        console.log("The secret object is: ", secret);
        user.twoFactorSecret = secret.base32;
        user.isMfaActive = true;
        await user.save();
        const url = speakeasy.otpauthURL({
            secret: secret.base32,
            label: `${req.user.username}`,
            issuer: "www.nhom1.com",
            encoding: "base32"
        });
        const qrImageUrl = await qrCode.toDataURL(url);
        res.status(200).json({
            secret: secret.base32,
            qrCode: qrImageUrl,
        })
    } catch (error) {
        res.status(500).json({ error: "Error setting up 2FA", message: error });
    }
};

export const verify2FA = async (req, res) => {
    const { token } = req.body;
    const user = req.user;

    const verified = speakeasy.totp.verify({
        secret: user.twoFactorSecret,
        encoding: "base32",
        token,
    })

    if (verified) {
        const jwtToken = jwt.sign(
            { username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1hr" }
        );
        res.status(200).json({ message: "2FA thanh cong", token: jwtToken })
    } else {
        res.status(400).json({ message: "Invalid 2FA token" });
    }
}

export const reset2FA = async (req, res) => {
    try {
        const user = req.user;
        user.twoFactorSecret = "";
        user.isMfaActive = false;
        await user.save();
        res.status(200).json({ message: "2FA reset thanh cong" });
    } catch (error) {
        res.status(500).json({ error: "Error reseting 2FA", message: error })
    }
}