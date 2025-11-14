'use client';

import { memo } from "react";
import Image from "next/image";
import type IExperience from "../Interfaces/IExperience";
import type IEducation from "../Interfaces/UEducation";

const EXPERIENCE_DATA: IExperience[] = [
    {
        start_date: '11/2024',
        end_date: 'Present',
        work_position: 'Software Engineer',
        company_name: 'Esisya Yazılım',
        location: 'Istanbul / Turkey',
        overwiev: 'Working as a software engineer, focusing on software development and engineering solutions.'
    },
    {
        start_date: '10/2024',
        end_date: 'Present',
        work_position: 'Fullstack Software Developer',
        company_name: 'NöroNest',
        location: 'Remote',
        overwiev: 'Fullstack software development using ASP.NET, FastAPI, React, and Next.js. Working on backend architectures and cross-disciplinary software projects.'
    },
    {
        start_date: '04/2024',
        end_date: '05/2024',
        work_position: 'Backend & Frontend Developer',
        company_name: 'MegaCode Yazılım ve Ticaret A.Ş.',
        location: 'Istanbul / Turkey',
        overwiev: 'Backend and frontend development. Contributed to project architecture and full-stack solutions.'
    },
    {
        start_date: '10/2024',
        end_date: '01/2025',
        work_position: 'IT Intern',
        company_name: 'Okyanus Bilgisayar',
        location: 'Istanbul / Turkey',
        overwiev: 'Provided support in server setup, hardware maintenance, and basic network management. Delivered technical support to end users. Participated in regular maintenance and system monitoring processes to ensure service continuity.'
    },
    {
        start_date: '07/2024',
        end_date: '10/2024',
        work_position: 'Software Engineer Intern',
        company_name: 'DAFAM Akademie',
        location: 'Dortmund / Germany',
        overwiev: 'Developed an automation tool that allows accounts opened on behalf of a company to comment, vote, and provide feedback on specific projects. The project was implemented using Python and Selenium.'
    },
    {
        start_date: '10/2022',
        end_date: '03/2023',
        work_position: 'Software Engineer',
        company_name: 'AYVAZ Elektromobil',
        location: 'Bolu / Turkey',
        overwiev: `As part of a 15-person team established for the TÜBİTAK Electric Vehicle Competition,
        I was responsible for communication between the Vehicle Control Unit (VCU) and the Battery
        Management System (BMS). Additionally, I contributed to the design, development, and
        telemetry system of the VCU.`
    },
];

const EDUCATION_DATA: IEducation[] = [
    {
        start_date: '2020',
        end_date: '2025',
        university_name: 'Bolu Abant İzzet Baysal Üniversitesi',
        education_department: 'Computer Engineering (Bachelor\'s)',
        location: 'Bolu / Turkey',
        overwiev: `This period will always remain in my memory as a time when I worked extremely hard.
                    During this process, I gained in-depth knowledge in foundational engineering topics
                    such as algorithms, computer architecture, operating systems, and databases. With the
                    support of my academic advisors, I made significant progress in various fields of engineering.
                    Additionally, I actively participated in several university projects focused on computer vision,
                    natural language processing (NLP), and artificial neural networks. These projects further
                    deepened my interest and experience in the field of artificial intelligence.
                    GPA: 3.23 / 4.0`
    },
];

const SKILLS = {
    'Programming Languages': ['Java', 'Python', 'C#', 'Nix', 'TypeScript', 'SQL', 'Bash', 'C', 'Rust', 'Go', 'Zig', 'Dart'],
    'Backend Frameworks': ['Spring', 'Gin-gonic', 'Django', 'FastAPI', 'ASP.NET', 'Node.js (Express)'],
    'Frontend Frameworks': ['React', 'Next.js'],
    'Databases': ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Redis'],
    'DevOps & Tools': ['GitHub Actions', 'Docker', 'Git', 'RabbitMQ', 'Linux', 'Ubuntu', 'NixOS'],
    'Mobile Development': ['Flutter', 'Android (Java)'],
    'Machine Learning': ['NumPy', 'Pandas', 'Matplotlib']
};

