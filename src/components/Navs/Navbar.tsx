import { memo, useMemo } from "react";
import Lottie from "lottie-react";
import atomAnim from "../../assets/atom-ani.json";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { isAuthenticated, logout } from "../../utils/adminAuth";

const Navbar = memo(function Navbar() {
    // Memoize the Lottie animation data to prevent unnecessary re-renders
    const lottieProps = useMemo(() => ({
        animationData: atomAnim,
        loop: true,
        style: { width: 60, height: 60 },
        "data-bs-toggle": "tooltip",
        title: "the Life"
    }), []);

    const auth = isAuthenticated();
    const handleLogout = () => {
        logout();
        window.location.href = "/";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
                <Lottie {...lottieProps} />
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder align-items-center">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="resume">Resume</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="projects">Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="blog">Blog</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="contact">Contact</Link></li>
                        {auth ? (
                            <li className="nav-item"><button className="btn btn-outline-secondary btn-sm" onClick={handleLogout}>Logout</button></li>
                        ) : (
                            <li className="nav-item"><Link className="nav-link" to="admin-login" title="Admin Panel"><i className="bi bi-lock-fill"></i></Link></li>
                        )}
                        <li className="nav-item ms-2">
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
});

export default Navbar;