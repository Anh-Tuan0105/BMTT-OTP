import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        isMfaActive: {
            type: Boolean,
            require: false
        },
        twoFactorSecret: {
            type: String,

        }
    }, 
    {
        timestamps: true, // tự động cập nhật thời gian tạo và cập nhật lần cuối
    }
);

const User = mongoose.model("User", userSchema);

export default User;