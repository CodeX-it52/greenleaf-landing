import React from "react";
import { useState, useEffect } from 'react';


export const useResize = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = (event: { target: { innerWidth: React.SetStateAction<number>; }; }) => {
            setWidth(event.target.innerWidth);
        };
        // @ts-expect-error
        window.addEventListener('resize', handleResize);
        return () => {
            // @ts-expect-error
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
    };
};