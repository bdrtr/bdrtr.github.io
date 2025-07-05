import { memo, useMemo } from "react";
import Lottie from "lottie-react";
import workIn from "../../assets/work-in.json"
import ProfileImage from "./ProfileImage";

const Header = memo(function Header() {
    // Memoize the Lottie animation props to prevent unnecessary re-renders
    const lottieProps = useMemo(() => ({
        animationData: workIn,
        loop: true,
        style: { width: 60, height: 60 },
        "data-bs-toggle": "tooltip",
        title: "i am runnin' to job"
    }), []);

    return (
        <header className="py-5 bg-gradient-primary-to-secondary text-white">
            <div className="container px-5 pb-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-xxl-5">
                        <div className="text-center text-xxl-start">
                            <div className="badge bg-white text-primary mb-4">
                                <div className="text-uppercase fw-bold">🚀 Full-stack developer &middot; 💻 Programmer &middot; 🌟 Open-source enthusiast</div>
                            </div>
                            <div className="fs-3 fw-light text-white-50 mb-3">I help startups and businesses</div>
                            <h1 className="display-3 fw-bolder mb-5">
                                <span className="text-white d-inline">build fast, modern, and scalable web apps.</span>
                                <div className="d-inline-block ms-3">
                                    <Lottie {...lottieProps} />
                                </div>
                            </h1>
                            
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <a className="btn btn-light btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="/resume.pdf">
                                    <i className="bi bi-download me-2"></i>
                                    Download Resume
                                </a>
                                <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="projects">
                                    <i className="bi bi-folder me-2"></i>
                                    View Projects
                                </a>
                            </div>
                            
                            <div className="d-flex flex-wrap gap-4 mt-4 justify-content-center justify-content-xxl-start">
                                <div className="d-flex align-items-center text-white-50">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <span>Fast & Responsive</span>
                                </div>
                                <div className="d-flex align-items-center text-white-50">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <span>Modern Tech Stack</span>
                                </div>
                                <div className="d-flex align-items-center text-white-50">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7">
                        <ProfileImage ppath={'profile.jpg'} />
                    </div> 
                </div>
            </div>
        </header>
    );
});

export default Header;