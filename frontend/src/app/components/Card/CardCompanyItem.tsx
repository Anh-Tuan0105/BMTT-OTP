/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";

export const CardCompanyItem = () => {
  const data = [
    {
      image: "/assets/images/demo-cong-ty-1.png",
      title: "LG Electronics Development Vietnam (LGEDV)"
    },
    {
      image: "/assets/images/demo-cong-ty-2.png",
      title: "MB Bank"
    },
    {
      image: "/assets/images/demo-cong-ty-3.png",
      title: "FPT Software"
    }
  ]
  return (
    <>
      {data.map((item, index) => (
        <Link
          key={index}
          href="#"
          className="rounded-[8px] border border-[#DEDEDE] relative"
          style={{
            background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
          }}
        >
          <img
            src="/assets/images/card-bg.svg"
            className="absolute top-0 left-0 w-full h-auto"
            alt=""
          />
          <div className="relative h-[307px]">
            <div
              className="sm:w-[160px] w-[125px] aspect-square sm:mt-[32px] mt-[20px] sm:mb-[24px] mb-[16px] mx-auto rounded-[8px] bg-white"
              style={{
                boxShadow: "0px 4px 24px 0px #0000001F"
              }}
            >
              <img
                src={item.image}
                className="w-full h-full object-contain p-[10px]"
                alt=""
              />
            </div>
            <h3 className="h-[54px] font-[700] sm:text-[18px] text-[14px] text-[#121212] sm:mb-[24px] mb-[16px] mx-[16px] text-center line-clamp-2">
              {item.title}
            </h3>
            <div className="bg-[#F7F7F7] py-[12px] px-[16px] flex flex-wrap items-center sm:justify-between justify-center gap-[12px]">
              <div className="font-[400] text-[14px] text-[#414042]">
                Ho Chi Minh
              </div>
              <div className="inline-flex items-center gap-[6px] font-[400] text-[14px] text-[#121212]">
                <FaUserTie className="text-[16px] text-[#000096]" /> 5 Việc làm
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}