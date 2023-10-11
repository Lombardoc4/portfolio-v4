import { useCallback, useState } from "react";
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

const STSBubbles = () => {
    return Array.from(Array(10)).map((_v, i) => (
        <div key={'stsBub' + i} className='side-to-side'></div>
    ))
}


export const HorizontalBubbles = ({ count, marginClass }: { count: number, marginClass?: string }) => {

    return (
        <div className={"container my-2 " + marginClass}>

        {Array.from(Array(count)).map((_v, i) => {
            return (
                <div key={"hBub" + i} className="side-to-side-container" >
                <STSBubbles/>
            </div>
        );
    })}
    </div>
    )
};

export const VerticalBubbles = ({ count }: { count: number }) => {

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            {Array.from(Array(count)).map((_v, i) => (
                <div key={"vBubs" + i} className={"up-down-container " + (i % 2 === 0 ? "invert" : "")}>
                    <div className='up-down'></div>
                    <div className='up-down'></div>
                    <div className='up-down'></div>
                    <div className='up-down'></div>
                    <div className='up-down'></div>
                </div>
            ))}
        </div>
    );
};

export const SpringBubbles = () => {
    const [width, setWidth] = useState(320);
    const springRef = useCallback((node: HTMLDivElement) => {
        if (node !== null && node.parentElement !== null) {
          setWidth(node.parentElement.getBoundingClientRect().width);
        }
      }, []);


    return (
        <div  ref={springRef} style={{ display: "flex", height: "0.75rem", mixBlendMode: 'difference' }}>
            {width > 2 &&
            Array.from(Array(Math.floor(width / 2))).map((_v, i) => (
                <div key={'spring' + i} className='spring' style={{ animationDelay: 200 * i + "ms" }} />
                ))
            }
        </div>
    );
};
