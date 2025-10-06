import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

// interface HeaderMenuProps {
//     showMenu: boolean;
// }

export const HeaderMenu = (props: {
    showMenu: boolean
}) => {

    const {showMenu} = props;

    const menuList = [
        {
            name: "Việc Làm IT",
            link: "#",
            children: [
                {
                    name: "Việc làm IT theo kỹ năng",
                    link: "#",
                    children: [
                        {
                            name: "ReactJS",
                            link: "#"
                        },
                        {
                            name: "NodeJS",
                            link: "#"
                        },
                        {
                            name: "Javascript",
                            link: "#"
                        },
                        {
                            name: "HTML5",
                            link: "#"
                        },
                        {
                            name: "CSS3",
                            link: "#"
                        },
                    ]
                },
                {
                    name: "Việc làm IT theo công ty",
                    link: "#"
                },
                {
                    name: "Việc làm IT theo thành phố",
                    link: "#"
                }
            ]
        },
        {
            name: "Top Công Ty IT",
            link: "#",
            children: [
                {
                    name: "FPT Software",
                    link: "#"
                },
                {
                    name: "Techcombank",
                    link: "#"
                },
                {
                    name: "MB Bank",
                    link: "#"
                }
            ]
        },
        {
            name: "Nhà Tuyển Dụng",
            link: "#",
            children: [
                {
                    name: "Đăng Nhập",
                    link: "#"
                },
                {
                    name: "Đăng Ký",
                    link: "#"
                }
            ]
        }
    ];

    return (
        <>
            <nav className={"lg:block " + (showMenu ? "" : "hidden")}>
                <ul className="flex items-center justify-center gap-x-[30px]">
                    {menuList.map((menu, index) => (
                        <li key={index} className="inline-flex items-center gap-x-[8px] relative group/sub-1">
                            <Link href={menu.link} className="font-[600] text-[#FFFFFF] text-[16px]">
                                {menu.name}
                            </Link>
                            {menu.children && (
                                <>
                                    <FaAngleDown className="text-[#FFFFFF] text-[16px]" />
                                    <ul className="absolute top-[100%] left-0 w-[280px] rounded-[4px] bg-[#000065] hidden group-hover/sub-1:block">
                                        {menu.children.map((menuSub1, indexSub1) => (
                                            <li key={indexSub1} className="flex items-center justify-between py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096] group/sub-2">
                                                <Link href={menuSub1.link} className="font-[600] text-[#FFFFFF] text-[16px]">
                                                    {menuSub1.name}
                                                </Link>
                                                {menuSub1.children && (
                                                    <>
                                                        <FaAngleRight className="text-[#FFFFFF] text-[16px]" />
                                                        <ul className="bg-[#000065] absolute top-0 left-[100%] w-[280px] rounded-[4px] hidden group-hover/sub-2:block">
                                                            {menuSub1.children.map((menuSub2, indexSub2) => (
                                                                <li key={indexSub2} className="flex items-center justify-between py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]">
                                                                    <Link href={menuSub2.link} className="font-[600] text-[#FFFFFF] text-[16px]">
                                                                        {menuSub2.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}