import * as React from "react";
import Typed from "typed.js";

export const TypingAnimate = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["passionate.", "versatile.", "serious.", "creative.", "curious."],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={el} className="text-orange"/>
}