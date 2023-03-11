import { NextPage } from "next";

import { NavBar } from "../components/NavBar";

import DefaultLayout from "../layouts/DefaultLayout";

const Home: NextPage = () => {
    return <DefaultLayout header={<NavBar />}>asdsdf</DefaultLayout>;
};

export default Home;
