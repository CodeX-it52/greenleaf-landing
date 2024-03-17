import React from "react";
import Main from "@components/main/main.tsx";
import Purposes from "@components/purposes";
import AboutTeam from "@components/about-team";
import Reasons from "@components/reasons";
import Functions from "@components/functions";
import Carousel from "@components/carousel";
import ContactForm from "@components/contact-form/index.tsx"

const Home: React.FC = () => {

    return (
        <>
            <Main />
            <Purposes />
            <AboutTeam />
            <Reasons/>
            <Functions />
            <section className={"carousel"}>
                <Carousel />
            </section>
            <ContactForm />
        </>
    )
}

export default Home;