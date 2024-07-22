
import Link from 'next/link'

export default function News2() {
    return (
        <>
            <section className="news-section fix section-padding" id="blog">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Latest Blog</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Checkout Our Latest <br /> News &amp; Articles
                            </h2>
                        </div>
                        <Link href="/news" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                            All Article
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img loading="lazy" src="/assets/img/news/04.jpg" alt="news-img" />
                                    <div className="post-date">
                                        <h3>
                                            17 <br />
                                            <span>Feb</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <ul>
                                        <li>
                                            <i className="fa-regular fa-user" />
                                            By Admin
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-tag" />
                                            IT Services
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/news-details">Simplify Streamline Succeed  IT Solutions</Link>
                                    </h3>
                                    <Link href="/news-details" className="theme-btn-2 mt-3">
                                        read More
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img loading="lazy" src="/assets/img/news/05.jpg" alt="news-img" />
                                    <div className="post-date">
                                        <h3>
                                            20 <br />
                                            <span>May</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <ul>
                                        <li>
                                            <i className="fa-regular fa-user" />
                                            By Admin
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-tag" />
                                            UI/UX Design
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/news-details">Unlocking Potential Through Technology</Link>
                                    </h3>
                                    <Link href="/news-details" className="theme-btn-2 mt-3">
                                        read More
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img loading="lazy" src="/assets/img/news/06.jpg" alt="news-img" />
                                    <div className="post-date">
                                        <h3>
                                            18 <br />
                                            <span>Mar</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <ul>
                                        <li>
                                            <i className="fa-regular fa-user" />
                                            By Admin
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-tag" />
                                            Cyber Security
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/news-details">Supervisor Disapproved of Latest Work.</Link>
                                    </h3>
                                    <Link href="/news-details" className="theme-btn-2 mt-3">
                                        read More
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
