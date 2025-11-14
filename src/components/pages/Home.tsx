import { memo } from "react";
import Header from "../../components/headers/Header";
import About from "../../components/Main/About";
import Services from "../../components/Main/Services";
import Testimonials from "../../components/Main/Testimonials";
import CallToAction from "../../components/Main/CallToAction";
import Stats from "../../components/Main/Stats";

const Home = memo(function Home() {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Stats />
            <Testimonials />
            <CallToAction />
        </div>
    );
});

export default Home;