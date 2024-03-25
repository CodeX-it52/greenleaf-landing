import React, {lazy} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {useResize} from "@hooks/useResize.tsx";
import FirstPage from "@images/1_page.png";
import SecondPage from "@images/2_page.png"
import ThirdPage from "@images/3_page.png"
import FourthPage from "@images/4_page.png"
import FifthPage from "@images/5_page.png"
import SixthPage from "@images/6_page.png"
import SeventhPage from "@images/7_page.png"
import EighthPage from "@images/8_page.png"
import NinthPage from "@images/9_page.png"
import TenthPage from "@images/10_page.png"
const ScrollTriggerAnimation = lazy(() => import("@components/scrollTriggerAnimation"));


const cards_gh = [
    <>
        <div className={"card__container"}>
            <div className={"card__description-container"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <h2 className="title-container__title title-container__title_m">
                    <span className={"title-container__span"}>минималистичный</span> дизайн приложения</h2>
                </ScrollTriggerAnimation>
                    <p className={"text_m card__description"}>Понятный и&nbsp;лаконичный интерфейс без большого количества деталей и&nbsp;лишних кнопок. Малое количество основных экранов делает навигацию в&nbsp;приложении по-настоящему простой.</p>
            </div>
            <motion.img className={"card__img"} src={FirstPage} alt={"Демонстрация интерфейса приложения"} initial={"hidden"}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        whileInView={"visible"}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 20}
                        }}/>
        </div>
    </>,
    <>
        <div className={"card__container"}>
            <div className={"card__description-container"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <h2 className="title-container__title title-container__title_m">
                    <span className={"title-container__span"}>напомним</span> о&nbsp;созревании растений</h2>
                </ScrollTriggerAnimation>
                <p className={"text_m card__description"}>Календарь позволяет отслеживать созревания растений, добавлять различные напоминания об&nbsp;особенностях ухода за&nbsp;растениями, а&nbsp;также создавать новые посадки.</p>
            </div>
            <motion.img className={"card__img"} src={SecondPage} alt={"Демонстрация интерфейса приложения"} initial={"hidden"}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        whileInView={"visible"}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 20}
                        }}/>
        </div>
    </>,
    <>
        <div className={"card__container"}>
            <div className={"card__description-container"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <h2 className="title-container__title title-container__title_m">
                    <span className={"title-container__span"}>Привязка контроллера</span> в&nbsp;два клика</h2>
                </ScrollTriggerAnimation>
                <p className={"text_m card__description"}>Каждый контроллер имеет свой уникальный QR-код, контроллер привязывается к&nbsp;приложению посредством считывания QR-кода с&nbsp;помощью камеры телефона.</p>
            </div>
            <motion.img className={"card__img"} src={ThirdPage} alt={"Демонстрация интерфейса приложения"} initial={"hidden"}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        whileInView={"visible"}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 20}
                        }}/>
        </div>
    </>,
    <>
        <div className={"card__container"}>
            <div className={"card__description-container"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <h2 className="title-container__title title-container__title_m">
                    <span className={"title-container__span"}>Повторяйте посадку</span> с&nbsp;прошлыми значениями</h2>
                </ScrollTriggerAnimation>
                <p className={"text_m card__description"}>Создайте шаблон при выставлении значений. В&nbsp;следующий раз шаблон поможет выставить значения сохраненные с&nbsp;прошлого раза. Это сократит время при формировании повторных посадок.</p>
            </div>
            <motion.img
                className={"card__img"}
                src={FourthPage}
                alt={"Демонстрация интерфейса приложения"}
                initial={"hidden"}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                whileInView={"visible"}
                variants={{
                    visible: {opacity: 1, y: 0},
                    hidden: {opacity: 0, y: 20}
                }}/>
        </div>
    </>,
    <>
        <div className={"card__container"}>
            <div className={"card__description-container"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <h2 className="title-container__title title-container__title_m">
                    <span className={"title-container__span"}>Создайте условия</span> для роста растений</h2>
                </ScrollTriggerAnimation>
                <p className={"text_m card__description"}>Пользователь создает посадку и&nbsp;задает значения датчиков. Заданные значения будут поддерживаться в&nbsp;теплице. По&nbsp;данным значениям можно создать шаблон и&nbsp;использовать его при создании других посадок.</p>
            </div>
            <motion.img className={"card__img"} src={FifthPage} alt={"Демонстрация интерфейса приложения"} initial={"hidden"}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        whileInView={"visible"}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 20}
                        }}/>
        </div>
    </>,
    <>
        <div className={"card__container"}>
            <div className={"card__description-container"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <h2 className="title-container__title title-container__title_m">
                    <span className={"title-container__span"}>Отслеживайте</span> статус теплиц</h2>
                </ScrollTriggerAnimation>
                <p className={"text_m card__description"}>На&nbsp;экране отображаются адреса теплиц и&nbsp;их&nbsp;статусы посадок, также можно узнать историю посадок в&nbsp;определенной теплице.</p>
            </div>
            <motion.img className={"card__img"} src={SixthPage} alt={"Демонстрация интерфейса приложения"} initial={"hidden"}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        whileInView={"visible"}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 20}
                        }}/>
        </div>
    </>,
    <>
        <div className={"card__container"}>
            <div className={"card__description-container"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <h2 className="title-container__title title-container__title_m">
                    <span className={"title-container__span"}>Следите за&nbsp;показателями</span> и&nbsp;собирайте статистику</h2>
                </ScrollTriggerAnimation>
                <p className={"text_m card__description"}>График отображает показатели с&nbsp;датчиков за&nbsp;указанный пользователем промежуток времени. Ниже отображаются показатели в&nbsp;реальном времени.</p>
            </div>
            <motion.img className={"card__img"} src={SeventhPage} alt={"Демонстрация интерфейса приложения"} initial={"hidden"}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        whileInView={"visible"}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 20}
                        }}/>
        </div>
    </>,
    <>
        <div className={"card__container"}>
            <div className={"card__description-container"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <h2 className="title-container__title title-container__title_m">
                    <span className={"title-container__span"}>Будьте в курсе</span> событий</h2>
                </ScrollTriggerAnimation>
                <div className={"card__list"}>
                    <p className={"text_m card__description"}>В&nbsp;приложение предусмотрено два типа оповещений: </p>
                    <ul className={"card__items"}>
                        <li className={"card__item"}>о&nbsp;скором созревании растений</li>
                        <li className={"card__item"}>при неполадках оборудования</li>
                    </ul>
                    <p className={"text_m card__description"}>Возможна настройка уведомлений, их&nbsp;частоту, а&nbsp;также полное или частичное их&nbsp;отключение</p>
                </div>
            </div>
            <motion.img className={"card__img"} src={EighthPage} alt={"Демонстрация интерфейса приложения"} initial={"hidden"}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        whileInView={"visible"}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 20}
                        }}/>
        </div>
    </>,
    <>
        <div className={"card__container"}>
            <div className={"card__description-container"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <h2 className="title-container__title title-container__title_m">
                    <span className={"title-container__span"}>Всегда найдется</span> решение</h2>
                </ScrollTriggerAnimation>
                <p className={"text_m card__description"}>В&nbsp;приложении интегрировано подробное руководство пользователя, а&nbsp;также существует техническая поддержка.</p>
            </div>
            <motion.img className={"card__img"} src={NinthPage} alt={"Демонстрация интерфейса приложения"}/>
        </div>
    </>, <>
        <div className={"card__container"}>
            <div className={"card__description-container"}>
                <ScrollTriggerAnimation visibleSetting={{opacity: 1, secondParam: 'x', paramNumber: 0}}
                                    hiddenSetting={{opacity: 1, secondParam: 'x', paramNumber: -100}}>
                <h2 className="title-container__title title-container__title_m">
                    <span className={"title-container__span"}>Решим ваш вопрос</span></h2>
                </ScrollTriggerAnimation>
                <p className={"text_m card__description"}>В&nbsp;случае ошибки или иной неполадки сообщите о&nbsp;ней внутри приложении. Наша команда безотлагательно обработает ваш запрос и&nbsp;решит его в&nbsp;первостепенном порядке.</p>
            </div>
            <motion.img className={"card__img"} src={TenthPage} alt={"Демонстрация интерфейса приложения"} initial={"hidden"}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        whileInView={"visible"}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 20}
                        }}/>
        </div>
    </>

]

