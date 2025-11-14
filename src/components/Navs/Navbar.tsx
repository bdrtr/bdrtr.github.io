'use client';

import { memo, useMemo, useState, useEffect } from "react";
import Lottie from "lottie-react";
import atomAnim from "../../assets/atom-ani.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { isAuthenticated, logout } from "../../utils/adminAuth";

const Navbar = memo(function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Memoize the Lottie animation data to prevent unnecessary re-renders
    const lottieProps = useMemo(() => ({
        animationData: atomAnim,
        loop: true,
        style: { width: 50, height: 50 },
        "data-bs-toggle": "tooltip",
        title: "the Life"
    }), []);

    const auth = isAuthenticated();
    
    const handleLogout = () => {
        logout();
        window.location.href = "/";
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/resume", label: "Resume" },
        { path: "/projects", label: "Projects" },
        { path: "/blog", label: "Blog" },
        { path: "/contact", label: "Contact" }
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
            isScrolled 
                ? 'navbar-scrolled bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
                : 'navbar-transparent bg-transparent'
        }`}>
            <div className="container px-4 px-lg-5">
                {/* Logo/Brand */}
                <Link className="navbar-brand d-flex align-items-center" href="/">
                    <div className="logo-container me-2">
                        <Lottie {...lottieProps} />
                    </div>
                    <span className="brand-text fw-bold fs-5">Bedir Karaabalı</span>
                </Link>

                {/* Mobile Toggle Button */}
                <button 
                    className={`navbar-toggler border-0 ${isMobileMenuOpen ? 'collapsed' : ''}`}
                    type="button" 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                {/* Navigation Menu */}
                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.path}>
                                <Link 
                                    className={`nav-link position-relative px-3 py-2 ${
                                        isActive(item.path) ? 'active' : ''
                                    }`}
                                    href={item.path}
                                >
                                    {item.label}
                                    {isActive(item.path) && (
                                        <span className="active-indicator"></span>
                                    )}
                                </Link>
                            </li>
                        ))}
                        
                        {/* Admin/Logout Button */}
                        <li className="nav-item ms-lg-3">
                            {auth ? (
                                <button 
                                    className="btn btn-outline-primary btn-sm px-3 py-2" 
                                    onClick={handleLogout}
                                >
                                    <i className="bi bi-box-arrow-right me-1"></i>
                                    Logout
                                </button>
                            ) : (
                                <Link 
                                    className="btn btn-outline-secondary btn-sm px-3 py-2" 
                                    href="/admin-login" 
                                    title="Admin Panel"
                                >
                                    <i className="bi bi-lock-fill me-1"></i>
                                    Admin
                                </Link>
                            )}
                        </li>
                        
                        {/* Theme Toggle */}
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