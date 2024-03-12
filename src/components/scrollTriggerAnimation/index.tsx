import React, {ReactNode} from "react";
import {motion} from "framer-motion";

interface ComponentProps {
    children: ReactNode
}

const ScrollTriggerAnimation: React.FC<ComponentProps> = ({children}) => {

    return (
        <motion.div
            initial={"hidden"}
            viewport={{once: true}}
            transition={{duration: 0.5}}
            whileInView={"visible"}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollTriggerAnimation;
