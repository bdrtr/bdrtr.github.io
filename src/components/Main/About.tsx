import { memo, useMemo } from "react"
import type IAboutText from "../../Interfaces/IAboutText";

// Move static data outside component to prevent recreation on every render
const ABOUT_DATA: IAboutText = {
    greeting: "My name is Bedir Tuğra Karaabalı, i am a fullstack web developer",
    sub_text: `Hello, I'm Bedir Tuğra. I am focused on developing myself in various fields and striving to grow as an engineer.
     Beyond enjoying the work I do, I constantly reflect on how I can become a better engineer.
               In my projects, I approach challenges with an engineering mindset, exploring how different 
               disciplines can relate to and complement each other. Sometimes, I work on large, collaborative projects, 
               and other times, I dive into programming purely out of personal passion, following my curiosity and 
               experimenting freely.I find great inspiration in learning 
               from people who are passionate and excel in their fields. During this journey of growth,
                I aim to connect with like-minded individuals who share the same curiosity and drive to create meaningful 
                solutions together`        
};

const About = memo(function About() {
    // Memoize the about text to prevent unnecessary re-renders
    const aboutText = useMemo(() => ABOUT_DATA, []);

    return (
        <section className="bg-white py-5">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xxl-10">
                        <div className="text-center my-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-4 mx-auto" style={{width: '4rem', height: '4rem'}}>
                                <i className="bi bi-person-badge fs-1"></i>
                            </div>
                            <h2 className="display-5 fw-bolder mb-4">
                                <span className=" d-inline">About Me</span>
                            </h2>
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-12">
                                    <div className="card shadow border-0 rounded-4 mb-5">
                                        <div className="card-body p-5">
                                            <h3 className="fw-bolder mb-4 text-primary">{aboutText.greeting}</h3>
                                            <p className="text-muted lead mb-0">{aboutText.sub_text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-8">
                                    <h4 className="fw-bolder mb-4">Let's Connect</h4>
                                    <div className="d-flex justify-content-center fs-2 gap-4">
                                        <a className="text-gradient" href="https://links.bedirkaraabali.me/" title="Personal Links">
                                            <i className="bi bi-link-45deg"></i>
                                        </a>
                                        <a className="text-gradient" href="https://www.linkedin.com/in/bdrtr/" title="LinkedIn">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                        <a className="text-gradient" href="https://github.com/bdrtr" title="GitHub">
                                            <i className="bi bi-github"></i>
                                        </a>
                                        <a className="text-gradient" href="https://www.upwork.com/freelancers/~0191016e744cc3d77f" title="Upwork">
                                            <i className="bi bi-briefcase"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default About;