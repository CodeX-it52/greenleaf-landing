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
            transition={{duration: 0.7}}
            whileInView={"visible"}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
            }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollTriggerAnimation;
