'use client';

import { memo, useMemo } from "react";
import Lottie from "lottie-react";
import workIn from "../../assets/work-in.json"
import ProfileImage from "./ProfileImage";

const Header = memo(function Header() {
    const lottieProps = useMemo(() => ({
        animationData: workIn,
        loop: true,
        style: { width: 60, height: 60 },
        title: "i am runnin' to job"
    }), []);

    return (
        <header className="relative py-12 lg:py-20 bg-dark-surface overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.12),transparent_50%)]"></div>
            
            <div className="container mx-auto px-4 lg:px-8 pb-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-lg bg-accent-primary/15 border border-accent-primary/25 backdrop-blur-sm">
                                <span className="font-display font-bold text-sm text-white">
                                    ⚙️ Engineer &middot; 🐧 Linux Enthusiast &middot; 💻 Open Source Contributor
                                </span>
                            </div>
                            
                            {/* Subtitle */}
                            <div className="text-xl lg:text-2xl font-light text-white/70 mb-6 animate-fade-in font-sans">
                                Building solutions with Linux and open source software
                            </div>
                            
                            {/* Main Title */}
                            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold mb-8 text-white leading-tight animate-fade-in">
                                <span className="inline-block">Software Engineer & Open Source Enthusiast</span>
                                <span className="inline-block ml-3">
                                    <Lottie {...lottieProps} />
                                </span>
                            </h1>
                            
                            {/* CTA Button */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-gradient-primary rounded-xl shadow-lg shadow-accent-primary/30 hover:shadow-xl hover:shadow-accent-primary/40 transition-all duration-300 hover:-translate-y-1"
                                    aria-label="Download resume"
                                >
                                    <i className="bi bi-download mr-2" aria-hidden="true"></i>
                                    Download Resume
                                </a>
                            </div>
                            
                            {/* Features */}
                            <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
                                <div className="flex items-center text-white/70 animate-fade-in font-sans text-sm lg:text-base">
                                    <i className="bi bi-terminal mr-2 text-accent-primary"></i>
                                    <span>Linux Systems</span>
                                </div>
                                <div className="flex items-center text-white/70 animate-fade-in font-sans text-sm lg:text-base" style={{animationDelay: '0.1s'}}>
                                    <i className="bi bi-github mr-2 text-accent-secondary"></i>
                                    <span>Open Source</span>
                                </div>
                                <div className="flex items-center text-white/70 animate-fade-in font-sans text-sm lg:text-base" style={{animationDelay: '0.2s'}}>
                                    <i className="bi bi-code-slash mr-2 text-accent-tertiary"></i>
                                    <span>Software Engineering</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Profile Image */}
                    <div className="lg:col-span-7 flex justify-center lg:justify-end">
                        <ProfileImage ppath={'profile.jpg'} />
                    </div>
                </div>
            </div>
        </header>
    );
});

export default Header;
