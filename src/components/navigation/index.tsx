import React from "react";
import {HashLink} from "react-router-hash-link";
import {motion} from "framer-motion";

interface linksInfo {
    title: string;
    link: string;
}

type linksType = linksInfo[];

const linksInfo: linksType = [
    {
        title: "главная",
        link: "/#",
    },
    {
        title: "о нас",
        link: "/#about",
    },
    {
        title: "о проекте",
        link: "/#project",
    },
    {
        title: "контакты",
        link: "/#contacts",
    },
]

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const Navigation: React.FC = ({onClick}) => {
    return (
        <ul className="navigation">
            {linksInfo.map((item, key) => (
                <motion.li
                    key={key}
                    className={"navigation__link-container"}
                    variants={variants}
                >
                    <HashLink className={"link text_s navigation__link"} to={item.link} onClick={onClick} smooth>{item.title}</HashLink>
                </motion.li>
            ))}
        </ul>
    )
}

export default Navigation;