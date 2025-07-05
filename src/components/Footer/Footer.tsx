import { memo } from "react";
import { Link } from "react-router-dom";

const Footer = memo(function Footer() {
    return (
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto">
                        <div className="small m-0">Copyright &copy; Bedir Tuğra Karaabalı <small>2025</small></div>
                    </div>
                    <div className="col-auto">
                        <a className="small" href="https://github.com/bdrtr.gpg">send me private message</a>
                        <span className="mx-1">&middot;</span>
                        <a className="small" href="https://github.com/bdrtr/bdrtr.github.io">source code</a>
                        <span className="mx-1">&middot;</span>
                        <Link className="small" to="contact">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;