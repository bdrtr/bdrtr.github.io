import { memo } from "react";
import Experience from "../components/Results/Experience";
import type IExperience from "../Interfaces/IExperience";
import Education from "../components/Results/Education";
import type IEducation from "../Interfaces/UEducation";
import Skill from "../components/Results/Skills";
import Language from "../components/Results/Language";
import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";

// Move static data outside component to prevent recreation on every render
const EXPERIENCE_DATA: IExperience[] = [
    {
        start_date: '04/2025',
        end_date: '05/2025',
        work_position: 'Web Developer Intern',
        company_name: 'MEGACODE Yazılım',
        location: 'Istanbul / Turkey',
        overwiev: 'I actively took part in projects involving both back-end and front-end development throughout a one-month period.'
    },
    {
        start_date: '09/2022',
        end_date: '06/2023',
        work_position: 'Freelance Web Developer',
        company_name: 'Self-Employed',
        location: 'Remote',
        overwiev: 'Worked on various freelance web projects, focusing on modern UI/UX and full-stack solutions.'
    },
    {
        start_date: '11/2024',
        end_date: '01/2025',
        work_position: 'IT Intern',
        company_name: 'Okyanus Bilgisayar',
        location: 'Istanbul / Turkey',
        overwiev: 'Sunucu kurulumu, bakımı ve teknik destek gibi konularda nasıl hizmet verebileceğimi ve kişisel anlamda bilgi birikimimi artırdığım bir tecrübe oldu.'
    },
    {
        start_date: '07/2024',
        end_date: '10/2024',
        work_position: 'Python Developer Intern',
        company_name: 'Dafam Akademie',
        location: 'Dortmund / Germany',
        overwiev: 'Python ile otomasyon yazılımı geliştirmesi yaptığım ve kaliteli iş adamlarıyla beraber bulunduğum unutulmaz bir staj tecrübesi oldu.'
    },
    {
        start_date: '10/2022',
        end_date: '04/2023',
        work_position: 'Software Engineer',
        company_name: 'Ayvaz Elektromobil',
        location: 'Bolu / Turkey',
        overwiev: `TÜBİTAK elektrikli araç yarışması için kurulmuş 15 kişilik bir ekibin parçası olarak,
         araç kontrol sistemi (AKS)
        ile batarya yönetim sistemi arasındaki iletişimden sorumluydum. Ayrıca, AKS'nin tasarımı, kodlanması ve
        telemetrisi üzerinde çalıştım`
    },
];

const EDUCATION_DATA: IEducation[] = [
    {
        start_date: '2019',
        end_date: '2019',
        university_name: 'Abant İzzet Baysal Üniversitesi',
        education_department: 'Computer Engineering',
        location: 'Bolu / Turkey',
        overwiev: `- My time here will always be remembered as a place
                    where I worked extremely hard. During this period, I gained
                    in-depth knowledge in foundational engineering topics
                    such as algorithms, computer architecture, operating
                    systems, and databases. With the support of my mentors, I
                    made significant progress in various fields of engineering.
                    In addition, I actively participated in several university
                    projects focused on computer vision, natural language
                    processing (NLP), and artificial neural networks, which
                    deepened my interest and experience in the field of
                    artificial intelligence. (3.23/4)`
    },
];

const SKILLS = [
    'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'Python', 'Docker', 'CI/CD', 'Git', 'Jest', 'Figma'
];

const LANGUAGES = [
    'English (Fluent)', 'Turkish (Native)', 'German (Intermediate)'
];

