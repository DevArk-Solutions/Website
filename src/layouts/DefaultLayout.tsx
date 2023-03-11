import React from "react";
import ComponentWithChildren from "../types/ComponentWithChildren";

export const DefaultLayout: ComponentWithChildren<{
    header?: React.ReactNode;
    footer?: React.ReactNode;
}> = ({ children, header, footer }) => {
    return (
        <>
            <header
                className={"container py-6 mx-auto border-b border-slate-400"}
            >
                {header}
            </header>
            <main className={"container mx-auto min-h-screen"}>{children}</main>
            <footer className={"w-screen h-32 bg-slate-800"}>{footer}</footer>
        </>
    );
};

export default DefaultLayout;
