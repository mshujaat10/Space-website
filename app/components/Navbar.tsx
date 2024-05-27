"use client"
import { useEffect, useState } from "react";
import Image from "next/image"
import logo from "@/public/logo-inverse@2x.png"
import { SlBag } from "react-icons/sl";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
    const [header, setHeader] = useState(false);
    const scrollHeader = () => {
        const halfPageHeight = window.innerHeight / 2;

        if (window.scrollY >= halfPageHeight) {
                setHeader(true);
        } else {
                setHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader)
        return (() => {
            window.addEventListener("scroll", scrollHeader)
        })
    }, [])

    return (
        <nav className={header ? 'py-[25px] px-[1rem] lg:py-[35px] lg:px-[5rem] flex items-center justify-between bg-[#000000E6] lg:fixed top-0 lg:w-full lg:z-10 shadow-sm' : "flex items-center justify-between py-[25px] px-[1rem] lg:py-[35px] lg:px-[5rem]"}>
            <div>
                <Image src={logo} width={140} height={100} alt="logo-img" />
            </div>
            <div className="flex">
                <ul className="text-white hidden md:flex items-center text-[16px]">
                    <li className="border-b-2 cursor-pointer">Home</li>
                    <li className="hover:border-b-2 cursor-pointer mx-[20px]">Pages</li>
                    <li className="hover:border-b-2 cursor-pointer">Portfolio</li>
                    <li className="hover:border-b-2 cursor-pointer mx-[20px]">Events</li>
                    <li className="hover:border-b-2 cursor-pointer">Blog</li>
                    <li className="hover:border-b-2 cursor-pointer mx-[20px]">Shop</li>
                </ul>
                <div className="text-white flex items-center ms-[20px]">
                    <SlBag className="text-[25px] mx-[20px]" />
                    <CgMenuGridO className="text-[33px]" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar