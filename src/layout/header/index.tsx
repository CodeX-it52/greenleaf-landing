import React from "react";
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import Logo from "@images/Logo_header.svg"
import LogoBurger from "@images/logo_burger.svg"
import Navigation from "@components/navigation";
import {useResize} from "@hooks/useResize.tsx";
import {useScroll} from "@hooks/useScroll.tsx";

const Header: React.FC = () => {
    const [burgerCLicked, isBurgerClicked] = React.useState<boolean>(false);
    const {width} = useResize();

    function handleBurgerCLick() {
        isBurgerClicked(!burgerCLicked);
    }
    function handleLinkCLick() {
        isBurgerClicked(false);
    }
    return (
        <header className={`header ${burgerCLicked && "header_burger"}`}>
            <HashLink to={"/#"} scroll={useScroll}><img className={`logo ${burgerCLicked && "logo_burger"}`} src={burgerCLicked ? LogoBurger : Logo} alt={"Логотип компании"}/></HashLink>
            {width < 678 ? (
                <>
                    {!burgerCLicked && (<div className={"burger-menu__btn"} onClick={handleBurgerCLick}></div>)}
                    {burgerCLicked && (<div className={"burger-menu__btn burger-menu__btn_close"} onClick={handleBurgerCLick}></div>)}
                </>
            ) : (
                <div className={"header__links-container"}>
                    <Navigation />
                    <Link to={"tel:+79200112255"} className="text_s header__phone link ">+7 (920) 011-22-55</Link>
                </div>
            )}

            <AnimatePresence>
            {burgerCLicked && (
                <motion.nav
                    className={"burger-menu"}
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.2}}
                >
                    <div className={"burger-menu__links-container"}>
                        <Navigation onClick={handleLinkCLick}/>
                        <Link to={"tel:+79115694343"} className="text_s header__phone link header__phone_burger">+7 (911) 569-43-43</Link>
                    </div>
                </motion.nav>
            )}
            </AnimatePresence>

        </header>
    )
}

export default Header;