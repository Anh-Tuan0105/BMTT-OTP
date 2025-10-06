"use client";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderAccount } from "./HeaderAccount";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }


    return (
        <>
            <header className="bg-[#000071] py-[15px]">
                <div className="container mx-auto px-[16px]">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <HeaderLogo />
                        {/* Menu */}
                        <HeaderMenu showMenu={showMenu} />
                        {/* Account */}
                        <HeaderAccount />
                        {/* Button Menu Mobile */}
                        <button className="lg:hidden ml-[12px]" onClick={handleShowMenu}>
                            <FaBars className="text-[20px] text-[#FFFFFF]" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}