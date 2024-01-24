import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface IBubble {
    img: string;
    title: JSX.Element | string;
    link: string;
    position: {
        left: string;
        top: string;
    };
    size: {
        width: string;
        height: string;
    };
}

export const Bubble = ({ img, title, link, position, size }: IBubble) => {
    return (
        <>
            <Link
                to={link}
                style={{
                    position: "absolute",
                    borderRadius: "var(--radius-full)",
                    ...position,
                    ...size,
                }}
            >
                <div className='bubble-before' style={{ ...size, left: "0.3rem" }}></div>
                <div
                    className='bubble'
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundColor: "var(--color-primary)",
                    }}
                >
                    <h3 className='bubble-title'>{title}</h3>
                </div>
            </Link>
        </>
    );
};

export const HorizontalBubbles = ({ count, marginClass, delay = false }: { count: number; marginClass?: string, delay?: boolean }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(100);

    useEffect(() => {
        const setWidth = () => {
            setTranslateX(containerRef.current ? containerRef.current.offsetWidth - 32 : 100);
        };

        setWidth();
        window.addEventListener("resize", setWidth);
        return () => window.removeEventListener("resize", setWidth);
    }, [containerRef]);

    return (
        <div className={"container my-2 " + marginClass}>
            {Array.from(Array(count)).map((_v, i) => (
                <div key={"hBub" + i} ref={containerRef} className='side-to-side-container'>
                    {Array.from(Array(10)).map((_v, i) => (
                        <motion.div
                            key={"stsBub" + i}
                            className='side-to-side'
                            style={{ willChange: "transform, filter" }}
                            animate={{
                                filter: ["blur(0)", "blur(3px)", "blur(0)", "blur(3px)", "blur(0)"],
                                x: i % 2 === 0 ? [translateX, 0, translateX] : [0, translateX, 0],
                                scale: [1, 0.5, 1, 0.5, 1]
                            }}
                            transition={{
                                duration: 10,
                                delay: Math.floor(i / 2) * 0.2 + (delay ? 2.5 : 0),
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

// export const VerticalBubbles = ({ count }: { count: number }) => {
//     return (
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//             {Array.from(Array(count)).map((_v, i) => (
//                 <div key={"vBubs" + i} className={"up-down-container " + (i % 2 === 0 ? "invert" : "")}>
//                     <div className='up-down'></div>
//                     <div className='up-down'></div>
//                     <div className='up-down'></div>
//                     <div className='up-down'></div>
//                     <div className='up-down'></div>
//                 </div>
//             ))}
//         </div>
//     );
// };

export const SpringBubbles = () => {
    const [width, setWidth] = useState(320);
    const springRef = useCallback((node: HTMLDivElement) => {
        if (node !== null && node.parentElement !== null) {
            setWidth(node.parentElement.getBoundingClientRect().width);
        }
    }, []);

    return (
        <div ref={springRef} style={{ display: "flex", height: "0.75rem", justifyContent: 'space-evenly'}}>
            {width > 2 &&
                Array.from(Array(Math.floor(width / 8))).map((_v, i) => (
                    <div key={"spring" + i} className='spring' style={{ animationDelay: 200 * i + "ms" }} />
                ))}
        </div>
    );
};
