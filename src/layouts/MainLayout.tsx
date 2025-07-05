import { memo } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = memo(function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
});

export default MainLayout;