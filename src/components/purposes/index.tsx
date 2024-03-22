import React from "react";
import Marker from "@components/marker/marker.tsx";
import {useResize} from "@hooks/useResize";


const Purposes: React.FC = () => {
    const {width} = useResize();

    const handleAccordionClick: React.MouseEvent<HTMLDivElement> = (evt) => {
        if (evt.currentTarget.querySelector(".item__btn").classList.contains("item__btn_on")) {
            evt.currentTarget.querySelector(".item__btn").classList.remove("item__btn_on")
        } else {
            evt.currentTarget.querySelector(".item__btn").classList.add("item__btn_on")
        }
    }

    return (
            <section className={"purposes"}>
                <div className={"title-container"}>
                    {width > 1023 ? (<h2 className="title-container__title"><span
                        className={"title-container__span"}>Упростим</span> процесс
                        выращивания
                        растений и&nbsp;поможем Вам достичь <span className={"title-container__span"}>результатов</span>
                    </h2>) : (<h2 className="title-container__title">поможем достичь <span className={"title-container__span"}>результатов</span>
                    </h2>)}

                    <Marker markerText={"Наши цели"}/>
                </div>
                {width >= 1023 ? (
                    <div className="purposes__items">
                        <div className={"item"}>
                            <div className={"item__title-container"}>
                            <p className={"text_m item__number"}>01</p>
                            <p className={"text_m item__title"}>Инновации в гидропонике</p>
                        </div>
                        <p className={"text_s item__description"}>Мы&nbsp;постоянно исследуем и&nbsp;разрабатываем новые
                            методы и&nbsp;технологии в&nbsp;гидропонике, чтобы предоставить нашим клиентам самые
                            передовые
                            и&nbsp;эффективные инструменты для выращивания растений.</p>
                    </div>
                    <div className={"item"}>
                        <div className={"item__title-container"}>
                            <p className={"text_m item__number"}>02</p>
                            <p className={"text_m item__title"}>Устойчивое сельское хозяйство</p>
                        </div>
                        <p className={"text_s item__description"}>Мы&nbsp;верим в&nbsp;потенциал гидропоники как
                            устойчивого метода выращивания растений. Наша цель&nbsp;&mdash; содействовать развитию
                            устойчивого сельского хозяйства, где растения выращиваются без почвы, с&nbsp;минимальным
                            использованием воды и&nbsp;питательных веществ, и&nbsp;снижением негативного воздействия
                            на&nbsp;окружающую среду.</p>
                    </div>
                    <div className={"item"}>
                        <div className={"item__title-container"}>
                            <p className={"text_m item__number"}>03</p>
                            <p className={"text_m item__title"}>Повышение урожайности и эффективности</p>
                        </div>
                        <p className={"text_s item__description"}>Мы&nbsp;стремимся помочь клиентам повысить урожайность
                            и&nbsp;эффективность своих гидропонных систем. Наша цель оптимизировать условия выращивания,
                            автоматизировать процессы и&nbsp;улучшить контроль над параметрами, такими как температура,
                            влажность, освещение и&nbsp;питательные вещества.</p>
                    </div>
                    <div className={"item"}>
                        <div className={"item__title-container"}>
                            <p className={"text_m item__number"}>04</p>
                            <p className={"text_m item__title"}>Обеспечение доступности и простоты использования</p>
                        </div>
                        <p className={"text_s item__description"}>Мы&nbsp;стремимся сделать гидропонику доступной для
                            всех. Наша цель&nbsp;&mdash; предоставить интуитивно понятные и&nbsp;легко используемые
                            инструменты управления гидропонными теплицами.</p>
                    </div>
                    <div className={"item"}>
                        <div className={"item__title-container"}>
                            <p className={"text_m item__number"}>05</p>
                            <p className={"text_m item__title"}>Поддержка и обучение</p>
                        </div>
                        <p className={"text_s item__description"}>Мы&nbsp;ценим наших клиентов и&nbsp;стремимся
                            предоставить им&nbsp;высокий уровень поддержки. Мы&nbsp;предлагаем обучающие материалы,
                            руководства и&nbsp;персонализированную помощь, чтобы помочь нашим клиентам достичь желаемых
                            результатов.</p>
                    </div>
                </div>
                ) : (
                    <div className="purposes__items">
                        <details className={"item"}>
                            <summary className={"item__title-container"} onClick={handleAccordionClick}>
                                <div className={"item__number-container"}>
                                    <p className={"text_m item__number"}>01</p>
                                <p className={"text_m item__title"}>Инновации в гидропонике</p>
                                </div>
                                <div className={"link item__btn"}></div>

                            </summary>
                            <p className={"text_s item__description"}>Мы&nbsp;постоянно исследуем и&nbsp;разрабатываем
                                новые
                                методы и&nbsp;технологии в&nbsp;гидропонике, чтобы предоставить нашим клиентам самые
                                передовые
                                и&nbsp;эффективные инструменты для выращивания растений.</p>
                        </details>
                        <details className={"item"}>
                            <summary className={"item__title-container"} onClick={handleAccordionClick}>
                                <div className={"item__number-container"}>
                                    <p className={"text_m item__number"}>02</p>
                                    <p className={"text_m item__title"}>Устойчивое сельское хозяйство</p>
                                </div>
                                <div className={"link item__btn"}></div>
                            </summary>
                            <p className={"text_s item__description"}>Мы&nbsp;верим в&nbsp;потенциал гидропоники как
                                устойчивого метода выращивания растений. Наша цель&nbsp;&mdash; содействовать развитию
                                устойчивого сельского хозяйства, где растения выращиваются без почвы, с&nbsp;минимальным
                                использованием воды и&nbsp;питательных веществ, и&nbsp;снижением негативного воздействия
                                на&nbsp;окружающую среду.</p>
                        </details>
                        <details className={"item"}>
                            <summary className={"item__title-container"} onClick={handleAccordionClick}>
                                <div className={"item__number-container"}>
                                <p className={"text_m item__number"}>03</p>
                                <p className={"text_m item__title"}>Повышение урожайности и эффективности</p>
                                 </div>
                                <div className={"link item__btn"}></div>
                            </summary>
                            <p className={"text_s item__description"}>Мы&nbsp;стремимся помочь клиентам повысить
                                урожайность
                                и&nbsp;эффективность своих гидропонных систем. Наша цель оптимизировать условия
                                выращивания,
                                автоматизировать процессы и&nbsp;улучшить контроль над параметрами, такими как
                                температура,
                                влажность, освещение и&nbsp;питательные вещества.</p>
                        </details>
                        <details className={"item"}>
                            <summary className={"item__title-container"} onClick={handleAccordionClick}>
                                <div className={"item__number-container"}>
                                    <p className={"text_m item__number"}>04</p>
                                    <p className={"text_m item__title"}>Обеспечение доступности и простоты
                                        использования</p>
                                </div>
                                <div className={"link item__btn"}></div>
                            </summary>
                            <p className={"text_s item__description"}>Мы&nbsp;стремимся сделать гидропонику доступной
                                для
                                всех. Наша цель&nbsp;&mdash; предоставить интуитивно понятные и&nbsp;легко используемые
                                инструменты управления гидропонными теплицами.</p>
                        </details>
                        <details className={"item"}>
                            <summary className={"item__title-container"} onClick={handleAccordionClick}>
                                <div className={"item__number-container"}>
                                <p className={"text_m item__number"}>05</p>
                                <p className={"text_m item__title"}>Поддержка и обучение</p>
                                </div>
                                <div className={"link item__btn"}></div>
                            </summary>
                            <p className={"text_s item__description"}>Мы&nbsp;ценим наших клиентов и&nbsp;стремимся
                                предоставить им&nbsp;высокий уровень поддержки. Мы&nbsp;предлагаем обучающие материалы,
                                руководства и&nbsp;персонализированную помощь, чтобы помочь нашим клиентам достичь
                                желаемых
                                результатов.</p>
                        </details>
                    </div>
                )}

            </section>

    )
}

export default Purposes;