import React from "react";
import {HashLink} from "react-router-hash-link";

const Navigation: React.FC = () => {
    return (
        <ul className="navigation">
            <HashLink className={"link text_s navigation__link"} to={"/#"} smooth>главная</HashLink>
            <HashLink className={"link text_s navigation__link"} to={"/#about"} smooth>о&nbsp;нас</HashLink>
            <HashLink className={"link text_s navigation__link"} to={"/#project"} smooth>о&nbsp;проекте</HashLink>
            <HashLink className={"link text_s navigation__link"} to={"/#contacts"} smooth>контакты</HashLink>
        </ul>
    )
}

export default Navigation;