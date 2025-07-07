import { memo } from "react";

const Stats = memo(function Stats() {
    const stats = [
        {
            number: "50+",
            label: "Projects Completed",
            icon: "bi-folder-check",
            color: "primary"
        },
        {
            number: "3+",
            label: "Years Experience",
            icon: "bi-calendar-check",
            color: "secondary"
        },
        {
            number: "15+",
            label: "Technologies Mastered",
            icon: "bi-code-square",
            color: "success"
        },
        {
            number: "100%",
            label: "Client Satisfaction",
            icon: "bi-heart-fill",
            color: "danger"
        }
    ];

    return (
        <section className="py-5 bg-white">
            <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <div className="text-center">
                            <h2 className="fw-bolder mb-5">
                                <span className="text-gradiant d-inline">My Achievements</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                    {stats.map((stat, index) => (
                        <div className="col mb-5" key={index}>
                            <div className="text-center">
                                <div className={`feature bg-${stat.color} bg-gradient text-white rounded-3 mb-3 mx-auto`} style={{width: '4rem', height: '4rem'}}>
                                    <i className={`bi ${stat.icon} fs-1`}></i>
                                </div>
                                <div className="h5 fw-bolder">
                                    <span className="text-gradient d-inline">{stat.number}</span>
                                </div>
                                <div className="text-muted">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Stats; 