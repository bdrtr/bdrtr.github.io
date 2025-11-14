'use client';

import { memo } from "react";

const Stats = memo(function Stats() {
    const stats = [
        {
            number: "20+",
            label: "Open Source Projects",
            icon: "bi-github",
        },
        {
            number: "15+",
            label: "Blog Posts",
            icon: "bi-journal-text",
        },
        {
            number: "10+",
            label: "Technologies",
            icon: "bi-code-square",
        },
        {
            number: "∞",
            label: "Learning Drive",
            icon: "bi-lightbulb",
        }
    ];

    return (
        <section className="py-12 lg:py-20 bg-dark-bg">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="text-center">
                        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-dark-text animate-fade-in">
                            Statistics
                        </h2>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center animate-fade-in">
                            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-accent-primary/20 border border-accent-primary/30 animate-scale-in">
                                <i className={`bi ${stat.icon} text-3xl text-accent-primary`}></i>
                            </div>
                            <div className="text-4xl lg:text-5xl font-display font-bold mb-2 text-accent-primary animate-fade-in">
                                {stat.number}
                            </div>
                            <div className="text-dark-text-secondary font-sans">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Stats;
