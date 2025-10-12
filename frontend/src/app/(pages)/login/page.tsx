import { LoginPage1 } from "@/app/components/LoginPage1/LoginPage1";
// import { LoginForm } from "@/app/components/Login/LoginForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Trang web tuyển dụng việc làm IT tại Việt Nam",
};

export default function LoginPage() {
  return (
    <>
      <LoginPage1 />
    </>
  )
}