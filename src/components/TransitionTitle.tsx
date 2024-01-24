import { motion } from "framer-motion"
import styled from "styled-components";

export const TransitionTitle = ({title, className = ''} : {title: string, className?: string}) => {
    const titleArrary = title.split('');

    return <h2>

        {titleArrary.map((letter, i) => (
            <StyledTitle
                className={"h1 " + className}
                key={letter + i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0  }}
                transition={{
                    delay: i * 0.1,
                }}
                viewport={{amount: 0.8 }}
            >
                {letter}
            </StyledTitle>
        ))}
    </h2>
}

const StyledTitle = styled(motion.span)`
    position: relative;
    display: inline-block;
    /* margin-top: 2rem; */
    font-size: 4rem;
    text-shadow: 0.3rem 0 var(--color-secondary), 0 0 2rem var(--color-secondary);


    @media (min-width: 768px) {
        font-size: 6rem;
    }

    @media (min-width: 1200px) {
        font-size: 8rem;
    }
`