import React from "react";
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import Logo from "@images/Logo_header.svg"
import Navigation from "@components/navigation";

const Header: React.FC = () => {
    return (
        <header className={"header"}>
            <HashLink to={"/#"}><img className={"logo"} src={Logo} alt={"Логотип компании"}/></HashLink>
            <div className={"header__links-container"}>
                <Navigation />
                <Link to={"tel:+79115694343"} className="text_s header__phone link ">+7 (911) 569-43-43</Link>
            </div>

        </header>
    )
}

export default Header;