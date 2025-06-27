import { useEffect, useState } from "react";
import Experience from "../components/Results/Experience";
import type IExperience from "../Interfaces/IExperience";
import Education from "../components/Results/Education";
import type IEducation from "../Interfaces/UEducation";
import Skill from "../components/Results/Skills";
import Language from "../components/Results/Language";


export default function Resume() {

    const [experience_data, setExperienceData] = useState<IExperience[]>();
    const [education_data, setEducationData] = useState<IEducation[]>();
    const [skill_data, setSkillData] = useState<string[]>();
    const [language_data, setLanguageData] = useState<string[]>();
    const [loading, setLoading] = useState<boolean>(false);

     useEffect(() => {
        setLoading(true);
        try {
            async function getLoadData() {

                //sorgular ve hata ayıklama burda olmalı

                const temp_list : IExperience[] = [
                    {
                    start_date : '04/2025',
                    end_date : '05/2025',
                    work_position: 'Web Developer Intern',
                    company_name: 'MEGACODE Yazılım',
                    location : 'Istanbul / Turkey',
                    overwiev : 'I actively took part in projects involving both back-end and front-end development throughout a one-month period.'
                    },
                    {
                    start_date : '11/2024',
                    end_date : '01/2025',
                    work_position: 'IT Intern',
                    company_name: 'Okyanus Bilgisayar',
                    location : 'Istanbul / Turkey',
                    overwiev : 'Sunucu kurulumu, bakımı ve teknik destek gibi konularda nasıl hizmet verebileceğimi ve kişisel anlamda bilgi birikimimi artırdığım bir tecrübe oldu.'
                    },
                    {
                    start_date : '07/2024',
                    end_date : '10/2024',
                    work_position: 'Python Developer Intern',
                    company_name: 'Dafam Akademie',
                    location : 'Dortmund / Germany',
                    overwiev : 'Python ile otomasyon yazılımı geliştirmesi yaptığım ve kaliteli iş adamlarıyla beraber bulunduğum unutulmaz bir staj tecrübesi oldu.'
                    },
                    {
                    start_date : '10/2022',
                    end_date : '04/2023',
                    work_position: 'Software Engineer',
                    company_name: 'Ayvaz Elektromobil',
                    location : 'Bolu / Turkey',
                    overwiev : `TÜBİTAK elektrikli araç yarışması için kurulmuş 15 kişilik bir ekibin parçası olarak,
                     araç kontrol sistemi (AKS)
                    ile batarya yönetim sistemi arasındaki iletişimden sorumluydum. Ayrıca, AKS’nin tasarımı, kodlanması ve
                    telemetrisi üzerinde çalıştım`
                    },
                ];

                const temp_list2 : IEducation[] = [
                    {
                    start_date : '2020',
                    end_date : '2025',
                    university_name : 'Abant İzzet Baysal Üniversitesi',
                    education_department: 'Computer Engineering',
                    location: 'Bolu / Turkey',
                    overwiev : ''
                    },
                    {
                    start_date : '2019',
                    end_date : '2019',
                    university_name : 'Abant İzzet Baysal Üniversitesi',
                    education_department: 'Computer Engineering',
                    location: 'Bolu / Turkey',
                    overwiev : `- My time here will always be remembered as a place
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


                const temp_list3 = [
                    'Web Development',
                    'Spring boot',
                    'FastApi',
                    'Django',
                    'flask',
                    'NodeJS',
                    'express.js',
                    'React',
                    'Bootstrap',
                    'Sql',
                    'MongoDB',
                    'postgreSQL',
                    'Docker',
                    'git/github',
                    
                ]

                const temp_list4 = [
                    'Python',
                    'C/CPP',
                    'JS/TS',
                    'JAVA',
                    'Kotlin',
                    'Dart',
                    'Bash'
                ]
                
                
                setExperienceData(temp_list);
                setEducationData(temp_list2);
                setSkillData(temp_list3);
                setLanguageData(temp_list4);
            
            }

            getLoadData();

        
        } catch (error : any) {
            console.error(error.message);
        }
        setLoading(false);  
    }, []);



    return (
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">

                    <section>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h2 className="text-primary fw-bolder mb-0">Experience</h2>
              
        
                            <a className="btn btn-primary px-4 py-3" href="/resume.pdf">
                                <div className="d-inline-block bi bi-download me-2"></div>
                                Download Resume
                            </a>
                        </div>
                        {
                            experience_data && experience_data.length > 0  && (
                                <>
                                    {experience_data.map((item, index) => (
                                        <Experience experience={item} key={index} />
                                    ))}
                                </>
                            )
                        }
                        
            
                    </section>
                    <section>
                        <h2 className="text-secondary fw-bolder mb-4">Education</h2>                
                        {
                            education_data && education_data.length > 0  && (
                                <>
                                    {education_data.map((item, index) => (
                                        <Education experience={item} key={index} />
                                    ))}
                                </>
                            )
                        }

                    </section>
        
                    <div className="pb-5"></div>
       
                    <section>
          
                        <div className="card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                  
                                <div className="mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                        <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                                    </div>
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-4">
                                        {
                                        skill_data && skill_data.length > 0 ? (
                                            skill_data?.map((item, index) => (
                                            <div className="col" key={index}>
                                                <Skill skill={item} />
                                            </div>
                                            ))
                                        ) : (
                                            <p className="text-muted">Yetenek bilgisi bulunamadı.</p>
                                        )}
                                    </div>
                                </div>
                    
                                <div className="mb-0">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                        <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                                        {
                                        language_data && language_data.length > 0 ? (
                                            language_data?.map((item, index) => (
                                            <div className="col" key={index}>
                                                <Language language={item} />
                                            </div>
                                            ))
                                        ) : (
                                            <p className="text-muted">Dil bilgisi bulunamadı.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}