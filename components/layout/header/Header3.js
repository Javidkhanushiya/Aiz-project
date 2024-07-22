import Link from "next/link"
import Menu from "../Menu"
import OnePageNav from "../OnePageNav"

export default function Header3({
    scroll,
    isMobileMenu,
    handleMobileMenu,
    isOffCanvas,
    handleOffCanvas,
    isSearch,
    handleSearch,
    onePageNav
}) {
    return (
        <>

            <header>
                <div className="header-top-section top-style-3">
                    <div className="container">
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
                                <div className="flag-wrap">
                                    <div className="flag">
                                        <img loading="lazy" src="/assets/img/flag.png" alt="flag" />
                                    </div>
                                    <div className="nice-select" tabIndex={0}>
                                        <span className="current">
                                            English
                                        </span>
                                        <ul className="list">
                                            <li data-value={1} className="option selected focus">
                                                English
                                            </li>
                                            <li data-value={1} className="option">
                                                Bangla
                                            </li>
                                            <li data-value={1} className="option">
                                                Hindi
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <span>Follow Us:</span>
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                    <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                    <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className={`header-3 ${scroll ? "sticky" : ""}`}>
                    <div className="plane-shape">
                        <img loading="lazy" src="/assets/img/plane.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="mega-menu-wrapper">
                            <div className="header-main">
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
                                                {onePageNav ?
                                                    <OnePageNav />
                                                    :
                                                    <Menu />
                                                }
                                            </nav>
                                        </div>
                                    </div>
                                    <a onClick={handleSearch} className="search-trigger search-icon">                                    
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={'20px'} width={"20px"}><defs></defs><path style={{ opacity: 0.4, }} className="fa-secondary" d="M208 64a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 352A208 208 0 1 0 208 0a208 208 0 1 0 0 416z"/><path className="fa-primary" d="M330.7 376L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376z"/></svg>
</a>
                                    <div className="header-button">
                                        <Link href="/contact" className="theme-btn bg-white">
                                            <span>
                                                get A Quote
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="header__hamburger d-lg-none my-auto">
                                        <div className="sidebar__toggle" onClick={handleOffCanvas}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={ '24px' } width={ "24px" }>
                                                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
