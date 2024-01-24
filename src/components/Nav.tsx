import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";

import { ContactForm } from "./ContactForm";
import styled from "styled-components";
import { ArtIcon, ContactIcon, HomeIcon, WorkIcon } from "../icons";

Modal.setAppElement("#root");


function Nav() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!modalIsOpen);
        document.body.classList.toggle("modalMode");
    };

    return (
        <>
            <StyledNav>
                <StyledNavLink to='/' preventScrollReset={false}>
                    <HomeIcon />
                    Home
                </StyledNavLink>
                <StyledNavLink to='/work'>
                    <WorkIcon />
                    Work
                </StyledNavLink>
                <StyledNavLink to='/art'>
                    <ArtIcon />
                    Art
                </StyledNavLink>

                <StyledLink className='' tabIndex={-1} onClick={() => toggleModal()}>
                    <ContactIcon />
                    Connect
                </StyledLink>
            </StyledNav>

            <Modal
                isOpen={modalIsOpen}
                onAfterClose={() => document.body.classList.remove("modalMode")}
                onRequestClose={() => setIsOpen(false)}
                style={modalStyles}
                className='modal'
            >
                <ContactForm closeAction={() => setIsOpen(false)} />
            </Modal>
        </>
    );
}

export default Nav;


const modalStyles = {
    content: {
        // position: 'relative',
        margin: 'auto',
        maxWidth: '90%',
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        placeItems: "center",
        zIndex: 1000,
    },
};

const StyledNav = styled.nav`
    z-index: 1000;
    position: fixed;
    inset: 0;
    top: unset;

    max-width: 100lvw;

    background-color: var(--color-primary);
    color: var(--color-black);
    padding: 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    svg {
        display: none
    }

    @media (min-width: 768px) {
        max-width: 600px;


        position: sticky;
        margin: 2rem auto;
        padding: 0.75rem 1rem;
        top: 2rem;
        bottom: unset;
        border-radius: 2rem;
        box-shadow: 0 0 2rem -1rem var(--color-primary);
    }

    @media (min-width: 768px) {
        svg {
            display: initial;
        }
    }
`;

const StyledLink = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 1rem 0.25rem;
    color: var(--color-primary);
    border-radius: var(--radius-sm);
    background-color: var(--color-secondary-accent);
    box-shadow: 0 0 0.5rem -0.25rem var(--color-black);
    flex: 1;
    line-height: 1;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;

    @media (min-width: 768px) {
        flex-direction: row;
        font-size: 1rem;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        border-radius: 2rem;
    }
`;

const StyledNavLink = styled(StyledLink).attrs({
    as: NavLink,
})`
    &.active {
        color: var(--color-secondary);
        background-color: var(--color-primary-accent);
        box-shadow: inset 0 0 0.25rem -0.125rem var(--color-black);
    }
`;
