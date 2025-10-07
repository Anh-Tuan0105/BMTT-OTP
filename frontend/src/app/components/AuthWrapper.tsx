"use client";
import { useSession } from "@/app/context/SessionContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthWrapperProps {
    children: React.ReactNode;
}

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
    const { isLoggedIn } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            const currentPath = window.location.pathname;
            if (currentPath !== '/login' && currentPath !== '/register') {
                router.push('/login');
            }
        }
    }, [isLoggedIn, router]);

    return <>{children}</>;
};
