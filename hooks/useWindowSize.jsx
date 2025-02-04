import { useEffect, useState } from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({width: windowSize.width, height: windowSize.height});

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        });
    }, []);

    return windowSize;
}