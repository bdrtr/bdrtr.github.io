'use client';

import { memo } from "react";

const Footer = memo(function Footer() {
    return (
        <footer className="py-6 mt-auto bg-dark-surface border-t border-dark-border">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-dark-text-secondary">
                        Copyright &copy; Bedir Tuğra Karaabalı <span className="text-xs">2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-secondary">
                        <a 
                            href="https://github.com/bdrtr.gpg" 
                            className="hover:text-accent-primary transition-colors"
                        >
                            send me private message
                        </a>
                        <span>&middot;</span>
                        <a 
                            href="https://github.com/bdrtr/bdrtr.github.io" 
                            className="hover:text-accent-primary transition-colors"
                        >
                            source code
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
