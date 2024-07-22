
import Link from 'next/link'

export default function Service3() {
    return (
        <>
            <section className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-3.jpg")' }}>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span>What We Do</span>
                            <h2>
                                We Solve IT Problems <br /> With Technology
                            </h2>
                        </div>
                        <Link href="/service" className="theme-btn">
                            See all Services
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-items">
                                <div className="service-image">
                                    <img loading="lazy" src="/assets/img/service/02.jpg" alt="service-img" />
                                </div>
                                <div className="icon-2">
                                    <img loading="lazy" src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                </div>
                                <div className="service-content">
                                    <div className="icon">
                                        <img loading="lazy" src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                    </div>
                                    <h4>
                                        <Link href="/service-details">Database Security</Link>
                                    </h4>
                                    <p>
                                        accumsan. Pellentesque in magna tincidunt, this is.
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-items">
                                <div className="service-image">
                                    <img loading="lazy" src="/assets/img/service/03.jpg" alt="service-img" />
                                </div>
                                <div className="icon-2">
                                    <img loading="lazy" src="/assets/img/service/icon/s-icon-2.svg" alt="img" />
                                </div>
                                <div className="service-content">
                                    <div className="icon">
                                        <img loading="lazy" src="/assets/img/service/icon/s-icon-2.svg" alt="img" />
                                    </div>
                                    <h4>
                                        <Link href="/service-details">IT Consultancy</Link>
                                    </h4>
                                    <p>
                                        accumsan. Pellentesque in magna tincidunt, this is.
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-items">
                                <div className="service-image">
                                    <img loading="lazy" src="/assets/img/service/04.jpg" alt="service-img" />
                                </div>
                                <div className="icon-2">
                                    <img loading="lazy" src="/assets/img/service/icon/s-icon-4.svg" alt="img" />
                                </div>
                                <div className="service-content">
                                    <div className="icon">
                                        <img loading="lazy" src="/assets/img/service/icon/s-icon-5.svg" alt="img" />
                                    </div>
                                    <h4>
                                        <Link href="/service-details">App Development</Link>
                                    </h4>
                                    <p>
                                        accumsan. Pellentesque in magna tincidunt, this is.
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-items">
                                <div className="service-image">
                                    <img loading="lazy" src="/assets/img/service/05.jpg" alt="service-img" />
                                </div>
                                <div className="icon-2">
                                    <img loading="lazy" src="/assets/img/service/icon/s-icon-3.svg" alt="img" />
                                </div>
                                <div className="service-content">
                                    <div className="icon">
                                        <img loading="lazy" src="/assets/img/service/icon/s-icon-3.svg" alt="img" />
                                    </div>
                                    <h4>
                                        <Link href="/service-details">Database Security</Link>
                                    </h4>
                                    <p>
                                        accumsan. Pellentesque in magna tincidunt, this is.
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta-banner-2 section-padding">
                    <div className="container">
                        <div className="cta-wrapper-2">
                            <div className="author-icon">
                                <div className="icon">
                                    <i className="fa-solid fa-phone" />
                                </div>
                                <div className="content">
                                    <span>Call Us Now</span>
                                    <h4>
                                        <Link href="tel:+2085550112">+208-555-0112</Link>
                                    </h4>
                                </div>
                            </div>
                            <h3>
                                Stay Connected With <br /> Cutting Edge IT
                            </h3>
                            <Link href="/contact" className="theme-btn bg-white">
                                get A Quote
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
