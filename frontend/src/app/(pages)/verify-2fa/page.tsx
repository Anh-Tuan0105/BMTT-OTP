/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Verify_2FA } from "@/app/components/Verify-2FA/Verify2FA";
import { useRouter } from "next/navigation";

export default function Verify2FA() {
  const router = useRouter();

  const handleVerification = async (data: any) => {
    if (data) {
      // Đợi cookie sync xong rồi mới chuyển
      window.location.href = "/";
    }
  };

  const handle2FAReset = async (data: any) => {
    if (data) {
      router.push("/setup-2fa");
    }
  }
  return (
    <>
      <Verify_2FA
        onVerifySuccess={handleVerification}
        onResetSuccess={handle2FAReset}
      />
    </>
  );
}