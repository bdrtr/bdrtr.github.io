import { memo } from "react";

const Testimonials = memo(function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            position: "CEO, TechStart Inc.",
            content: "Bedir delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.",
            rating: 5,
            avatar: "👩‍💼"
        },
        {
            name: "Michael Chen",
            position: "CTO, InnovateLab",
            content: "Working with Bedir was a pleasure. He's not just a developer, but a true problem solver who understands business needs and delivers scalable solutions.",
            rating: 5,
            avatar: "👨‍💻"
        },
        {
            name: "Emily Rodriguez",
            position: "Product Manager, DataFlow",
            content: "Bedir's expertise in full-stack development helped us launch our product ahead of schedule. His communication and technical skills are outstanding.",
            rating: 5,
            avatar: "👩‍🔬"
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <i 
                key={i} 
                className={`bi bi-star${i < rating ? '-fill' : ''} text-warning`}
            ></i>
        ));
    };

    return (
        <section className="py-5 bg-light">
            <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="text-center">
                            <h2 className="fw-bolder mb-5">
                                <span className="text-gradiant d-inline">What Clients Say</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-12 col-xl-10">
                        <div className="row gx-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                            {testimonials.map((testimonial, index) => (
                                <div className="col mb-5" key={index}>
                                    <div className="card h-100 shadow border-0">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="bg-primary bg-gradient text-white rounded-3 p-3">
                                                        <span className="fs-4">{testimonial.avatar}</span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div className="fw-bold">{testimonial.name}</div>
                                                    <div className="text-muted small">{testimonial.position}</div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                            <p className="text-muted mb-0">"{testimonial.content}"</p>
                                        </div>
                                        <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                            <div className="d-flex align-items-end justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <i className="bi bi-quote fs-1 text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Testimonials; 