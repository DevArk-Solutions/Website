import ComponentWithChildren from "../../types/ComponentWithChildren";
import { Swiper, SwiperSlide } from "swiper/react";
import { TemplateCard } from "../cards/TemplateCard";

import "swiper/swiper.min.css";

import FrontendIconImage from "../svgs/FrontendIconImage";
import BackendIconImage from "../svgs/BackendIconImage";
import WebAppIconImage from "../svgs/WebAppIconImage";
import WorkflowAutomationIconImage from "../svgs/WorkflowAutomationIconImage";
import DatabaseIconImage from "../svgs/DatabaseIconImage";
import CloudServerIconImage from "../svgs/CloudServerIconImage";

export const ServiceSection: ComponentWithChildren = () => {
    return (
        <section className={"relative mt-16 w-full"}>
            <div className={"mx-auto max-w-screen-xl px-4"}>
                <p className={"subtitle"}>Our Services</p>
                <h1 className={"title mt-4"}>
                    We are development experts on all technologies & platforms.
                </h1>
            </div>
            <Swiper
                className="mt-4 px-4 md:px-0"
                centeredSlides={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide>
                    <TemplateCard
                        title="Frontend Development"
                        description="Our Frontend Development services provide a visually appealing and user-friendly experience for your customers by creating dynamic and responsive websites."
                        image={<FrontendIconImage />}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TemplateCard
                        title="Backend Development"
                        description="Backend Development offers a complete range of custom development services aimed at enhancing user experiences and streamlining business processes for maximum efficiency."
                        image={<BackendIconImage />}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TemplateCard
                        title="Web App Development"
                        description="We offer bespoke Web Application development services, focusing on creating user-friendly and efficient solutions that meet the specific needs of our clients."
                        image={<WebAppIconImage />}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TemplateCard
                        title="Workflow Automation"
                        description="Workflow Automation streamlines your business processes, improving efficiency and customer experience by automating repetitive tasks and reducing human error."
                        image={<WorkflowAutomationIconImage />}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TemplateCard
                        title="Database & Data Science"
                        description="Our databases and data science services provide comprehensive and data-driven solutions for businesses to optimize their operations and make data-driven decisions."
                        image={<DatabaseIconImage />}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TemplateCard
                        title="Servers & Cloud Infrastructure"
                        description="Servers & Cloud Infrastructure offers customized and secure solutions for businesses to store and manage their data in a scalable and reliable cloud environment."
                        image={<CloudServerIconImage />}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};
