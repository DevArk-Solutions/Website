import Image from "next/image";
import { ReactNode } from "react";
import ComponentWithChildren from "../../types/ComponentWithChildren";
import { LinkButton } from "../navigation/LinkButton";

export const TemplateCard: ComponentWithChildren<{
    title: string;
    description: string;
    image: ReactNode;
}> = ({ title, description, image }) => {
    return (
        <div
            className={
                "flex  h-[500px] min-w-[300px] flex-col items-center gap-4 overflow-hidden rounded-3xl border-[0.5px] border-slate-400 bg-white px-8 py-10 text-center shadow-lg"
            }
        >
            <div className="">{image}</div>
            <div className={"flex flex-col items-center text-2xl font-bold"}>
                <h2>{title}</h2>
            </div>
            <p className={"flex flex-col items-center"}>{description}</p>
            <LinkButton
                style="secondary"
                href="/contact"
                className={"mt-auto w-full justify-self-end"}
            >
                Contact us
            </LinkButton>
        </div>
    );
};
