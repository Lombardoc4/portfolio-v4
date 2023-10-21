import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHomeHeader = styled.header`
    background-color: var(--color-black-solid);
    overflow: hidden;
    mix-blend-mode: difference;


    .container {
        min-height: 70lvh;
        position: relative;
        overflow: hidden;
    }

    @media (min-width: 768px) {
        margin-top: -8rem;
    }

    @media (min-width: 768px) {
        .container {
            min-height: 90lvh;

        }
    }

    @media (min-width: 1200px) {
        mix-blend-mode: difference;
    }
`;

export const StyledHomeHeaderImgContainer = styled(motion.div)`
    position: absolute;
    inset: 1rem;
    will-change: transform;
    overflow: hidden;
    border-radius: var(--radius-lg);

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }

    @media (min-width: 768px) {
        inset: 4rem 3rem;
        top: 8rem;
        border-radius: 4rem;
    }


`;

export const StyledHomeHeaderCopy = styled(motion.div)`
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    /* left: 50%; */
    /* transform: translateX(-50%); */

    h1 {
        text-shadow: 0.3rem 0 var(--color-secondary), 0 0 0.5rem var(--color-secondary);
    }

    @media (min-width: 768px) {
        font-size: 2rem;
        left: 6rem;
        bottom: 6rem;
    }
`;

export const StyledHomeLink = styled(Link)`
    text-align: right;
    font-size: 1.5rem;
    transform: skewX(-15deg);

    display: inline-block;
    text-decoration: underline;
    margin-block: 1rem;
`;

export const StyledHomeAbout = styled.div`
    /* padding-block: 2rem; */
    background-color: var(--color-secondary-accent);

    p {
        font-size: 1.25rem;
        padding-block: 2rem;

    }

    @media (min-width: 768px) {
        /* padding-block: 0rem; */

    }


    @media (min-width: 768px) {
        p {
            max-width: 700px;
            font-size: 2.75rem;
            padding-block: 4rem;
            font-weight: 700;
        }
    }

    /* @media (min-width: 728px) {
        a {
            font-size: 3rem;
        }
    } */
`;


export const StyledHomeNature = styled(motion.div)`
    /* border-block: 1px dashed; */
    border-inline: 2px dotted;
    padding: 1rem;

    @media (min-width: 768px) {
        padding: 2rem 4rem;

    }

`;