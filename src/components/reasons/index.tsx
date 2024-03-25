import React from "react";
import {lazy} from "react";
import {motion, AnimatePresence} from "framer-motion";

const Marker = lazy(() => import("@components/marker/marker.tsx"))
import {useResize} from "@hooks/useResize.tsx";
import ScrollTriggerAnimation from "@components/scrollTriggerAnimation";

interface Reason {
    title: string;
    description: string;
}

type ReasonsType = Reason[];

const reasonsInfo: ReasonsType = [
    {
        title: "Технологичность",
        description: "Мы предлагаем надежные и инновационные решения для управления теплицами, которые помогут вам достичь высоких результатов в выращивании растений в гидропонных системах.",
    },
    {
        title: "Эффективность",
        description: "Мы предлагаем широкий спектр функций, позволяющих контролировать и оптимизировать условия выращивания растений в гидропонных системах. Наша система обеспечивает непрерывный контроль и регулировку, что позволяет создавать оптимальные условия для роста и развития растений.",
    },
    {
        title: "Перспективность",
        description: "Мы верим в потенциал гидропоники как передового метода выращивания растений. Наша цель помочь вам достичь лучших результатов в выращивании растений в гидропонных теплицах.",
    },
]

const Reasons: React.FC = () => {
    const {width} = useResize();

    return (
        <section className={"reasons"}>
            <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}} hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
            <div className={"title-container"}>
                {width > 1023 ? (<h2 className="title-container__title">
                    <span className={"title-container__span"}>GreenLeaf</span>  ваш надежный <br/> партнер в достижении успеха</h2>
                ) : (
                    <h2 className="title-container__title">
                        <span className={"title-container__span"}>GreenLeaf</span>  ваш
                        надежный партнер</h2>
                )}
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}} hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: 150}}>
                <Marker markerText={"почему мы"}/>
                </ScrollTriggerAnimation>
            </div>
            </ScrollTriggerAnimation>
            {width > 576 ? (
                <motion.ul className={"reasons__container"}>
                    {reasonsInfo.map((item, index) => (
                        <motion.li
                            key={index}
                            className={"reason"}
                            initial={"hidden"}
                            viewport={{once: true}}
                            transition={{duration: 1.2}}
                            whileInView={"visible"}
                            variants={{
                                visible: {opacity: 1, y: 0},
                                hidden: {opacity: 0, y: 100}
                            }}>
                            <div className={"reason__title-container"}>
                                <div className={"reason__marker"}></div>
                                <p className={"text_m reason__title"}>{item.title}</p>
                            </div>
                            <p className={"text_s reason__description"}>{item.description}</p>
                        </motion.li>
                    ))}
                </motion.ul>
            ) : (
                <motion.ul className={"reasons__container"}>
                    {reasonsInfo.map((item, index) => (
                        <motion.li
                            key={index}
                            className={"reason"}
                            initial={"hidden"}
                            viewport={{once: true}}
                            transition={{duration: 1.2}}
                            whileInView={"visible"}
                            variants={{
                                visible: {opacity: 1, y: 0},
                                hidden: {opacity: 0, y: 100}
                            }}>
                            <div className={"reason__title-container"}>
                                <div className={"reason__marker"}></div>
                                <div className={"reason__title-container reason__title-container_m"}>
                                    <p className={"text_m reason__title"}>{item.title}</p>
                                    <p className={"text_s reason__description"}>{item.description}</p>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </section>
    )
}

export default Reasons;