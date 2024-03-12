import React from "react";
import Logo from "@images/Logo_header.svg"
import Navigation from "@components/navigation";

const Header: React.FC = () => {
    return (
        <header className={"header"}>
            <img className={"logo"} src={Logo} alt={"Логотип компании"}/>
            <div className={"header__links-container"}>
                <Navigation />
                <p className="text_s header__phone link ">+7 (911) 569-43-43</p>
            </div>

        </header>
    )
}

export default Header;