import Link from "next/link";
import Image from "next/image";
import ComponentWithChildren from "../types/ComponentWithChildren";
import { NavLink } from "./NavLink";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Transition } from "@headlessui/react";

const NavBarContent: ComponentWithChildren = () => {
    return (
        <>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/about"}>About</NavLink>
            <NavLink href={"/services"}>Services</NavLink>
            <NavLink href={"/packages"}>Packages</NavLink>
            <NavLink href={"/blog"}>Blog</NavLink>
            <NavLink href={"/case-studies"}>Case Studies</NavLink>
            <NavLink href={"/contact"}>Contact Us</NavLink>
        </>
    );
};

export const NavBar: ComponentWithChildren = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between mx-4 md:mx-0">
                <Link href={"/"} className={"flex relative w-52 h-16"}>
                    <Image src={"/logo.svg"} alt="DevArk Solutions Logo" fill />
                </Link>
                <div className="items-center space-x-6 hidden lg:flex">
                    <NavBarContent />
                </div>
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                        aria-label="toggle menu"
                    >
                        {isNavbarOpen ? <IconX /> : <IconMenu2 />}
                    </button>
                </div>
            </div>
            <Transition
                show={isNavbarOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className={`lg:hidden mt-2`} ref={ref}>
                        <div className="items-center space-y-6 flex flex-col">
                            <NavBarContent />
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
};
