import { NextPage } from "next";

import { NavBar } from "../components/navigation/NavBar";
import { HeroSection } from "../components/sections/HeroSection";
import { ServiceSection } from "../components/sections/ServiceSection";

import DefaultLayout from "../layouts/DefaultLayout";

const Home: NextPage = () => {
    return (
        <DefaultLayout header={<NavBar />}>
            <HeroSection />
            <ServiceSection />
        </DefaultLayout>
    );
};

export default Home;
