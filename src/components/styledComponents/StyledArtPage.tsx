import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const StyledArtNav = styled.div<{$artPage: boolean}>`
    display: grid;
    grid-template-columns: ${({$artPage}) => $artPage ? 'repeat(3, 1fr)' : '1fr'};
    grid-template-rows: ${({$artPage}) => $artPage ? '100px' : 'repeat(3, 100px)'};

    font-size: 0.75rem;

    gap: 1rem;
    margin-block: 2rem;


    position: ${({$artPage}) => $artPage ? 'sticky' : 'static'};
    top: 2rem;
    z-index: 100;


    @media (min-width: 768px) {
        font-size: 1.25rem;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 300px;
        gap: 2rem;
        top: 8rem;
    }


    :nth-child(2) {
        .title {
            animation-delay: 1s;

        }
    }
    :nth-child(3) {
        .title {
            animation-delay: 2s;

        }
    }

`;

export const StyledArtNavLink = styled(NavLink)`
    background-size: cover;
    background-position: center;
    /* border: 1px solid var(--color-secondary); */
    border-radius: var(--radius-lg);
    box-shadow: 0 0 4rem -3rem var(--color-white);

    position: relative;
    display: block;
    height: 100%;
    width: 100%;

    &.active {
        border: 1px solid var(--color-primary);
    }

    &:hover {
        box-shadow: 0 0 4rem -1rem var(--color-white);
    }


    .title {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 50%;
        transform: translateY(50%);
        /* animation: float 6s ease infinite; */

    }

`;

export const StyledArtPiece = styled.div`
    margin-inline: -1rem;
    margin-block: 4rem;

    @media (min-width: 768px) {
        display: flex;
        gap: 2rem;

        margin-inline: 0;
        margin-block: 8rem 12rem;
    }

    .title, &:nth-child(2) {
        margin-top: auto;
        flex: 1;
        margin-inline: 1rem;
    }

    @media (min-width: 768px) {
    .title, &:nth-child(2) {
            margin-inline: 0;
        }
    }
`;

export const StyledArtPieceAsset = styled.div`
    flex: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-height: 50vh;


    img,
    video,
    .video-responsive {
        height: 100%;
        width: 100%;
        object-fit: contain;
        /* object-position: right; */
    }

    @media (min-width: 768px) {
        img,
        .video-responsive {
            /* height: 100%; */
            /* width: 100%; */
            /* object-fit: contain; */
            object-position: right;
        }
    }
`