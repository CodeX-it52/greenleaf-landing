import React from "react";
import {lazy} from "react";
import {useResize} from "@hooks/useResize.tsx";
import ScrollTriggerAnimation from "@components/scrollTriggerAnimation";
const Main = lazy(() => import("@components/main/main.tsx"));
const Purposes = lazy(() => import("@components/purposes"));
const AboutTeam = lazy(() => import("@components/about-team"));
const Reasons = lazy(() => import("@components/reasons"));
const Functions = lazy(() => import("@components/functions"));
const Carousel = lazy(() => import("@components/carousel"));
const ContactForm = lazy(() => import("@components/contact-form/index.tsx"));
const Marker = lazy(() => import("@components/marker/marker.tsx"));


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
                    <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                            hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: 100}}>
                    <h2 className="title-container__title">
                        <span className={"title-container__span"}>О приложении</span></h2>
                    </ScrollTriggerAnimation>
                        ) : (
                    <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                            hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: 100}}>
                    <div className={"card__marker"}>
                        <Marker markerText={"о приложении"}/>
                    </div>
                    </ScrollTriggerAnimation>
                )}
                <Carousel/>
            </section>
            <ContactForm/>
        </>
    )
}

export default Home;