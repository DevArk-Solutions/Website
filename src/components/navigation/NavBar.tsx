import Link from "next/link";
import Image from "next/image";
import ComponentWithChildren from "../../types/ComponentWithChildren";
import { NavLink } from "./NavLink";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Transition } from "@headlessui/react";
import { LinkButton } from "./LinkButton";

const NavBarContent: ComponentWithChildren = () => {
    return (
        <>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/about"}>About</NavLink>
            <NavLink href={"/services"}>Services</NavLink>
            <NavLink href={"/packages"}>Packages</NavLink>
            <NavLink href={"/blog"}>Blog</NavLink>
            <NavLink href={"/case-studies"}>Case Studies</NavLink>
            <LinkButton href="/contact">Contact us</LinkButton>
        </>
    );
};

export const NavBar: ComponentWithChildren = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <div>
            <div className="mx-4 flex justify-between">
                <Link href={"/"} className={"relative flex h-16 w-52"}>
                    <Image src={"/logo.svg"} alt="DevArk Solutions Logo" fill />
                </Link>
                <div className="hidden items-center space-x-6 lg:flex">
                    <NavBarContent />
                </div>
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                        className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
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
                    <div className={`mt-2 lg:hidden`} ref={ref}>
                        <div className="flex flex-col items-center space-y-6">
                            <NavBarContent />
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
};
