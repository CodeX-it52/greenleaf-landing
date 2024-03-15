import React from "react";
import Marker from "@components/marker/marker.tsx";
import Team from "@images/team.svg";

const AboutTeam: React.FC = () => {
    return (
        <section className={"team"}>
            <div className={"title-container"}>
                <h2 className="title-container__title">Мы&nbsp;делаем <span className={"title-container__span"}>GreenLeaf</span><br/>возможным</h2>
                <Marker markerText={"команда"}/>
            </div>
            <div className={"team__container"}>
                <div className={"team__description"}>
                    <p className={"text_m team__text"}>Наша команда посвящена созданию инновационных решений для гидропоники и&nbsp;поддержке наших клиентов в&nbsp;достижении успеха в&nbsp;сельском хозяйстве.</p>
                    <p className={"text_m team__text"}>Команда GreenLeaf состоит из&nbsp;высококвалифицированной команды профессионалов, включающей в&nbsp;себя разработчиков, инженеров и&nbsp;сельскохозяйственных специалистов. Каждый член нашей команды обладает страстью к&nbsp;инновациям в&nbsp;области гидропоники и&nbsp;сельского хозяйства.</p>
                </div>
                <img className={"team__img"} src={Team} alt={"Изображение команды"}/>
            </div>
        </section>
    )
}

export default AboutTeam;