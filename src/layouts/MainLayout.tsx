import { Outlet } from "react-router";
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {




    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}