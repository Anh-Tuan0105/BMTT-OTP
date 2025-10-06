"use client";
import { Setup_2FA } from "@/app/components/Setup-2FA/Setup2FA";
import { useRouter } from "next/navigation";

export default function Setup2FA() {
  const router = useRouter();

  const handleSetupComplete = () => {
    router.push("/verify-2fa");
  }
  return (
    <>
      <Setup_2FA onSetupComplete={handleSetupComplete}/>
    </>
  );
}