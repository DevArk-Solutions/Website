import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import ComponentWithChildren from "../../types/ComponentWithChildren";

export const NavLink: ComponentWithChildren<{
    linkProps?: Omit<LinkProps, "href">;
    href: string;
}> = ({ children, linkProps, href }) => {
    const router = useRouter();
    const active = useMemo(
        () => router.pathname === href,
        [router.pathname, href]
    );

    return (
        <Link
            className={`${
                active ? "font-bold" : ""
            } transition-colors duration-300 hover:text-primary-800`}
            href={href}
            {...linkProps}
        >
            {children}
        </Link>
    );
};
