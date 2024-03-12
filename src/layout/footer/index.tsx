import React from "react";
import Logo from "@images/logo_footer.svg"

const Footer: React.FC = () => {
    return (
        <footer className={"footer"}>
            <div className={"footer__wrap"}>
            <div className={"footer__address-container"}>
                <img className={"logo"} src={Logo} alt={"Логотип компании"}/>
                <p className={"footer__address text_s"}>197227, Ленинградская область, Всеволожский район, п. Бугры, ул. Английская, д.6 пом. 32</p>
            </div>
                <div className={"footer__nav"}>
                    <p className={"link footer__navlink text_s"}>главная</p>
                    <p className={"link footer__navlink text_s"}>о&nbsp;нас</p>
                    <p className={"link footer__navlink text_s"}>о&nbsp;проекте</p>
                    <p className={"link text_s footer__navlink"}>контакты</p>
                </div>
                <div className={"footer__contacts-container"}>
                <div className={"footer__contacts"}>
                    <p className="footer__contact text_s">+7 (911) 569-43-43</p>
                    <p className="footer__contact text_s">GreenLeaf@mail.ru</p>
                </div>
                <p className="footer__policy text_s">Политика конфиденциальности</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;