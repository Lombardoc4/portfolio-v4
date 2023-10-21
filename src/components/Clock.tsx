import { motion } from "framer-motion"
import styled from "styled-components";

export const Clock = () => {
    return (
        <>
            <ClockDial unit='hours' />
            <ClockDial unit='minutes' />
            <ClockDial unit='seconds' />
            {/* <ClockDial unit='milliseconds' /> */}
            <StyledDial
                style={{
                    height: "10vh",
                    width: "10vh",
                    backgroundColor: "var(--color-secondary)",
                    borderRadius: "var(--radius-full) ",
                }}
            />
        </>
    );
}

interface IClock {
    rotation: number,
    duration: number,
    color: string,
    size: string,
}

const getVals = (unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours'): IClock => {
    switch (unit) {
        case 'milliseconds':
            return {
                rotation: (new Date()).getMilliseconds() / 1000 * 360 + 45,
                duration: 1,
                color: "var(--color-secondary-accent)",
                size: '20vh'
            };
        case 'seconds':
            return {
                rotation: (new Date()).getSeconds()  / 60 * 360 + 45,
                duration: 60,
                color: "var(--color-primary)",
                size: '30vh'
            };
        case 'minutes':
            return {
                rotation: (new Date()).getMinutes()  / 60 * 360 + 45,
                duration: 3600,
                color: "var(--color-primary-accent)",
                size: '40vh'
        };
        case 'hours':
            return {
                rotation: (new Date()).getHours() % 12 / 12 * 360 + 45,
                duration: 43200,
                color: "var(--color-secondary)",
                size: '50vh'
            }
    }
}


const ClockDial = ({unit}: {unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours'}) => {
    const {rotation, duration, size, color} = getVals(unit);

    return (
        <StyledDial
            animate={{
                rotate: [rotation, 360 + rotation],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
            }}
            style={{
                height: size,
                width: size,
                backgroundColor: color,
            }}
        />
    );
}

const StyledDial = styled(motion.div)`
    position: absolute;
    z-index: -1;
    border-radius: var(--radius-lg) var(--radius-full) var(--radius-full) var(--radius-full);
    padding: 1rem 2rem;
    box-shadow: 0 0 2rem -1rem var(--color-black);
`