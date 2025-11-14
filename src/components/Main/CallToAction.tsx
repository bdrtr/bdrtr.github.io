'use client';

import { memo } from "react";
import Link from "next/link";

const CallToAction = memo(function CallToAction() {
    return (
        <section className="py-5 header-hero-bg text-white">
            <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <div className="text-center">
                            <h2 className="fw-bolder mb-5">
                                Ready to Start Your Next Project?
                            </h2>
                            <p className="lead mb-4">
                                Let's work together to bring your ideas to life. I'm here to help you create 
                                amazing digital experiences that drive results.
                            </p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <Link 
                                    className="btn btn-light btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" 
                                    href="/contact"
                                >
                                    <i className="bi bi-envelope me-2"></i>
                                    Get In Touch
                                </Link>
                                <Link 
                                    className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" 
                                    href="/projects"
                                >
                                    <i className="bi bi-folder me-2"></i>
                                    View Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default CallToAction; 