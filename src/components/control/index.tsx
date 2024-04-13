import React from "react";
import {motion} from "framer-motion";
import ScrollTriggerAnimation from "@components/scrollTriggerAnimation";
import Marker from "@components/marker/marker.tsx";
import PHLevel from "@images/ph_level.svg"
import CO2Level from "@images/co2_level.svg"
import EcLevel from "@images/ec_level.svg"
import Temperature from "@images/temperature_leve.svg"
import Water from "@images/waternity.svg"
import LightLevel from "@images/light_level.svg"

const Control: React.FC = () => {
    return (
        <section className={"control"}>
            <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}} hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <div className={"title-container"}>
                    <h2 className="title-container__title">Поддерживаемые <span className={"title-container__span"}>показатели</span></h2>
                    <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}} hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: 150}}>
                        <Marker markerText={"контроль"}/>
                    </ScrollTriggerAnimation>
                </div>
            </ScrollTriggerAnimation>
            <motion.div
                className={"control__main"}
                initial={"hidden"}
                viewport={{once: true}}
                transition={{duration: 1}}
                whileInView={"visible"}
                variants={{
                    visible: {opacity: 1, y: 0},
                    hidden: {opacity: 0, y: 100}
                }}
            >
                <p className={"text_m control__text"}>Мы&nbsp;учитываем множество показателей, что способствует наилучшему процессу выращивания растений.</p>
                <div className={"control__items"}>
                    <div className={"control__item"}>
                        <p className={"control__item-text"}>Уровень CO2</p>
                        <div className={"control__item-qualities"}>
                            <img className={"control__item-icon"} src={CO2Level} alt={"Изображение показателя"}/>
                            <h2 className={"control__item-text-quality"}>10%</h2>
                        </div>
                    </div>
                    <div className={"control__item"}>
                        <p className={"control__item-text"}>Уровень PH</p>
                        <div className={"control__item-qualities"}>
                            <img className={"control__item-icon"} src={PHLevel} alt={"Изображение показателя"}/>
                            <h2 className={"control__item-text-quality"}>70%</h2>
                        </div>
                    </div>
                    <div className={"control__item"}>
                        <p className={"control__item-text"}>Показатель ЕС</p>
                        <div className={"control__item-qualities"}>
                            <img className={"control__item-icon"} src={EcLevel} alt={"Изображение показателя"}/>
                            <h2 className={"control__item-text-quality"}>50%</h2>
                        </div>
                    </div>
                    <div className={"control__item"}>
                        <p className={"control__item-text"}>Влажность</p>
                        <div className={"control__item-qualities"}>
                            <img className={"control__item-icon"} src={Water} alt={"Изображение показателя"}/>
                            <h2 className={"control__item-text-quality"}>70%</h2>
                        </div>
                    </div>
                    <div className={"control__item"}>
                        <p className={"control__item-text"}>Температура воздуха</p>
                        <div className={"control__item-qualities"}>
                            <img className={"control__item-icon"} src={Temperature} alt={"Изображение показателя"}/>
                            <h2 className={"control__item-text-quality"}>28°C</h2>
                        </div>
                    </div>
                    <div className={"control__item"}>
                        <p className={"control__item-text"}>Уровень света</p>
                        <div className={"control__item-qualities"}>
                            <img className={"control__item-icon"} src={LightLevel} alt={"Изображение показателя"}/>
                            <h2 className={"control__item-text-quality"}>335 ppfd</h2>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Control;
