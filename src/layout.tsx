import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
<<<<<<< refactor
import { useEffect, useLayoutEffect, useState } from "react";
import { HorizontalBubbles } from "./components/Bubble";
// import { VerticalBubbles } from "./components/Bubble";
// import { useScroll } from "framer-motion";
<<<<<<< 26a3f963309b086f5fa123423a3dbf40bc21b19b
=======
=======
import { VerticalBubbles } from "./components/Bubble";
import { useScroll } from "framer-motion";
>>>>>>> adding beta warning for desktop
<<<<<<< 6285bddc74f3ccb8af586a38e0b292a6dd48e7b5
=======
=======
// import { VerticalBubbles } from "./components/Bubble";
// import { useScroll } from "framer-motion";
>>>>>>> commenting out unused vars
=======
import { useLayoutEffect } from "react";
import { Footer } from "./components/Footer";
>>>>>>> massive update for mobile and desktop styling
>>>>>>> massive update for mobile and desktop styling
>>>>>>> massive update for mobile and desktop styling

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

function Layout() {
    return (
<<<<<<< refactor
        <Wrapper>
            <>
<<<<<<< f6ebbe0476f90ba4b83bfdf01b9eb4e2ba8dc99f
=======
<<<<<<< refactor
<<<<<<< 8e0d2f0db73631d2d9c28c11ebf39404db94fd4b
=======
<<<<<<< refactor
<<<<<<< refactor
>>>>>>> contact form cors
>>>>>>> contact form cors
                <div className="page-bg"/>
=======
                <div className='page-bg' />
>>>>>>> contact form cors

                {!isMobile && (
                    <div style={{ position: "fixed", inset: "1rem", bottom: "unset", zIndex: 1000 }}>
                        <div
                            className='my-1 card'
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                marginInline: "auto",
                                width: "fit-content",
                            }}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                fill='var(--color-secondary)'
                                viewBox='0 0 16 16'
                            >
                                <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
                            </svg>{" "}
                            This site is currently optimized for mobile
                        </div>
                    </div>
                )}

                <Nav />
                <Outlet />
                <footer
                    style={{
                        paddingBlock: "1rem 6rem",
                        color: "var(--color-white)",
                    }}
                >
<<<<<<< refactor

                    {/* <VerticalBubbles count={Math.floor((window.innerWidth - 200) / 2)} /> */}
                    <div>Lom13@pm.me</div>
                    <Link to='https://github.com/lombardoc4' className='roboto d-block'>
                        Github
                    </Link>
                    <Link to='https://github.com/lombardoc4' className='roboto d-block'>
                        View CV
                    </Link>

                    <div className='mt-1'>
                        <h3 className='pixel'>
                            Cris Lombardo @ {new Date().getFullYear()}
                            <br />
                            Based in Fort Lee, NJ
                        </h3>
                    </div>
=======
                    <HorizontalBubbles count={1} marginClass='my-4' />
                    <div
                        className='container'
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem",
                        }}
                    >
                        {/* <VerticalBubbles count={Math.floor((window.innerWidth - 200) / 2)} /> */}
                        <Link to='https://github.com/lombardoc4' className='roboto d-block'>
                            Github
                        </Link>
                        <Link target="_blank" to='https://drive.google.com/file/d/1ewXd_Z0H8X59Kh5vYX1bnnJLVukUa4fW/view?usp=sharing' className='roboto d-block'>
                            View CV
                        </Link>
                        <div>LOM13@PM.ME</div>

                        <div className='mt-1'>
                            <h3 className='pixel'>
                                Cris Lombardo @ {new Date().getFullYear()}
                                <br />
                                Based in Fort Lee, NJ
                            </h3>
                        </div>
>>>>>>> contact form cors
                    </div>
                </footer>
            </>
        </Wrapper>
=======
        <ScrollToTopWrapper>
            <div className='page-bg' />
            <Nav />
            <Outlet />
            <Footer />
        </ScrollToTopWrapper>
>>>>>>> massive update for mobile and desktop styling
    );
}

export default Layout;
