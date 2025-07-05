import { memo } from "react";

const Services = memo(function Services() {
    const services = [
        {
            icon: "bi-code-slash",
            title: "Web Development",
            description: "Full-stack web applications using modern technologies like React, Node.js, and Python frameworks.",
            color: "primary"
        },
        {
            icon: "bi-phone",
            title: "Mobile Development",
            description: "Cross-platform mobile applications using React Native and Flutter for iOS and Android.",
            color: "secondary"
        },
        {
            icon: "bi-database",
            title: "Database Design",
            description: "Database architecture, optimization, and management with SQL and NoSQL solutions.",
            color: "success"
        },
        {
            icon: "bi-cloud",
            title: "Cloud Solutions",
            description: "Cloud infrastructure setup, deployment, and management using AWS, Azure, and Google Cloud.",
            color: "info"
        },
        {
            icon: "bi-shield-check",
            title: "Security & Testing",
            description: "Application security, automated testing, and quality assurance processes.",
            color: "warning"
        },
        {
            icon: "bi-gear",
            title: "DevOps & CI/CD",
            description: "Continuous integration, deployment pipelines, and infrastructure automation.",
            color: "danger"
        }
    ];

    return (
        <section className="py-5 bg-light">
            <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <div className="text-center">
                            <h2 className="fw-bolder mb-5">
                                <span className="text-gradient d-inline">What I Do</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-3 justify-content-center">
                    {services.map((service, index) => (
                        <div className="col mb-5 h-100" key={index}>
                            <div className="card h-100 shadow border-0">
                                <div className="card-body p-4">
                                    <div className={`feature bg-${service.color} bg-gradient text-white rounded-3 mb-3`}>
                                        <i className={`bi ${service.icon}`}></i>
                                    </div>
                                    <h5 className="fw-bolder">
                                        <span className="text-gradient d-inline">{service.title}</span>
                                    </h5>
                                    <p className="text-muted">{service.description}</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="small">
                                                <div className="fw-bold">Ready to start?</div>
                                                <div className="text-muted">Let's discuss your project</div>
                                            </div>
                                        </div>
                                        <div className={`rounded overflow-hidden flex-shrink-0`}>
                                            <i className={`bi bi-arrow-right text-${service.color}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Services; 