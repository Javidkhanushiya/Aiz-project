import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "../Menu";
import OnePageNav from "../OnePageNav";

export default function Header1({
    scroll,
    isOffCanvas,
    handleOffCanvas,
    onePageNav
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuLoaded, setIsMobileMenuLoaded] = useState(false);
    const [isOffCanvasLoaded, setIsOffCanvasLoaded] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const loadForMobile = () => {
            if (window.innerWidth <= 992) {
                const timer = setTimeout(() => {
                    setIsMobileMenuLoaded(true);
                    setIsOffCanvasLoaded(true);
                }, 5000);

                return () => clearTimeout(timer);
            } else {
                setIsMobileMenuLoaded(true);
                setIsOffCanvasLoaded(true);
            }
        };

        loadForMobile();
        window.addEventListener('resize', loadForMobile);

        return () => {
            window.removeEventListener('resize', loadForMobile);
        };
    }, []);

    return (
        <>
            <header>
                <div className="header-top-section fix">
                    <div className="container-fluid">
                        <div className="header-top-wrapper">
                            <ul className="contact-list">
                                <li>
                                    <i className="far fa-envelope" />
                                    <Link href="mailto:info@example.com" className="link">info@example.com</Link>
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone-volume" />
                                    <Link href="tel:2086660112">+208-666-0112</Link>
                                </li>
                            </ul>
                            <div className="top-right">
                                <div className="social-icon d-flex align-items-center">
                                    <span>Follow Us:</span>
                                    <Link href="https://www.facebook.com/aizinfotech" aria-label="Visit our Facebook page"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="https://x.com/aizinfotechs" aria-label="Visit our Twitter page"><i className="fab fa-twitter" /></Link>
                                    <Link href="https://www.linkedin.com/company/aizinfotechs/" aria-label="Visit our Linkedin page"><i className="fa-brands fa-linkedin-in" /></Link>
                                    <Link href="https://www.youtube.com/" aria-label="Visit our Youtube page"><i className="fa-brands fa-youtube" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className={`header-1 ${scroll ? "sticky" : ""}`}>
                    <div className="container-fluid">
                        <div className="mega-menu-wrapper">
                            <div className="header-main style-2">
                                <div className="header-left">
                                    <div className="logo">
                                        <Link href="/" className="header-logo">
                                            <img loading="lazy" src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header-right d-flex justify-content-end align-items-center">
                                    <div className="mean__menu-wrapper">
                                        <div className="main-menu">
                                            <nav id="mobile-menu">
                                                {isMobileMenuLoaded && (onePageNav ? <OnePageNav /> : <Menu />)}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="header-button">
                                        <Link href="/contact" className="theme-btn">
                                            <span>
                                                Get A Quote
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}>
                                                    <path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="header__hamburger d-xl-block my-auto">
                                        <div className="sidebar__toggle" onClick={handleOffCanvas}>
                                            {isOffCanvasLoaded && (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'24px'} width={"24px"}>
                                                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
