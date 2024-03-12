import React, {ReactNode} from "react";
import {motion} from "framer-motion";

interface ComponentProps {
    children: ReactNode
}

const BlinkAnimationComponent: React.FC<ComponentProps> = ({children}) => {
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible((prev) => !prev);
        }, 3000)

        return () => clearInterval(interval);
    }, [])

    return (
        <motion.div
            style={{opacity: isVisible ? 1 : 0}}
            animate={{opacity: isVisible ? 1 : 0}}
            transition={{duration: 0.5}}
        >
            {children}
        </motion.div>
    )
}

export default BlinkAnimationComponent;