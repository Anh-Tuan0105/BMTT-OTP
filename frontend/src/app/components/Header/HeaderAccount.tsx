/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link"
import { useSession } from "@/app/context/SessionContext";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/app/service/authApi";

export const HeaderAccount = () => {
    const router = useRouter();
    const { user, logout, checkAuthStatus } = useSession();

    const handleLogout = async () => {
        try {
            const { data } = await logoutUser();
            logout(data);
            // Đồng bộ với server session
            await checkAuthStatus();
            // Force refresh để đảm bảo middleware được gọi lại
            window.location.href = "/login";
        } catch (error: any) {
            // optional: show toast
            console.log("Error: ", error.message);
        }
    }

    if (!user) {
        return (
            <div className="font-[600] text-[#FFFFFF] sm:text-[16px] text-[12px] leading-[100%] gap-x-[5px] inline-flex">
                <Link href="/login" className="">
                    Đăng nhập
                </Link>
                <span className="">/</span>
                <Link href="/register" className="">
                    Đăng Ký
                </Link>
            </div>
        )
    }

    return (
        <div className="font-[600] text-[#FFFFFF] sm:text-[16px] text-[12px] leading-[100%] gap-x-[8px] inline-flex items-center">
            <span className="truncate max-w-[120px]">{user.username}</span>
            <button onClick={handleLogout} className="underline">
                Đăng xuất
            </button>
        </div>
    )
}