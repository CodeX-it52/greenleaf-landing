import React from "react";
import {HashLink} from "react-router-hash-link";

const Navigation: React.FC = () => {
    return (
        <ul className="navigation">
            <HashLink className={"link text_s navigation__link"} to={"/#"}>главная</HashLink>
            <HashLink className={"link text_s navigation__link"} to={"/#about-us"}>о&nbsp;нас</HashLink>
            <HashLink className={"link text_s navigation__link"} to={"/#about-project"}>о&nbsp;проекте</HashLink>
            <HashLink className={"link text_s navigation__link"} to={"/#contacts"}>контакты</HashLink>
        </ul>
    )
}

export default Navigation;