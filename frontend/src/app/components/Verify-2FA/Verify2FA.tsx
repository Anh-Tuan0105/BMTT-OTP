/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { reset2FA, verify2FA } from "@/app/service/authApi";
import { useState } from "react"

export const Verify_2FA = ({ onVerifySuccess, onResetSuccess }: any) => {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");


    const handleTokenVerification = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await verify2FA(otp);
            onVerifySuccess(data);
        } catch (error: any) {
            setOtp("");
            console.log("The err is : ", error.message);
            setError("Nhập sai mã OTP");
        }
    }

    const handleReset = async () => {
        try {
            const {data} = await reset2FA();
            onResetSuccess(data);
        } catch (error: any) {
            console.log("The err is : ", error.message);
            setError(error.message);
        }
    }
    return (
        <>
            <form onSubmit={handleTokenVerification} className="bg-white rounded-lg shadow-md w-full max-w-sm mx-auto my-[60px]">
                <div className="pt-6">
                    <h2 className="text-3xl text-center font-extralight">
                        TOTP
                    </h2>
                </div>
                <hr className="text-gray-200 mt-6 mb-6" />
                <p className="text-center text-gray-600 text-lg font-light">
                    Vui lòng nhập 6 chữ số OTP
                </p>
                <div className="p-6">
                    <div className="mb-4">
                        <label className="text-gray-600 text-sm">TOTP</label>
                        <input
                            aria-label="TOTP"
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full p-2 border rounded mt-2"
                            placeholder="Nhập mã TOTP"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md mb-3"
                    >
                        Xác thực TOTP
                    </button>
                    <button
                        type="button"
                        className="w-full bg-slate-600 text-white py-2 rounded-md"
                        onClick={handleReset}
                    >
                        Lấy lại mã QR
                    </button>
                </div>
            </form>
        </>
    )
}