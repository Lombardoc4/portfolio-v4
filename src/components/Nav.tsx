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

                {/* TODO : There is no outline on focus-visiible */}
                <StyledLink className='' tabIndex={-1} onClick={() => toggleModal()}>
                    <ContactIcon />
                    Contact
                </StyledLink>
            </StyledNav>

            <Modal
                isOpen={modalIsOpen}
                onAfterClose={() => document.body.classList.remove("modalMode")}
                onRequestClose={() => setIsOpen(false)}
                style={modalStyles}
                className='container'
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
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    max-width: 600px;

    background-color: var(--color-primary);
    color: var(--color-black);

    display: flex;
    padding: 0.75rem 0.5rem;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;

    border-radius: var(--radius-sm);
    box-shadow: 0 0 1rem -0.5rem var(--color-primary);

    @media (min-width: 728px) {
        margin: auto;
        padding: 0.75rem;
    }

    @media (min-width: 728px) {
        svg {
            height: 20px;
            width: 20px;
        }
    }
`;

const StyledLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem 0.25rem;
    color: var(--color-primary);
    border-radius: var(--radius-sm);
    background-color: var(--color-secondary-accent);
    box-shadow: 0 0 0.5rem -0.25rem var(--color-black);
    flex: 1;
    line-height: 1;
    text-transform: uppercase;

    @media (min-width: 728px) {
        font-size: 1.25rem;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
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
