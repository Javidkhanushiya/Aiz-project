import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-section">
                <div className="footer-widgets-wrapper footer-bg">
                    <div className="shape-1">
                        <img loading="lazy" src="/assets/img/footer-shape-1.png" alt="shape-img" />
                    </div>
                    <div className="shape-2">
                        <img loading="lazy" src="/assets/img/footer-shape-2.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link href="/">
                                            <img loading="lazy" src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Phasellus ultricies aliquam volutpat
                                            ullamcorper laoreet neque, a lacinia
                                            curabitur lacinia mollis
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="#"><i className="fab fa-twitter" /></Link>
                                            <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/about">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                                                Infotech About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                                                Our Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                                                FAQ’S
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="single-footer-widget style-margin">
                                    <div className="widget-head">
                                        <h3>Recent Posts</h3>
                                    </div>
                                    <div className="recent-post-area">
                                        <div className="recent-post-items">
                                            <div className="thumb">
                                                <img loading="lazy" src="/assets/img/news/pp1.jpg" alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2" />
                                                        20 Feb, 2024
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link href="/news-details">
                                                        Top 5 Most Famous <br />
                                                        Technology Trend In 2024
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="recent-post-items mb-0">
                                            <div className="thumb">
                                                <img loading="lazy" src="/assets/img/news/pp2.jpg" alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2" />
                                                        15 Dec, 2024
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link href="/news-details">
                                                        The Surfing Man Will Blow <br />
                                                        Your Mind
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                6391 Elgin St. Celina, USA
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="tel:2086660112">+208-666-0112</Link>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-envelope" />
                                                <Link href="mailto:infotech@gmail.com">Infotech@gmail.com</Link>
                                            </li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn hover-white mt-4">
                                            get A Quote
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © All Copyright {new Date().getFullYear()} by <Link href="/">Infotech</Link>
                            </p>
                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                                <li>
                                    <Link href="/contact">
                                        Terms &amp; Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="#" id="scrollUp" className="scroll-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={'20px'} width={"20px"}><path d="M209 50.2l-17-17-17 17L21.4 203.8l-17 17 33.9 33.9 17-17L168 125.1V456v24h48V456 125.1L328.6 237.8l17 17 33.9-33.9-17-17L209 50.2z"/></svg>
                    </Link>
                </div>
            </footer>

        </>
    )
}
