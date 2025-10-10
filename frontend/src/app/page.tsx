/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { useRouter } from "next/navigation";
// import { useSession } from "./context/SessionContext";
// import { logoutUser } from "./service/authApi";

import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

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
      <div className="bg-[#000065] py-[60px]">
        <div className="container mx-auto">
          <h1 className="font-[700] text-[28px] text-white mb-[30px] text-center">
            887 Việc làm IT cho Developer &quot;Chất&quot;
          </h1>
          <form action="" className="flex gap-x-[15px] gap-y-[12px] md:flex-nowrap flex-wrap  mb-[30px]">
            <select name="" id="" className="md:w-[240px] w-full h-[56px] rounded-[4px] bg-white font-[500] text-[16px] text-[#121212] px-[20px]">
              <option value="">Tất cả thành phố</option>
              <option value="">Hà Nội</option>
              <option value="">Đà Nẵng</option>
              <option value="">Hồ Chí Minh</option>
            </select>
            <input
              typeof="text"
              className="md:flex-1 w-full h-[56px] rounded-[4px] bg-white font-[500] text-[16px] text-[#121212] px-[20px]"
              placeholder="Nhập Từ Khóa..."
            />
            <button className="md:w-[240px] w-full h-[56px] rounded-[4px] bg-[#0088FF] font-[500] text-[16px] text-white px-[20px] flex items-center justify-center gap-x-[10px] cursor-pointer">
              <IoSearchSharp className="text-[20px]" /> Tìm Kiếm
            </button>
          </form>
          <div className="flex flex-wrap items-center gap-x-[12px] gap-y-[15px]">
            <div className="font-[500] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm:
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <Link href={"#"} className="text-white border-[#414842] border-[1px] bg-[#121212] hover:bg-[#414842] rounded-[20px] px-[22px] py-[8px] font-[500] text[#DEDEDE] hover:text-white">
                ReacJS
              </Link>
              <Link href={"#"} className="text-white border-[#414842] border-[1px] bg-[#121212] hover:bg-[#414842] rounded-[20px] px-[22px] py-[8px] font-[500] text[#DEDEDE] hover:text-white">
                Javascript
              </Link>
              <Link href={"#"} className="text-white border-[#414842] border-[1px] bg-[#121212] hover:bg-[#414842] rounded-[20px] px-[22px] py-[8px] font-[500] text[#DEDEDE] hover:text-white">
                NodeJS
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*end section 1*/}
      {/*section 2*/}
      <div className="py-[60px] ">
        <div className="container mx-auto">
          <h2 className=" font-[700] sm:text-[28px] text-[24px] text-[#121212] text-center mb-[30px]">
            Nhà tuyển dụng hàng đầu
          </h2>
          {/*wrap */}
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            {/*Items */}
            <Link
              href=""
              className="rounded-[8px] border border-[#DEDEDE] relative"
              style={{
                background: "linear-gradient(180deg,#F6F6F6 2.38%,#FFFFFF 70.43%)"
              }}
            >
              <img src="/assest/images/Frame.svg"
                className="absolute top-0 left-0 w-full h-auto"
                alt="" />
              <div className="relative">
                <div className="sm:w-[160px] w-[125px] aspect-square sm:mt-[32px] sm:mt-[24px] mt-[16x] mb-[32px] mx-auto rounded-[8px] bg-white"
                  style={{
                    boxShadow: "0px 4px 24px 0px #0000001F"
                  }}
                >
                  <img src="/assest/Logo.png"
                    className="w-full h-full object-contain p-[10px]"
                    alt="" />
                </div>
                <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] sm:mb-[24px] mb-[16px] mx-[16px] text-center line-clamp-2">
                  LG Electronics Development Vietnam (LGEDV)
                </h3>
                <div className="bg-[#F7F7F7] py-[12px] px-[12px] flex-wrap items-center sm:justify-between justify-center gap-[12px]">
                  <div className="font-[400] text-[14px] text-[#414042]">
                    Ho Chi Minh
                  </div>
                  <div className="inline-flex items-center gap-[6px] font-[400] text-[14px] text-[#121212]">
                    <FaUserTie className="text-[16px] text-[#000096]" />5 việc làm
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href=""
              className="rounded-[8px] border border-[#DEDEDE] relative"
              style={{
                background: "linear-gradient(180deg,#F6F6F6 2.38%,#FFFFFF 70.43%)"
              }}
            >
              <img src="/assest/images/Frame.svg"
                className="absolute top-0 left-0 w-full h-auto"
                alt="" />
              <div className="relative">
                <div className="sm:w-[160px] w-[125px] aspect-square sm:mt-[32px] sm:mt-[24px] mt-[16x] mb-[32px] mx-auto rounded-[8px] bg-white"
                  style={{
                    boxShadow: "0px 4px 24px 0px #0000001F"
                  }}
                >
                  <img src="/assest/images/Logo (2).png"
                    className="w-full h-full object-contain p-[10px]"
                    alt="" />
                </div>
                <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] sm:mb-[24px] mb-[16px] mx-[16px] text-center line-clamp-2">
                  LG Electronics Development Vietnam (LGEDV)
                </h3>
                <div className="bg-[#F7F7F7] py-[12px] px-[12px] flex-wrap items-center sm:justify-between justify-center gap-[12px]">
                  <div className="font-[400] text-[14px] text-[#414042]">
                    Ho Chi Minh
                  </div>
                  <div className="inline-flex items-center gap-[6px] font-[400] text-[14px] text-[#121212]">
                    <FaUserTie className="text-[16px] text-[#000096]" />5 việc làm
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href=""
              className="rounded-[8px] border border-[#DEDEDE] relative"
              style={{
                background: "linear-gradient(180deg,#F6F6F6 2.38%,#FFFFFF 70.43%)"
              }}
            >
              <img src="/assest/images/Frame.svg"
                className="absolute top-0 left-0 w-full h-auto"
                alt="" />
              <div className="relative">
                <div className="sm:w-[160px] w-[125px] aspect-square sm:mt-[32px] sm:mt-[24px] mt-[16x] mb-[32px] mx-auto rounded-[8px] bg-white"
                  style={{
                    boxShadow: "0px 4px 24px 0px #0000001F"
                  }}
                >
                  <img src="/assest/images/Logo (1).png"
                    className="w-full h-full object-contain p-[10px]"
                    alt="" />
                </div>
                <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] sm:mb-[24px] mb-[16px] mx-[16px] text-center line-clamp-2">
                  LG Electronics Development Vietnam (LGEDV)
                </h3>
                <div className="bg-[#F7F7F7] py-[12px] px-[12px] flex-wrap items-center sm:justify-between justify-center gap-[12px]">
                  <div className="font-[400] text-[14px] text-[#414042]">
                    Ho Chi Minh
                  </div>
                  <div className="inline-flex items-center gap-[6px] font-[400] text-[14px] text-[#121212]">
                    <FaUserTie className="text-[16px] text-[#000096]" />5 việc làm
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/*end section 2*/}
    </>
  );
}
