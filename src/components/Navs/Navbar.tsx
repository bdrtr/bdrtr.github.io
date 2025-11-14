'use client';

import { memo, useMemo, useState, useEffect } from "react";
import Lottie from "lottie-react";
import atomAnim from "../../assets/atom-ani.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isAuthenticated, logout } from "../../utils/adminAuth";

const Navbar = memo(function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const lottieProps = useMemo(() => ({
        animationData: atomAnim,
        loop: true,
        style: { width: 50, height: 50 },
        title: "the Life"
    }), []);

    const [auth, setAuth] = useState(false);
    
    useEffect(() => {
        setAuth(isAuthenticated());
    }, []);
    
    const handleLogout = () => {
        logout();
        setAuth(false);
        window.location.href = "/";
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/resume", label: "Resume" }
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-dark-surface/95 backdrop-blur-xl shadow-lg border-b border-dark-border' 
                : 'bg-dark-surface/85 backdrop-blur-xl border-b border-dark-border/50'
        }`}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo/Brand */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="flex-shrink-0">
                            <Lottie {...lottieProps} />
                        </div>
                        <span className="font-display font-bold text-lg text-dark-text group-hover:text-accent-primary transition-colors">
                            Bedir Karaabalı
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    isActive(item.path)
                                        ? 'text-accent-primary'
                                        : 'text-dark-text-secondary hover:text-dark-text'
                                }`}
                            >
                                {item.label}
                                {isActive(item.path) && (
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-primary rounded-full"></span>
                                )}
                            </Link>
                        ))}
                        
                        {/* Admin/Logout Button */}
                        <div className="ml-4">
                            {auth ? (
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 text-sm font-medium text-accent-primary border border-accent-primary/30 rounded-lg hover:bg-accent-primary/10 transition-all duration-300"
                                >
                                    <i className="bi bi-box-arrow-right mr-1"></i>
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    href="/admin-login"
                                    title="Admin Panel"
                                    className="px-4 py-2 text-sm font-medium text-dark-text-secondary border border-dark-border rounded-lg hover:bg-dark-surface-elevated transition-all duration-300"
                                >
                                    <i className="bi bi-lock-fill mr-1"></i>
                                    Admin
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-dark-text hover:bg-dark-surface-elevated transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        <div className={`w-6 h-6 flex flex-col justify-center space-y-1.5 ${isMobileMenuOpen ? 'rotate-90' : ''} transition-transform duration-300`}>
                            <span className={`block h-0.5 w-full bg-dark-text transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-dark-text transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-dark-text transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-dark-border py-4">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        isActive(item.path)
                                            ? 'text-accent-primary bg-accent-primary/10'
                                            : 'text-dark-text-secondary hover:text-dark-text hover:bg-dark-surface-elevated'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            
                            <div className="pt-2 border-t border-dark-border">
                                {auth ? (
                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-4 py-2 text-sm font-medium text-accent-primary border border-accent-primary/30 rounded-lg hover:bg-accent-primary/10 transition-all duration-300 text-left"
                                    >
                                        <i className="bi bi-box-arrow-right mr-1"></i>
                                        Logout
                                    </button>
                                ) : (
                                    <Link
                                        href="/admin-login"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-4 py-2 text-sm font-medium text-dark-text-secondary border border-dark-border rounded-lg hover:bg-dark-surface-elevated transition-all duration-300"
                                    >
                                        <i className="bi bi-lock-fill mr-1"></i>
                                        Admin
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
});

export default Navbar;
