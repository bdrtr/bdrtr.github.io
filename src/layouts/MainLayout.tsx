import { memo } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = memo(function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
});

export default MainLayout;