const Resume = memo(function Resume() {
    return (
        <div className="container py-5">
            <div className="row g-5">
                {/* Sidebar/Profile */}
                <aside className="col-lg-4 mb-4 mb-lg-0">
                    <div className="card shadow border-0 rounded-4 text-center p-4 bg-gradient-primary-to-secondary text-white position-sticky top-0">
                        <img src={profileImg} alt="Profile" className="rounded-circle mb-3 mx-auto" style={{ width: 120, height: 120, objectFit: 'cover', border: '4px solid #d4af37', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }} />
                        <h3 className="fw-bold mb-1">Bedir Tuğra Karaabalı</h3>
                        <div className="mb-2">Fullstack Web Developer</div>
                        <div className="mb-3 small">Istanbul, Turkey</div>
                        <a href="/public/resume.pdf" className="btn btn-warning btn-sm mb-2" download>
                            <i className="bi bi-download me-1"></i> Download Resume
                        </a>
                        <div className="d-flex justify-content-center gap-2 mt-2">
                            <a href="mailto:bedir@example.com" className="btn btn-outline-light btn-sm rounded-circle"><i className="bi bi-envelope"></i></a>
                            <a href="https://github.com/bdrtr" className="btn btn-outline-light btn-sm rounded-circle"><i className="bi bi-github"></i></a>
                            <a href="https://linkedin.com/in/bedir" className="btn btn-outline-light btn-sm rounded-circle"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </aside>
                {/* Main Content */}
                <section className="col-lg-8">
                    {/* Experience Timeline */}
                    <div className="mb-5">
                        <h2 className="fw-bold mb-4 text-gradient">Experience</h2>
                        <div className="timeline position-relative ps-4">
                            <div className="border-start border-3 border-primary position-absolute h-100 top-0 start-0" style={{ left: 0, width: 3, zIndex: 0 }}></div>
                            {EXPERIENCE_DATA.map((exp, idx) => (
                                <div key={idx} className="position-relative mb-5">
                                    <span className="position-absolute top-0 start-0 translate-middle bg-primary rounded-circle" style={{ width: 18, height: 18, zIndex: 1, border: '3px solid #fff' }}></span>
                                    <div className="card shadow border-0 rounded-4 ms-4 p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="badge bg-primary fs-6">{exp.work_position}</span>
                                            <span className="text-muted small">{exp.start_date} - {exp.end_date}</span>
                                        </div>
                                        <div className="fw-bold mb-1">{exp.company_name}</div>
                                        <div className="text-muted mb-2 small"><i className="bi bi-geo-alt me-1"></i>{exp.location}</div>
                                        <div>{exp.overwiev}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Education Timeline */}
                    <div className="mb-5">
                        <h2 className="fw-bold mb-4 text-gradient">Education</h2>
                        <div className="timeline position-relative ps-4">
                            <div className="border-start border-3 border-warning position-absolute h-100 top-0 start-0" style={{ left: 0, width: 3, zIndex: 0 }}></div>
                            {EDUCATION_DATA.map((edu, idx) => (
                                <div key={idx} className="position-relative mb-5">
                                    <span className="position-absolute top-0 start-0 translate-middle bg-warning rounded-circle" style={{ width: 18, height: 18, zIndex: 1, border: '3px solid #fff' }}></span>
                                    <div className="card shadow border-0 rounded-4 ms-4 p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="badge bg-warning text-dark fs-6">{edu.education_department}</span>
                                            <span className="text-muted small">{edu.start_date} - {edu.end_date}</span>
                                        </div>
                                        <div className="fw-bold mb-1">{edu.university_name}</div>
                                        <div className="text-muted mb-2 small"><i className="bi bi-geo-alt me-1"></i>{edu.location}</div>
                                        <div>{edu.overwiev}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Skills & Languages */}
                    <div className="row g-4">
                        <div className="col-md-6">
                            <h2 className="fw-bold mb-3 text-gradient">Skills</h2>
                            <div className="d-flex flex-wrap gap-2">
                                {SKILLS.map((skill, idx) => (
                                    <span key={idx} className="badge rounded-pill bg-secondary px-3 py-2 fs-6 mb-1">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="fw-bold mb-3 text-gradient">Languages</h2>
                            <div className="d-flex flex-wrap gap-2">
                                {LANGUAGES.map((lang, idx) => (
                                    <span key={idx} className="badge rounded-pill bg-info px-3 py-2 fs-6 mb-1">{lang}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
});

export default Resume;