import React from "react";
import Logo from "@images/logo_footer.svg"
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Footer: React.FC = () => {
    return (
        <footer className={"footer"}>
            <div className={"footer__wrap"}>
            <div className={"footer__address-container"}>
                <img className={"logo"} src={Logo} alt={"Логотип компании"}/>
                <p className={"footer__address text_s"}>197227, Ленинградская область, Всеволожский район, п. Бугры, ул. Английская, д.6 пом. 32</p>
            </div>
                <div className={"footer__nav"}>
                    <HashLink className={"link footer__navlink text_s"} to={"/#"}>главная</HashLink>
                    <HashLink className={"link footer__navlink text_s"} to={"/#about"} smooth>о&nbsp;нас</HashLink>
                    <HashLink className={"link footer__navlink text_s"} to={"/#project"} smooth>о&nbsp;проекте</HashLink>
                    <HashLink className={"link text_s footer__navlink"} to={"/#contacts"} smooth>контакты</HashLink>
                </div>
                <div className={"footer__contacts-container"}>
                <div className={"footer__contacts"}>
                    <p className="footer__contact text_s">+7 (911) 569-43-43</p>
                    <p className="footer__contact text_s">GreenLeaf@mail.ru</p>
                </div>
                <Link className="footer__policy text_s" to={"/confidential"}>Политика конфиденциальности</Link>
            </div>
            </div>
        </footer>
    )
}

export default Footer;