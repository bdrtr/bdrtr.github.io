'use client';

import { memo, useMemo } from "react"
import type IAboutText from "../../Interfaces/IAboutText";

const ABOUT_DATA: IAboutText = {
    greeting: "My name is Bedir Tuğra Karaabalı, I am a software engineer",
    sub_text: `Hello, I'm Bedir Tuğra. I am a software engineer passionate about Linux systems and open source software.
     I work with Linux-based systems, contribute to open source projects, and build scalable software solutions.
               My expertise includes system administration, software development, and contributing to the open source community.
               I believe in the power of open source software and actively participate in projects that make a difference.
               Whether it's developing applications, maintaining Linux systems, or contributing to open source libraries,
               I approach every challenge with an engineering mindset. I'm always learning and exploring new technologies
               in the Linux and open source ecosystem, and I enjoy collaborating with like-minded engineers who share
               the same passion for building meaningful solutions with open source tools.`        
};

const About = memo(function About() {
    const aboutText = useMemo(() => ABOUT_DATA, []);

    return (
        <section className="py-12 lg:py-20 bg-dark-bg">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center my-12">
                        {/* Icon Badge */}
                        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-accent-primary/20 border border-accent-primary/30 animate-scale-in">
                            <i className="bi bi-person-badge text-3xl text-accent-primary"></i>
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 text-dark-text animate-fade-in">
                            About Me
                        </h2>
                        
                        {/* Content Card */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <div className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6 lg:p-10 shadow-xl">
                                <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6 text-accent-primary animate-fade-in">
                                    {aboutText.greeting}
                                </h3>
                                <p className="text-base lg:text-lg leading-relaxed text-dark-text-secondary font-sans">
                                    {aboutText.sub_text}
                                </p>
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="max-w-2xl mx-auto">
                            <h4 className="text-2xl font-display font-bold mb-6 text-dark-text animate-fade-in">
                                Contact
                            </h4>
                            <div className="flex justify-center items-center gap-6">
                                <a
                                    href="https://links.bedirkaraabali.me/"
                                    title="Personal Links"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-surface/80 backdrop-blur-sm border border-dark-border text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <i className="bi bi-link-45deg text-xl"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/bdrtr/"
                                    title="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-surface/80 backdrop-blur-sm border border-dark-border text-accent-secondary hover:bg-accent-secondary/10 hover:border-accent-secondary/30 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <i className="bi bi-linkedin text-xl"></i>
                                </a>
                                <a
                                    href="https://github.com/bdrtr"
                                    title="GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-surface/80 backdrop-blur-sm border border-dark-border text-accent-tertiary hover:bg-accent-tertiary/10 hover:border-accent-tertiary/30 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <i className="bi bi-github text-xl"></i>
                                </a>
                                <a
                                    href="https://www.upwork.com/freelancers/~0191016e744cc3d77f"
                                    title="Upwork"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-surface/80 backdrop-blur-sm border border-dark-border text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <i className="bi bi-briefcase text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default About;
