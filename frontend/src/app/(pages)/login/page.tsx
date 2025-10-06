/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { LoginForm } from "@/app/components/Login/LoginForm";
import { useSession } from "@/app/context/SessionContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useSession();

  const handleLoginSuccess = (userData: any) => {
    console.log("The logged in userdata: ", userData);
    login(userData);
    if(!userData.isMfaActive) {
      router.push("/setup-2fa");
    } else {
      router.push("/verify-2fa");
    }
  }
  return (
    <LoginForm onLoginSuccess={handleLoginSuccess} />
  );
}