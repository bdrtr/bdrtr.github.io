'use client';

import { memo } from "react";

const Works = memo(function Works() {
    const works = [
        {
            icon: "bi-terminal",
            title: "Linux Systems",
            description: "Working with Linux-based systems, system administration, shell scripting, and infrastructure management.",
        },
        {
            icon: "bi-github",
            title: "Open Source Contributions",
            description: "Contributing to open source projects, maintaining repositories, and collaborating with the community.",
        },
        {
            icon: "bi-code-slash",
            title: "Software Development",
            description: "Building applications and tools using open source technologies and best engineering practices.",
        },
        {
            icon: "bi-server",
            title: "System Engineering",
            description: "Designing and maintaining scalable systems, DevOps practices, and infrastructure automation.",
        },
        {
            icon: "bi-tools",
            title: "Open Source Tools",
            description: "Creating and maintaining open source tools and libraries that solve real-world problems.",
        },
        {
            icon: "bi-diagram-3",
            title: "Architecture & Design",
            description: "Designing system architectures and software solutions with a focus on open source technologies.",
        }
    ];

    return (
        <section className="py-12 lg:py-20 bg-dark-surface border-t border-b border-dark-border">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="text-center">
                        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-dark-text animate-fade-in">
                            My Work
                        </h2>
                        <p className="text-lg text-dark-text-secondary font-sans">
                            Linux systems, open source software, and engineering projects
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {works.map((work, index) => (
                        <div key={index} className="h-full">
                            <div className="h-full bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6 hover:border-accent-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg animate-fade-in">
                                <div className="mb-4">
                                    <div className="inline-flex items-center px-4 py-2 rounded-xl bg-accent-primary/20 border border-accent-primary/30 text-accent-primary text-sm font-semibold">
                                        <i className={`bi ${work.icon} mr-2`}></i>
                                        <span>{work.title}</span>
                                    </div>
                                </div>
                                <p className="text-dark-text-secondary leading-relaxed font-sans">
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Works;
