import Link from "next/link";
import ComponentWithChildren from "../../types/ComponentWithChildren";

type ButtonType = "primary" | "secondary";

const ButtonStyles: Record<ButtonType, string> = {
    primary:
        "inline-block rounded-lg bg-primary-700 py-4 px-8 text-sm font-semibold text-white shadow transition-all duration-300 ease-in-out hover:scale-90 hover:bg-primary-900 text-center",
    secondary:
        "inline-block rounded-lg border-2 border-primary-700 bg-white py-4 px-8 text-sm font-semibold text-primary-700 shadow transition-all duration-300 ease-in-out text-center hover:scale-90 hover:bg-primary-700 hover:text-white",
};

export const LinkButton: ComponentWithChildren<{
    href: string;
    className?: string;
    style?: ButtonType;
}> = ({ href, style = "primary", children, className }) => {
    return (
        <Link href={href} className={`${ButtonStyles[style]} ${className}`}>
            {children}
        </Link>
    );
};
