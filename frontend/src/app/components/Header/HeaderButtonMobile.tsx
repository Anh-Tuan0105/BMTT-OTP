"use client";
import { FaBars } from "react-icons/fa"

interface HeaderButtonMobileProps {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>; // Kiểu của hàm setShowMenu(hàm thứ hai của useState)
}



export const HeaderButtonMobile = ({ showMenu, setShowMenu }: HeaderButtonMobileProps) => {

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <button className="lg:hidden ml-[12px]" onClick={handleShowMenu}>
            <FaBars className="text-[20px] text-[#FFFFFF]" />
        </button>
    )
}