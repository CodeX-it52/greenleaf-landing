import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useResize} from "@hooks/useResize.tsx";
import Logo from "@images/logo_footer.svg"

const Footer: React.FC = () => {
    const {width} = useResize();
    return (
        <footer className={"footer"}>
            <div className={"footer__wrap"}>
            <div className={"footer__address-container"}>
                <img className={"logo"} src={Logo} alt={"Логотип компании"}/>
                <p className={"footer__address text_s"}>197227, Ленинградская область, Всеволожский район, п. Бугры, ул. Английская, д.6 пом. 32</p>
            </div>
                {width > 576 && (<div className={"footer__nav"}>
                    <HashLink className={"link footer__navlink text_s"} to={"/#"}>главная</HashLink>
                    <HashLink className={"link footer__navlink text_s"} to={"/#about"} smooth>о&nbsp;нас</HashLink>
                    <HashLink className={"link footer__navlink text_s"} to={"/#project"}
                              smooth>о&nbsp;проекте</HashLink>
                    <HashLink className={"link text_s footer__navlink"} to={"/#contacts"} smooth>контакты</HashLink>
                </div>)}

                <div className={"footer__contacts-container"}>
                    <div className={"footer__contacts"}>
                        <Link to={"tel:+79115694343"} className="footer__contact text_s link">+7 (911) 569-43-43</Link>
                        <Link to={"mailto:GreenLeaf@mail.ru"} className="footer__contact text_s link">GreenLeaf@mail.ru</Link>
                    </div>
                    <Link className="footer__policy text_s" to={"/confidential"}>Политика конфиденциальности</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;