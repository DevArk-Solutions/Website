import React from "react";
import ComponentWithChildren from "../types/ComponentWithChildren";

export const DefaultLayout: ComponentWithChildren<{
    header?: React.ReactNode;
    footer?: React.ReactNode;
}> = ({ children, header, footer }) => {
    return (
        <>
            <header
                className={
                    "mx-auto max-w-screen-xl border-b border-slate-400 py-6 px-4"
                }
            >
                {header}
            </header>
            <main className={"min-h-screen"}>{children}</main>
            <footer className={"mt-4 h-32 w-screen bg-slate-900"}>
                {footer}
            </footer>
        </>
    );
};

export default DefaultLayout;
