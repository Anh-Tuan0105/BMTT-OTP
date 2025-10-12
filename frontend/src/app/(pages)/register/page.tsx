import { RegisterForm } from "@/app/components/Register/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Trang web tuyển dụng việc làm IT tại Việt Nam",
};

export default function RegisterPage() {
    return (
        <>
            <RegisterForm/>
        </>
    )
}