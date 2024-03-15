import React from "react";
import Marker from "@components/marker/marker.tsx";

const Functions: React.FC = () => {
    return (
        <section className={"functions"}>
            <div className={"title-container"}>
                <h2 className="title-container__title">
                    самый широкий спектр <span className={"title-container__span"}>функций</span></h2>
                <Marker markerText={"наш продукт"}/>
            </div>
            <p className={"text_m functions__subtitle"}>Наше приложение предлагает широкий спектр функций, позволяющих эффективно контролировать и&nbsp;оптимизировать условия выращивания растений. Оно обеспечивает мониторинг и&nbsp;управление основными параметрами, а&nbsp;также предлагает возможность автоматического управления системой.</p>
            <div className={"functions__container"}>
                <div className={"function function_benefit"}>
                    <div className={"function__marker"}></div>
                    <p className={"text_m function__title"}>Какую пользу приносит ПО</p>
                    <div className={"function__content function__content_benefit"}>
                    </div>
                    <p className={"text_s function__description"}>Использование нашего приложения позволяет
                        автоматизировать и&nbsp;оптимизировать процессы, улучшая эффективность работы и&nbsp;сокращая
                        затраты</p>

                </div>
                <div className={"function function_workers"}>
                    <div className={"function__marker"}></div>
                    <p className={"text_m function__title"}>Сокращение штата операторов</p>
                    <div className={"function__content function__content_workers"}>
                    </div>
                    <p className={"text_s function__description"}>Автоматизированные системы контроля позволяют
                        эффективно регулировать условия выращивания, освобождая операторов от&nbsp;рутинных задач
                        и&nbsp;позволяя им&nbsp;сосредоточиться на&nbsp;более серьезной работе.</p>

                </div>
                <div className={"function function_control"}>
                    <div className={"function__marker"}></div>
                    <p className={"text_m function__title"}>Контроль и четкая организация</p>
                    <div className={"function__content function__content_control"}>
                    </div>
                    <p className={"text_s function__description"}>От&nbsp;мониторинга условий выращивания
                        до&nbsp;автоматического подкармливания и&nbsp;полива, системы контроля обеспечивают четкую
                        организацию и&nbsp;оптимальные условия для роста растений.</p>

                </div>
                <div className={"function function_distant"}>
                    <div className={"function__marker"}></div>
                    <p className={"text_m function__title"}>удаленное Управление</p>
                    <div className={"function__content function__content_distant"}>
                    </div>
                    <p className={"text_s function__description"}>Возможно удаленное управление и&nbsp;мониторинг
                        неограниченного количества теплиц из&nbsp;любой точки мира. Это позволяет операторам
                        контролировать и&nbsp;регулировать условия выращивания растений находясь вдали от&nbsp;места
                        производства.</p>

                </div>
                <div className={"function function_reduce"}>
                    <div className={"function__marker"}></div>
                    <p className={"text_m function__title"}>Снижение рисков</p>
                    <div className={"function__content function__content_reduce"}>
                    </div>
                    <p className={"text_s function__description"}>Системы предупреждения и&nbsp;автоматического
                        реагирования на&nbsp;изменения условий выращивания помогают предотвратить негативные последствия
                        и&nbsp;обеспечивают непрерывный контроль и&nbsp;заботу о&nbsp;растениях.</p>

                </div>
                <div className={"function function_logs"}>
                    <div className={"function__marker"}></div>
                    <p className={"text_m function__title"}>Сбор статистики</p>
                    <div className={"function__content function__content_logs"}>
                    </div>
                    <p className={"text_s function__description"}>Позволяет собирать и&nbsp;анализировать статистику
                        о&nbsp;процессе роста растений, что помогает оптимизировать условия выращивания и&nbsp;принимать
                        информированные решения для улучшения результатов.</p>

                </div>
                <div className={"function function_education"}>
                    <div className={"function__marker"}></div>
                    <p className={"text_m function__title"}>Быстрое обучение сотрудников</p>
                    <div className={"function__content function__content_education"}>
                    </div>
                    <p className={"text_s function__description"}>Интерактивные обучающие модули, визуальные инструкции
                        и&nbsp;симуляторы в&nbsp;нашем приложении позволяют эффективно и&nbsp;быстро обучать персонал,
                        сокращая время на&nbsp;подготовку новых сотрудников.</p>

                </div>
            </div>
        </section>
    )
}

export default Functions;