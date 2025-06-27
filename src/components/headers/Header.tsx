import Lottie from "lottie-react";
import workIn from "../../assets/work-in.json"
import ProfileImage from "./ProfileImage";

export default function Header() {

    return (
        <header className="py-5">
            <div className="container px-5 pb-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-xxl-5">
                        <div className="text-center text-xxl-start">
                            <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Full-stack developer &middot; programmer &middot; open-source enthusiast</div></div>
                            <div className="fs-3 fw-light text-muted">I help startups and businesses</div>
                            <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">build fast, modern, and scalable web apps.</span>
                            <Lottie animationData={workIn} loop={true} style={{ width: 60, height: 60 }} data-bs-toggle="tooltip" title="i am runnin' to job"/>
                            </h1>
                            
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="/resume.pdf">Resume</a>
                                <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="projects">Projects</a>
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
    
}