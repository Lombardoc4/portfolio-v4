import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import { useLayoutEffect } from "react";
import { Footer } from "./components/Footer";

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

function Layout({children}: {children?: React.ReactNode}) {
    return (
        <ScrollToTopWrapper>
            <div className='page-bg' />
            <Nav />
            <Outlet />
            {children}
            <Footer />
        </ScrollToTopWrapper>
    );
}

export default Layout;
