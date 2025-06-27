import { useEffect, useState } from "react"
import type IAboutText from "../../Interfaces/IAboutText";

export default function About() {

    const [aboutText, setAboutText] = useState<IAboutText>();

    useEffect( () => {

        const my_text : IAboutText = {
            greeting: "My name is Bedir Tuğra Karaabalı, i am a fullstack web developer",
            sub_text : `Hello, I’m Bedir Tuğra. I am focused on developing myself in various fields and striving to grow as an engineer.
             Beyond enjoying the work I do, I constantly reflect on how I can become a better engineer.
                       In my projects, I approach challenges with an engineering mindset, exploring how different 
                       disciplines can relate to and complement each other. Sometimes, I work on large, collaborative projects, 
                       and other times, I dive into programming purely out of personal passion, following my curiosity and 
                       experimenting freely.I find great inspiration in learning 
                       from people who are passionate and excel in their fields. During this journey of growth,
                        I aim to connect with like-minded individuals who share the same curiosity and drive to create meaningful 
                        solutions together`        
        }

        setAboutText(my_text);

    }, [])

    

    return (
        <section className="bg-light py-5">
            <div  className="container px-5">
                <div  className="row gx-5 justify-content-center">
                    <div  className="col-xxl-8">
                        <div  className="text-center my-5">
                            <h2  className="display-5 fw-bolder"><span  className="text-gradient d-inline">About Me</span></h2>
                            <p  className="lead fw-light mb-4">{aboutText?.greeting}</p>
                            <p  className="text-muted">{aboutText?.sub_text}</p>
                            <div  className="d-flex justify-content-center fs-2 gap-4">
                                <a  className="text-gradient" href="https://links.bedirkaraabali.me/"><i  className="bi bi-link"></i></a>
                                <a  className="text-gradient" href="https://www.linkedin.com/in/bdrtr/"><i  className="bi bi-linkedin"></i></a>
                                <a  className="text-gradient" href="https://github.com/bdrtr"><i  className="bi bi-github"></i></a>
                                <a  className="text-gradient" href="https://www.upwork.com/freelancers/~0191016e744cc3d77f"><i  className="bi bi-briefcase"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}