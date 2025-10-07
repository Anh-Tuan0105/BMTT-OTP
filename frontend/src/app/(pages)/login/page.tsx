/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { LoginForm } from "@/app/components/Login/LoginForm";
import { LoginForm1 } from "@/app/components/Login/LoginForm1";
import { useSession } from "@/app/context/SessionContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { login, checkAuthStatus } = useSession();

  const handleLoginSuccess = async (userData: any) => {
    console.log("The logged in userdata: ", userData);
    login(userData);
    // Đồng bộ với server session
    await checkAuthStatus();
    if (!userData.isMfaActive) {
      router.push("/setup-2fa");
    } else {
      router.push("/verify-2fa");
    }
  }
  return (
    // <LoginForm onLoginSuccess={handleLoginSuccess} />
    <LoginForm1 onLoginSuccess={handleLoginSuccess} />
  );
}