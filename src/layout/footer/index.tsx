import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useResize} from "@hooks/useResize.tsx";
import Logo from "@images/logo_footer.svg"
import {useScroll} from "@hooks/useScroll.tsx"

const Footer: React.FC = () => {
    const {width} = useResize();
    return (
        <footer className={"footer"}>
            <div className={"footer__wrap"}>
            <div className={"footer__address-container"}>
                <HashLink to={"/#"} scroll={useScroll}><img className={"logo"} src={Logo} alt={"Логотип компании"}/></HashLink>
                <p className={"footer__address text_s"}>197227, Ленинградская область, Всеволожский район, п. Бугры, ул. Английская, д.6 пом. 32</p>
            </div>
                {width > 576 && (<div className={"footer__nav"}>
                    <HashLink className={"link footer__navlink text_s"} to={"/#"} scroll={useScroll}>главная</HashLink>
                    <HashLink className={"link footer__navlink text_s"} to={"/#about"} smooth scroll={useScroll}>о&nbsp;нас</HashLink>
                    <HashLink className={"link footer__navlink text_s"} to={"/#project"} smooth scroll={useScroll}>о&nbsp;проекте</HashLink>
                    <HashLink className={"link text_s footer__navlink"} to={"/#contacts"} smooth scroll={useScroll}>контакты</HashLink>
                </div>)}

                <div className={"footer__contacts-container"}>
                    <div className={"footer__contacts"}>
                        <Link to={"tel:+79200112255"} className="footer__contact text_s link">+7 (920) 011-22-55</Link>
                        <Link to={"mailto:sales@codex-it.ru"} className="footer__contact text_s link">sales@codex-it.ru</Link>
                    </div>
                    <Link className="footer__policy text_s" to={"/confidential"}>Политика конфиденциальности</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;