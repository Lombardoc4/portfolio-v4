import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import { useLayoutEffect } from "react";
import { VerticalBubbles } from "./components/Bubble";

const Wrapper = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

function Layout() {

    return (
        <Wrapper>
            <>
                <Nav />
                <Outlet />

                <footer
                    className='container'
                    style={{
                        // borderTop: '1px solid var(--color-white)',
                        paddingBlock: "1rem 5rem",
                        // marginTop: "1rem",
                        color: "var(--color-white)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                    }}
                >
                    <VerticalBubbles count={Math.floor((window.innerWidth - 200) / 2)} />
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
                </footer>
            </>
        </Wrapper>
    );
}

export default Layout;
