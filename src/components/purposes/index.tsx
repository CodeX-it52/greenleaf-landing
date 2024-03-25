import React, {memo, useCallback} from "react";
import {lazy} from "react";
const Marker = lazy(() => import("@components/marker/marker.tsx"));
import {useResize} from "@hooks/useResize";
import ScrollTriggerAnimation from "@components/scrollTriggerAnimation";
import {motion, AnimatePresence} from "framer-motion";

interface Purpose {
    title: string;
    description: string;
    number: string;
}

type PurposesType = Purpose[];

const purposesInfo: PurposesType = [
    {
        title: "Инновации в гидропонике",
        number: "01",
        description: "Мы постоянно исследуем и разрабатываем новые методы и технологии в гидропонике, чтобы предоставить нашим клиентам самые передовые и эффективные инструменты для выращивания растений.",
    },
    {
        title: "Устойчивое сельское хозяйство",
        number: "02",
        description: "Мы верим в потенциал гидропоники как устойчивого метода выращивания растений. Наша цель содействовать развитию устойчивого сельского хозяйства, где растения выращиваются без почвы, с минимальным использованием воды и питательных веществ, и снижением негативного воздействия на окружающую среду.",
    },
    {
        title: "Повышение урожайности и эффективности",
        number: "03",
        description: "Мы стремимся помочь клиентам повысить урожайность и эффективность своих гидропонных систем. Наша цель оптимизировать условия выращивания, автоматизировать процессы и улучшить контроль над параметрами, такими как температура, влажность, освещение и питательные вещества.",
    },
    {
        title: "Обеспечение доступности и простоты использования",
        number: "04",
        description: "Мы стремимся сделать гидропонику доступной для всех. Наша цель    предоставить интуитивно понятные и легко используемые инструменты управления гидропонными теплицами.",
    },
    {
        title: "Поддержка и обучение",
        number: "05",
        description: "Мы ценим наших клиентов и стремимся предоставить им высокий уровень поддержки. Мы предлагаем обучающие материалы, руководства и персонализированную помощь, чтобы помочь нашим клиентам достичь желаемых результатов.",
    },
]

const AccordionItem = memo(({item, index, openIndex, handleAccordionClick}) => {
    return (
        <div className={"item"}>
            <motion.div className={"item__title-container"} layout onClick={() => {
                handleAccordionClick(index)
            }}>
                <div className={"item__number-container"}>
                    <p className={"text_m item__number"}>{item.number}</p>
                    <p className={"text_m item__title"}>{item.title}</p>
                </div>
                <div className={`link item__btn ${openIndex === index && "item__btn_on"}`}></div>
            </motion.div>
            <AnimatePresence initial={false}>
                {openIndex === index && (
                    <motion.p
                        transition={{duration: 0.4}}
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        className={"text_s item__description"}
                    >
                        {item.description}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
})

const Purposes: React.FC = () => {
    const {width} = useResize();
    const [openIndex, setOpenIndex] = React.useState(null);
    const handleAccordionClick = useCallback((index) => {
        setOpenIndex(index === openIndex ? null : index);
    }, [openIndex])

    return (
        <section className={"purposes"}>
            <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <div className={"title-container"}>
                    {width > 1023 ? (<h2 className="title-container__title"><span
                        className={"title-container__span"}>Упростим</span> процесс
                        выращивания
                        растений и поможем Вам достичь <span className={"title-container__span"}>результатов</span>
                    </h2>) : (<h2 className="title-container__title">поможем достичь <span
                        className={"title-container__span"}>результатов</span>
                    </h2>)}
                    <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                            hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: 150}}>
                        <Marker markerText={"Наши цели"}/>
                    </ScrollTriggerAnimation>
                </div>
            </ScrollTriggerAnimation>
            {width >= 1023 ? (
                <motion.div
                    className="purposes__items">
                    <hr className={"item_border"}/>
                    {purposesInfo.map((item, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                className={"item"}
                                initial={"hidden"}
                                viewport={{once: true}}
                                transition={{duration: 1}}
                                whileInView={"visible"}
                                variants={{
                                    visible: {opacity: 1, y: 0},
                                    hidden: {opacity: 0, y: 100}
                                }}>
                                <div className={"item__title-container"}>
                                    <p className={"text_m item__number"}>{item.number}</p>
                                    <p className={"text_m item__title"}>{item.title}</p>
                                </div>
                                <p className={"text_s item__description"}>{item.description}</p>
                            </motion.div>
                            <motion.hr className={"item_border"}
                            initial={"hidden"}
                            whileInView={"visible"}
                            transition={{duration: 1}}
                            viewport={{once: true}}
                            variants={{
                                visible: {opacity: 1, y: 0},
                                hidden: {opacity: 0, y: 100}
                            }}
                            />
                        </React.Fragment>
                    ))}
                </motion.div>
            ) : (

                <motion.div className="purposes__items">
                    <hr className={"item_border"}/>
                    {purposesInfo.map((item, index) => (
                        <>
                        <AccordionItem
                            key={index}
                            item={item}
                            index={index}
                            openIndex={openIndex}
                            handleAccordionClick={handleAccordionClick}
                        />
                        <motion.hr className={"item_border"}
                            initial={"hidden"}
                            whileInView={"visible"}
                            transition={{duration: 1}}
                            viewport={{once: true}}
                            variants={{
                                visible: {opacity: 1, y: 0},
                                hidden: {opacity: 0, y: 0}
                            }}/>
                        </>
            ))}
        </motion.div>
            )}

        </section>

    )
}

export default Purposes;