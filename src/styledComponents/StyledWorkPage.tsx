import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledWorkPage = styled.div`
    overflow: hidden;
    margin-top: 2rem;

    @media (min-width: 768px) {
        .work-container {
            max-width: 600px;
        }
    }

    @media (min-width: 1200px) {
        .work-container {
            max-width: 800px;
        }
    }
`

export const StyledWorkPageContainer = styled.div`
    position: relative;
    z-index: 10;
    background-color: var(--color-black);
    /* background-color: var(--color-black-light); */
    border-radius: var(--radius-lg);
    padding: 1rem;
    margin-block: 2rem;
    box-shadow: 0 0 2rem -1rem var(--color-white);



    @media (min-width: 768px) {
        max-width: 600px;
        padding: 1rem 3rem;
        margin-block: 4rem;
    }

    @media (min-width: 1200px) {
        max-width: 800px;
    }
`


export const StyledImgLink = styled(Link)`
    display: block;
    flex: 1;

    img {
        border-radius: var(--radius-lg);
    }
`

export const WorkSegment = styled.div`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 1200px) {
        flex-direction: row-reverse;
    }

    @media (min-width: 768px) {
        .main-copy {
            font-size: 1.25rem;
            flex: 2;
        }
    }
`

export const WorkSegmentLink = styled(Link)`
    display: flex;
    justify-content: space-between;

    .pixel {
        font-size: 1.25rem;
    }

    .symbol {
        font-size: 3rem;
        line-height: 1;
    }
`

export const StyledClockContainer = styled(motion.div)`
    pointer-events: none;
    /* display: none; */
    width: 100%;

    position: fixed;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        transform: translate(-33%, -50%);
    }
`
