import React from "react";
import {useResize} from "@hooks/useResize.tsx";
import Main from "@components/main/main.tsx";
import Purposes from "@components/purposes";
import AboutTeam from "@components/about-team";
import Reasons from "@components/reasons";
import Functions from "@components/functions";
import Carousel from "@components/carousel";
import ContactForm from "@components/contact-form/index.tsx"
import Marker from "@components/marker/marker.tsx";


const Home: React.FC = () => {
const {width} = useResize();
    return (
        <>
            <Main />
            <Purposes />
            <AboutTeam />
            <Reasons/>
            <Functions />
            <section className={"carousel"}>
                {width <= 576 ? (
                    <h2 className="title-container__title">
                        <span className={"title-container__span"}>О приложении</span></h2>
                ) : (
                    <div className={"card__marker"}>
                        <Marker markerText={"о приложении"}/>
                    </div>
                )}
                <Carousel/>
            </section>
            <ContactForm/>
        </>
    )
}

export default Home;