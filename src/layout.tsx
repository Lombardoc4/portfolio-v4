import React, { useLayoutEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import Nav from "./components/Nav";

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
