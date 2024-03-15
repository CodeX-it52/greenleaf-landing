import React from "react";
import Main from "@components/main/main.tsx";
import Purposes from "@components/purposes";
import AboutTeam from "@components/about-team";
import Reasons from "@components/reasons";
import Functions from "@components/functions";


const Home: React.FC = () => {
    return (
        <>
            <Main />
            <Purposes />
            <AboutTeam />
            <Reasons/>
            <Functions />
        </>
    )
}

export default Home;