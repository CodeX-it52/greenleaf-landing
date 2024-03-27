import React from "react";
import ScrollTriggerAnimation from "@components/scrollTriggerAnimation";
import BlinkAnimationComponent from "@components/blinkAnimationComponent";
import {HashLink} from "react-router-hash-link";
import {useScroll} from "@hooks/useScroll.tsx";
import {useResize} from "@hooks/useResize.tsx";
import ImageDekstop from "@images/device.svg"
import ImageMob from "@images/device_mob.svg"

const visibleSetting = {
    opacity: 1,
    secondParam: 'x',
    paramNumber: 0
}

const hiddenSetting = {
    opacity: 0,
    secondParam: 'x',
    paramNumber: 50
}

const Main: React.FC = () => {
    const {width} = useResize();

    return (
        <ScrollTriggerAnimation visibleSetting={visibleSetting} hiddenSetting={hiddenSetting}>
            <section className={"cover"} id={"#"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                        hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                    <div className={"cover__description"}>
                        <h1 className={"cover__title"}>Управляйте будущим ростом с&nbsp;<span
                            className={"cover__title-span"}>GreenLeaf</span></h1>
                        <p className={"text_m cover__subtitle"}>Мы&nbsp;автоматизируем процесс выращивания растений
                            в&nbsp;гидропонных системах и&nbsp;предоставим надежные и&nbsp;понятные инструменты
                            управления</p>
                        <HashLink to={"/#contacts"} smooth className={"cover__btn link"} scroll={useScroll}>Оставить
                            заявку</HashLink>
                    </div>
                </ScrollTriggerAnimation>
                <BlinkAnimationComponent>
                    <div className={"cover__images-container"}>
                    </div>
                </BlinkAnimationComponent>
                <div className={"cover__dekstop"}>
                    <img className={"cover__image"} src={width > 576 ? ImageDekstop : ImageMob}/>

                </div>
                {width > 576 && (
                    <div className={"cover__btns-container"}>
                        <div className={"cover__btns"}></div>
                        <div className={"cover__btns"}></div>
                        <div className={"cover__gradient"}></div>
                    </div>
                )}

            </section>
        </ScrollTriggerAnimation>
    )
}

export default Main;