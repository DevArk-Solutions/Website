import Image from "next/image";
import { useEffect, useRef } from "react";
import ComponentWithChildren from "../../types/ComponentWithChildren";
import { LinkButton } from "../navigation/LinkButton";

export const HeroSection: ComponentWithChildren = () => {
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const outer = outerRef.current;
        const inner = innerRef.current;

        if (outer && inner) {
            outer.addEventListener("mousemove", (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;

                inner.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
            });
        }
    }, [outerRef, innerRef]);

    return (
        <section
            className={
                "relative mx-auto mt-16 w-full max-w-screen-xl pb-16 lg:pb-96"
            }
            ref={outerRef}
        >
            <div className={"relative z-10 max-w-lg pl-8 "}>
                <p className={"subtitle"}>Software Development Agency</p>
                <h1 className={"title mt-4"}>
                    We are a top-notch development agency.
                </h1>
                <p className={"mt-8 tracking-tight text-gray-600"}>
                    We are a software development and consultancy company that
                    specializes in delivering custom software solutions to help
                    businesses of all sizes achieve their goals.
                </p>
                <div className="mt-4 flex  space-x-4">
                    <LinkButton href="/contact">Contact us</LinkButton>
                    <LinkButton style="secondary" href="/services">
                        Our Services
                    </LinkButton>
                </div>
            </div>
            <div
                className={"absolute bottom-0 right-0 hidden lg:inline-block"}
                ref={innerRef}
            >
                <Image
                    src={"/img/hero.svg"}
                    width={700}
                    height={500}
                    alt={""}
                />
            </div>
        </section>
    );
};
