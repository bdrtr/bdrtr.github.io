'use client';

import { memo } from "react";

const CallToAction = memo(function CallToAction() {
    return (
        <section className="relative py-12 lg:py-20 bg-dark-surface overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_50%)]"></div>
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center animate-fade-in">
                        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-white animate-fade-in">
                            Learn More
                        </h2>
                        <p className="text-lg lg:text-xl leading-relaxed text-white/80 font-sans mb-8">
                            Download my resume to access detailed information and get in touch with me.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-primary rounded-xl shadow-lg shadow-accent-primary/30 hover:shadow-xl hover:shadow-accent-primary/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                <i className="bi bi-download mr-2"></i>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default CallToAction;
