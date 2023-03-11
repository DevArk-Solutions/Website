import React from "react";
import ComponentWithChildren from "../types/ComponentWithChildren";

export const DefaultLayout: ComponentWithChildren<{
    header?: React.ReactNode;
    footer?: React.ReactNode;
}> = ({ children, header, footer }) => {
    return (
        <>
            <header
                className={"container mx-auto border-b border-slate-400 py-6"}
            >
                {header}
            </header>
            <main className={"container min-h-screen px-2 sm:mx-auto"}>
                {children}
            </main>
            <footer className={"h-32 w-screen bg-slate-900"}>{footer}</footer>
        </>
    );
};

export default DefaultLayout;