const LANGUAGES = [
    'English (Fluent)', 'Turkish (Native)', 'German (Intermediate)'
];

const Resume = memo(function Resume() {
    return (
        <div className="min-h-screen bg-dark-bg py-12 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Sidebar/Profile */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-24 bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6 lg:p-8 text-center shadow-xl">
                            {/* Profile Image */}
                            <div className="mb-6 flex justify-center">
                                <div className="relative p-1 rounded-full bg-gradient-primary">
                                    <div className="relative rounded-full overflow-hidden bg-dark-surface">
                                        <Image 
                                            src="/profile.jpg" 
                                            alt="Bedir Tuğra Karaabalı - Software Engineer" 
                                            width={140} 
                                            height={140} 
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Name & Title */}
                            <h3 className="text-2xl font-display font-bold mb-2 text-dark-text">Bedir Tuğra Karaabalı</h3>
                            <div className="text-lg mb-2 text-dark-text-secondary font-sans">Software Engineer</div>
                            <div className="text-sm mb-6 text-dark-text-secondary font-sans">
                                <i className="bi bi-geo-alt mr-1"></i>
                                Istanbul / Bahçelievler, Turkey
                            </div>
                            
                            {/* Contact Info */}
                            <div className="mb-6 space-y-2 text-sm">
                                <div className="flex items-center justify-center gap-2 text-dark-text-secondary">
                                    <i className="bi bi-envelope"></i>
                                    <a href="mailto:bedirkaraabali@gmail.com" className="hover:text-accent-primary transition-colors">
                                        bedirkaraabali@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-dark-text-secondary">
                                    <i className="bi bi-telephone"></i>
                                    <a href="tel:+905418630498" className="hover:text-accent-primary transition-colors">
                                        +90 541 863 04 98
                                    </a>
                                </div>
                            </div>
                            
                            {/* Download Button */}
                            <a 
                                href="/resume.pdf" 
                                className="inline-flex items-center justify-center w-full px-6 py-3 mb-6 text-sm font-semibold text-white bg-gradient-primary rounded-xl shadow-lg shadow-accent-primary/30 hover:shadow-xl hover:shadow-accent-primary/40 transition-all duration-300 hover:-translate-y-1"
                                download
                            >
                                <i className="bi bi-download mr-2"></i>
                                Download Resume
                            </a>
                            
                            {/* Social Links */}
                            <div className="flex justify-center items-center gap-3">
                                <a 
                                    href="https://links.bedirkaraabali.me/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-surface/80 backdrop-blur-sm border border-dark-border text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 hover:-translate-y-1 transition-all duration-300"
                                    title="Personal Links"
                                >
                                    <i className="bi bi-link-45deg text-xl"></i>
                                </a>
                                <a 
                                    href="https://github.com/bdrtr" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-surface/80 backdrop-blur-sm border border-dark-border text-accent-secondary hover:bg-accent-secondary/10 hover:border-accent-secondary/30 hover:-translate-y-1 transition-all duration-300"
                                    title="GitHub"
                                >
                                    <i className="bi bi-github text-xl"></i>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/bdrtr/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-surface/80 backdrop-blur-sm border border-dark-border text-accent-tertiary hover:bg-accent-tertiary/10 hover:border-accent-tertiary/30 hover:-translate-y-1 transition-all duration-300"
                                    title="LinkedIn"
                                >
                                    <i className="bi bi-linkedin text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </aside>
                    
                    {/* Main Content */}
                    <section className="lg:col-span-8">
                        {/* Summary */}
                        <div className="mb-12">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-dark-text animate-fade-in">
                                Summary
                            </h2>
                            <div className="bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6 lg:p-8">
                                <p className="text-dark-text-secondary leading-relaxed font-sans text-lg">
                                    I am an engineer who primarily focuses on backend architectures and systems in my career,
                                    but adopts an interdisciplinary approach in software projects.
                                </p>
                            </div>
                        </div>

                        {/* Experience Timeline */}
                        <div className="mb-12">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-8 text-dark-text animate-fade-in">
                                Work Experience
                            </h2>
                            <div className="relative pl-8">
                                {/* Timeline Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
                                
                                {EXPERIENCE_DATA.map((exp, idx) => (
                                    <div key={idx} className="relative mb-8 last:mb-0">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-dark-bg z-10"></div>
                                        
                                        {/* Content Card */}
                                        <div className="ml-6 bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6 hover:border-accent-primary/30 hover:shadow-xl transition-all duration-300 shadow-lg animate-fade-in">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                                                <span className="inline-flex items-center px-4 py-1.5 rounded-xl bg-accent-primary/20 border border-accent-primary/30 text-accent-primary text-sm font-semibold w-fit">
                                                    {exp.work_position}
                                                </span>
                                                <span className="text-sm text-dark-text-secondary font-sans">
                                                    {exp.start_date} - {exp.end_date}
                                                </span>
                                            </div>
                                            <div className="text-xl font-display font-bold mb-2 text-dark-text">{exp.company_name}</div>
                                            <div className="text-sm text-dark-text-secondary mb-4 font-sans">
                                                <i className="bi bi-geo-alt mr-1"></i>
                                                {exp.location}
                                            </div>
                                            <p className="text-dark-text-secondary leading-relaxed font-sans">{exp.overwiev}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Education Timeline */}
                        <div className="mb-12">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-8 text-dark-text animate-fade-in">
                                Education
                            </h2>
                            <div className="relative pl-8">
                                {/* Timeline Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-secondary to-accent-tertiary"></div>
                                
                                {EDUCATION_DATA.map((edu, idx) => (
                                    <div key={idx} className="relative mb-8 last:mb-0">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-accent-secondary to-accent-tertiary border-4 border-dark-bg z-10"></div>
                                        
                                        {/* Content Card */}
                                        <div className="ml-6 bg-dark-surface/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6 hover:border-accent-secondary/30 hover:shadow-xl transition-all duration-300 shadow-lg animate-fade-in">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                                                <span className="inline-flex items-center px-4 py-1.5 rounded-xl bg-accent-secondary/20 border border-accent-secondary/30 text-accent-secondary text-sm font-semibold w-fit">
                                                    {edu.education_department}
                                                </span>
                                                <span className="text-sm text-dark-text-secondary font-sans">
                                                    {edu.start_date} - {edu.end_date}
                                                </span>
                                            </div>
                                            <div className="text-xl font-display font-bold mb-2 text-dark-text">{edu.university_name}</div>
                                            <div className="text-sm text-dark-text-secondary mb-4 font-sans">
                                                <i className="bi bi-geo-alt mr-1"></i>
                                                {edu.location}
                                            </div>
                                            <p className="text-dark-text-secondary leading-relaxed font-sans whitespace-pre-line">{edu.overwiev}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Skills */}
                        <div className="mb-12">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-8 text-dark-text animate-fade-in">
                                Skills
                            </h2>
                            <div className="space-y-8">
                                {Object.entries(SKILLS).map(([category, skills]) => (
                                    <div key={category}>
                                        <h3 className="text-xl font-display font-semibold mb-4 text-dark-text">{category}</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {skills.map((skill, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="inline-flex items-center px-4 py-2 rounded-xl bg-dark-surface/80 backdrop-blur-sm border border-dark-border text-dark-text-secondary hover:border-accent-primary/30 hover:text-accent-primary transition-all duration-300 text-sm font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Languages */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-dark-text animate-fade-in">
                                Languages
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {LANGUAGES.map((lang, idx) => (
                                    <span 
                                        key={idx} 
                                        className="inline-flex items-center px-4 py-2 rounded-xl bg-dark-surface/80 backdrop-blur-sm border border-dark-border text-dark-text-secondary hover:border-accent-secondary/30 hover:text-accent-secondary transition-all duration-300 text-sm font-medium"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
});

export default Resume;
