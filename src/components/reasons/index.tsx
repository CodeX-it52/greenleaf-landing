import React from "react";
import Marker from "@components/marker/marker.tsx";
import {useResize} from "@hooks/useResize.tsx";

const Reasons: React.FC = () => {
    const {width} = useResize();

    return (
        <section className={"reasons"}>
            <div className={"title-container"}>
                {width > 1023 ? (<h2 className="title-container__title">
                    <span className={"title-container__span"}>GreenLeaf</span>&nbsp;&mdash; ваш надежный <br/> партнер в&nbsp;достижении успеха</h2>
                ) : (
                    <h2 className="title-container__title">
                        <span className={"title-container__span"}>GreenLeaf</span>&nbsp;&mdash; ваш
                        надежный партнер</h2>
                )}
                <Marker markerText={"почему мы"}/>
            </div>
            {width > 576 ? (
                <ul className={"reasons__container"}>
                    <li className={"reason"}>
                        <div className={"reason__title-container"}>
                            <div className={"reason__marker"}></div>
                            <p className={"text_m reason__title"}>Технологичность</p>
                        </div>
                        <p className={"text_s reason__description"}>Мы&nbsp;предлагаем надежные и&nbsp;инновационные решения
                            для управления теплицами, которые помогут вам достичь высоких результатов в&nbsp;выращивании
                            растений в&nbsp;гидропонных системах.</p>
                    </li>
                    <li className={"reason"}>
                        <div className={"reason__title-container"}>
                            <div className={"reason__marker"}></div>
                            <p className={"text_m reason__title"}>Эффективность</p>
                        </div>
                        <p className={"text_s reason__description"}>Мы&nbsp;предлагаем широкий спектр функций, позволяющих контролировать и&nbsp;оптимизировать условия выращивания растений в&nbsp;гидропонных системах. Наша система обеспечивает непрерывный контроль и&nbsp;регулировку, что позволяет создавать оптимальные условия для роста и&nbsp;развития растений.</p>
                    </li>
                    <li className={"reason"}>
                        <div className={"reason__title-container"}>
                            <div className={"reason__marker"}></div>
                            <p className={"text_m reason__title"}>Перспективность</p>
                        </div>
                        <p className={"text_s reason__description"}>Мы&nbsp;верим в&nbsp;потенциал гидропоники как передового метода выращивания растений. Наша цель&nbsp;&mdash; помочь вам достичь лучших результатов в&nbsp;выращивании растений в&nbsp;гидропонных теплицах.</p>
                    </li>
                </ul>
            ) : (
                <ul className={"reasons__container"}>
                    <li className={"reason"}>
                            <div className={"reason__marker"}></div>
                            <div className={"reason__title-container reason__title-container_m"}>
                                <p className={"text_m reason__title"}>Технологичность</p>
                                <p className={"text_s reason__description"}>Мы&nbsp;предлагаем надежные
                                    и&nbsp;инновационные
                                    решения
                                    для управления теплицами, которые помогут вам достичь высоких результатов
                                    в&nbsp;выращивании
                                    растений в&nbsp;гидропонных системах.</p>
                            </div>
                    </li>
                    <li className={"reason"}>
                        <div className={"reason__title-container"}>
                            <div className={"reason__marker"}></div>
                            <div className={"reason__title-container reason__title-container_m"}>
                                <p className={"text_m reason__title"}>Эффективность</p>
                                <p className={"text_s reason__description"}>Мы&nbsp;предлагаем широкий спектр функций, позволяющих контролировать и&nbsp;оптимизировать условия выращивания растений в&nbsp;гидропонных системах. Наша система обеспечивает непрерывный контроль и&nbsp;регулировку, что позволяет создавать оптимальные условия для роста и&nbsp;развития растений.</p>
                            </div>
                        </div>
                    </li>
                    <li className={"reason"}>
                        <div className={"reason__title-container"}>
                            <div className={"reason__marker"}></div>
                            <div className={"reason__title-container reason__title-container_m"}>
                                <p className={"text_m reason__title"}>Перспективность</p>
                                <p className={"text_s reason__description"}>
                                    Мы&nbsp;верим в&nbsp;потенциал гидропоники как передового метода выращивания растений. Наша цель&nbsp;&mdash; помочь вам достичь лучших результатов в&nbsp;выращивании растений в&nbsp;гидропонных теплицах.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            )}

        </section>
    )
}

export default Reasons;