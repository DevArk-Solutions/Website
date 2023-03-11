import ComponentWithChildren from "../../types/ComponentWithChildren";

export const TemplateCard: ComponentWithChildren<{
    title: string;
    description: string;
    image: string;
}> = ({ title, description, image }) => {
    return (
        <div
            className={
                "overflow-hidden rounded-3xl border-[0.5px] border-slate-400 px-8 py-10 shadow-lg"
            }
        >
            <div className={"flex flex-col items-center"}>
                <h2>{title}</h2>
            </div>
        </div>
    );
};