const bulletVariants = {
    active: {
        backgroundColor: '#50B05A',
        transition: 'all 0.4s ease-in-out',
    },
    passive: {
        backgroundColor: 'transparent',
        transition: 'all 0.4s ease-in-out',
    },
};

const Carousel: React.FC = ({type}) => {
    const [cards, setCards] = React.useState([]);
    const {width} = useResize();

    React.useEffect(() => {
        let newCards = [];
        newCards = [...cards_gh];
        setCards(newCards);

    }, [type]);

    const [[page, direction], setPage] = React.useState([0, 0]);
    const [lastClick, setLastClick] = React.useState(0);
    const paginate = (to, navigate = null) => {
        if (typeof navigate === 'number') {
            setPage([navigate, navigate - page]);
        } else if (page + to < cards.length && page + to >= 0) {
            setPage([page + to, to]);
        } else if (page + to === cards.length) {
            setPage([0, to]);
        } else if (page + to === -1) {
            setPage([cards.length - 1, to]);
        }
    };

    const slideVariants = {
        enter: (direction) => ({ x: direction * 200, opacity: 0 }),
        center: { x: 0, opacity: 1, zIndex: 1 },
        exit: (direction) => ({ x: direction * -400, opacity: 0, zIndex: 0 }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const preventClick = (to) => {
        const now = Date.now();
        if (now - lastClick <= 400) return;
        setLastClick(now);
        paginate(to);
    };

    return (
        <motion.div className={'swiper__wrapper'}>
            <AnimatePresence
                custom={direction}
                mode={'wait'}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    key={page}
                    variants={slideVariants}
                    className={'card'}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={direction}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    {cards[page]?.props?.children}
                </motion.div>
            </AnimatePresence>

            <div className={"carousel__manipulate"}>
                <motion.div className={'arrows'}>
                    {width > 576 && (<motion.div
                        className={'arrow arrow--left'}
                        whileTap={{scale: 0.8}}
                        onClick={() => {
                            preventClick(-1);
                        }}
                    ></motion.div>)}

                    <p className={"text_m card__item"}>{page + 1 < 10 ? `0${page + 1}` : page + 1}</p>

                    {width > 576 && (<motion.div
                        className={'arrow arrow--right'}
                        whileTap={{scale: 0.8}}
                        onClick={() => {
                            preventClick(1);
                        }}
                    ></motion.div>)}

                </motion.div>
                <motion.div className={'bullets'}>
                    {cards?.map((card, index) => {
                        return (
                            <motion.div
                                className={'bullet'}
                                key={index}
                                variants={bulletVariants}
                                animate={page === index ? 'active' : 'passive'}
                                onClick={() => {
                                    paginate('', index);
                                }}
                            ></motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Carousel;