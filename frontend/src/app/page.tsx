/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { useRouter } from "next/navigation";
// import { useSession } from "./context/SessionContext";
// import { logoutUser } from "./service/authApi";

import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { Section1 } from "./components/Section/Section1";
import { Title } from "./components/Title/Title";
import { CardCompanyItem } from "./components/Card/CardCompanyItem";

export default function HomePage() {
  // const router = useRouter();
  // const { user, logout } = useSession();

  // const handleLogout = async () => {
  //   try {
  //     const { data } = await logoutUser();
  //     logout(data);
  //     router.push("/login");
  //   } catch (error: any) {
  //     console.log("Error: ", error.message);
  //   }
  // }
  // if (!user) {
  //   return null;
  // }
  return (
    <>
      {/* <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user.username}</h2>
        <p>You have successfully logged in and verified your 2FA</p>
        <button type="button" className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
          Logout
        </button>
      </div> */}
      {/* <div className="container bg-amber-400">
        <h1 className="text-[32px] font-[700]">
          Hello World 2345
        </h1>
      </div> */}
      {/* Section 1 */}
      <Section1 />
      {/* End Section 1 */}

      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="container mx-auto">
          <Title text="Nhà tuyển dụng hàng đầu" />
          {/* Wrap */}
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            {/* Item */}
            <CardCompanyItem />
          </div>
        </div>
      </div>
      {/* End Section 2 */}
    </>
  );
}
