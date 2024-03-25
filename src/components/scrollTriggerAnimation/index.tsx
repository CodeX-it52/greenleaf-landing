import React, {ReactNode} from "react";
import {motion} from "framer-motion";

interface ComponentProps {
    children: ReactNode,
    visibleSetting: {
        opacity: number,
        secondParam?: string | undefined,
        paramNumber?: number | undefined,
    },
    hiddenSetting: {
        opacity: number,
        secondParam?: string | undefined,
        paramNumber?: number | undefined,
    },
}

const ScrollTriggerAnimation: React.FC<ComponentProps> = ({children, visibleSetting, hiddenSetting}) => {

    return (
        <motion.div
            initial={"hidden"}
            viewport={{once: true}}
            transition={{duration: 0.5}}
            whileInView={"visible"}
            variants={{
                visible: { opacity: visibleSetting.opacity, [visibleSetting?.secondParam]: visibleSetting?.paramNumber },
                hidden: { opacity: hiddenSetting.opacity, [hiddenSetting?.secondParam]: hiddenSetting?.paramNumber }
            }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollTriggerAnimation;
