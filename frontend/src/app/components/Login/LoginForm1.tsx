/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser } from "@/app/service/authApi";
import { useState } from "react";

export const LoginForm1 = ({ onLoginSuccess }: { onLoginSuccess: any }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await loginUser(username, password)
            setMessage(data.message);
            setUsername("");
            setPassword("");
            setError("");
            onLoginSuccess(data);
        } catch (error: any) {
            console.log("The err is : ", error.message);
            setUsername("");
            setPassword("");
            setMessage("");
            setError("Sai mat khau hoac tai khoan")
        }
    };
    return (
        <>
            <div className="py-[60px]">
                <div className="container mx-auto">
                    <div className="rounded-[8px] border border-[#DEDEDE] py-[50px] px-[20px] max-w-[602px] mx-auto">
                        <h1 className="font-[700] text-[20px] text-black mb-[20px] text-center">
                            Đăng Nhập
                        </h1>
                        <form onSubmit={handleLogin} className="grid grid-cols-1 gap-x-[20px] gap-y-[15px]">
                            <div className="">
                                <label htmlFor="username" className="font-[500] text-[14px] text-black mb-[5px]">
                                    Tên đăng nhập *
                                </label>
                                <input
                                    aria-label="Username"
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Nhập tên đăng nhập"
                                    required
                                    className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] font-[500] text-[14px] text-black px-[20px]"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="password" className="font-[500] text-[14px] text-black mb-[5px]">
                                    Mật khẩu *
                                </label>
                                <input
                                    type="password"
                                    name=""
                                    placeholder="Nhập mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    id="password"
                                    className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] font-[500] text-[14px] text-black px-[20px]"
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                            {message && <p className="text-green-600 text-sm mb-3">{message}</p>}
                            <div className="">
                                <button
                                    type="submit"
                                    className="w-full h-[48px] bg-[#0088FF] rounded-[4px] font-[700] text-[16px] text-white cursor-pointer">
                                    Đăng Nhập
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}