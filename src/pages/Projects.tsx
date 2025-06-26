export default function Projects() {

    return (
        <section className="py-5">
            <div className="container px-5 mb-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                            <div className="card-body p-0">
                                <div className="d-flex align-items-center">
                                    <div className="p-5">
                                        <h2 className="fw-bolder">Project Name 1</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                    </div>
                                    <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="card overflow-hidden shadow rounded-4 border-0">
                            <div className="card-body p-0">
                                <div className="d-flex align-items-center">
                                    <div className="p-5">
                                        <h2 className="fw-bolder">Project Name 2</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                    </div>
                                    <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}