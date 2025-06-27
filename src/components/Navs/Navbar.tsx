import Lottie from "lottie-react";
import atomAnim from "../../assets/atom-ani.json";
import { Link } from "react-router";

export default function Navbar() {



    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <Lottie animationData={atomAnim} loop={true} style={{ width: 60, height: 60 }} data-bs-toggle="tooltip" title="the Life"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="resume">Resume</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="projects">Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">Blog</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#"><i className="bi bi-lock"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}