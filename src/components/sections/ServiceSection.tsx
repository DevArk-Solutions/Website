import ComponentWithChildren from "../../types/ComponentWithChildren";
import { Swiper, SwiperSlide } from "swiper/react";
import { TemplateCard } from "../cards/TemplateCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const ServiceSection: ComponentWithChildren = () => {
    return (
        <section className={"relative mt-16 w-full"}>
            <div className={"max-w-3xl"}>
                <p className={"subtitle"}>Our Services</p>
                <h1 className={"title mt-4"}>
                    We are development experts on all technologies & platforms.
                </h1>
            </div>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                slidesPerView={4}
                className="mt-4"
            >
                <SwiperSlide>
                    <TemplateCard title="Slide 1" description="" image="" />
                </SwiperSlide>
                <SwiperSlide>
                    <TemplateCard title="Slide 2" description="" image="" />
                </SwiperSlide>
                <SwiperSlide>
                    <TemplateCard title="Slide 3" description="" image="" />
                </SwiperSlide>
                <SwiperSlide>
                    <TemplateCard title="Slide 4" description="" image="" />
                </SwiperSlide>
                <SwiperSlide>
                    <TemplateCard title="Slide 5" description="" image="" />
                </SwiperSlide>
                <SwiperSlide>
                    <TemplateCard title="Slide 6" description="" image="" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};
