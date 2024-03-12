import React from "react";
import ScrollTriggerAnimation from "@components/scrollTriggerAnimation";
import BlinkAnimationComponent from "@components/blinkAnimationComponent";

const Main: React.FC = () => {
    return (
        <ScrollTriggerAnimation>
            <section className={"cover"} id={"#"}>
                <div className={"cover__description"}>
                    <h1 className={"cover__title"}>Управляйте будущим ростом с&nbsp;<span
                        className={"cover__title-span"}>GreenLeaf</span></h1>
                    <p className={"text_m cover__subtitle"}>Мы&nbsp;автоматизируем процесс выращивания растений
                        в&nbsp;гидропонных системах и&nbsp;предоставим надежные и&nbsp;понятные инструменты
                        управления</p>
                    <button className={"cover__btn link"}>Оставить заявку</button>
                </div>
                <BlinkAnimationComponent>
                <div className={"cover__images-container"}>
                </div>
                </BlinkAnimationComponent>
                <div className={"cover__dekstop"}></div>
            </section>
        </ScrollTriggerAnimation>
    )
}

export default Main;