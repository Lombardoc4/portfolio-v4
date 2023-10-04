import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";

import { ContactForm } from "./ContactForm";

Modal.setAppElement("#root");
const modalStyles = {
    content: {
        // position: 'relative',
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        placeItems: "center",
        zIndex: 100,
    },
};

function Nav() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!modalIsOpen);
        document.body.classList.toggle("modalMode");
    };

    return (
        <>

            <nav
                style={{
                    position: "fixed",
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    zIndex: 100,
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-black)",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.75rem 0.5rem",
                    gap: "0.5rem",
                    alignItems: "center",
                    boxShadow: '0 0 1rem -0.5rem var(--color-primary)'
                }}
            >
                <NavLink to='/' className='nav-link' preventScrollReset={false}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        viewBox='0 0 16 16'
                    >
                        <path d='M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z' />
                    </svg>
                    Home
                </NavLink>
                <NavLink to='/work' className='nav-link'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        viewBox='0 0 16 16'
                    >
                        <path d='M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z' />
                    </svg>
                    Work
                </NavLink>
                <NavLink to='/art' className='nav-link'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        viewBox='0 0 16 16'
                    >
                        <path d='M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z' />
                    </svg>
                    <p>
                        Art
                    </p>
                </NavLink>

                {/* TODO : There is no outline on focus-visiible */}
                <div className='a nav-link' tabIndex={-1} onClick={() => toggleModal()}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        viewBox='0 0 16 16'
                    >
                        <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
                    </svg>
                    Contact
                </div>
            </nav>

            <Modal
                isOpen={modalIsOpen}
                onAfterClose={() => document.body.classList.remove("modalMode")}
                onRequestClose={() => setIsOpen(false)}
                // shouldCloseOnEsc={true}
                // shouldCloseOnOverlayClick={true}
                style={modalStyles}
                className='container'
            >
                <div className="card" style={{border: '1px solid var(--color-black)'}}>
                    <ContactForm closeAction={() => setIsOpen(false)}/>
                </div>
            </Modal>
        </>
    );
}

export default Nav;
