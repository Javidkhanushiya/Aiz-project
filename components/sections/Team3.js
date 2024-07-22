
import Link from 'next/link'

export default function Team3() {
    return (
        <>
            <section className="team-section-3 fix section-padding section-bg" id="team">
                <div className="line-shape">
                    <img loading="lazy" src="/assets/img/team/line-shape.png" alt="shape-img" />
                </div>
                <div className="mask-shape">
                    <img loading="lazy" src="/assets/img/team/mask-shape-2.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Team Members</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Our Dedicated Team <br /> Members
                            </h2>
                        </div>
                        <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                            All Member
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-team-items">
                                <div className="team-image">
                                    <img loading="lazy" src="/assets/img/team/04.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Marvin McKinney</Link>
                                    </h3>
                                    <p>Web Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-team-items">
                                <div className="team-image">
                                    <img loading="lazy" src="/assets/img/team/05.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Marvin McKinney</Link>
                                    </h3>
                                    <p>Web Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="single-team-items">
                                <div className="team-image">
                                    <img loading="lazy" src="/assets/img/team/06.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Marvin McKinney</Link>
                                    </h3>
                                    <p>Web Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                            <div className="single-team-items">
                                <div className="team-image">
                                    <img loading="lazy" src="/assets/img/team/07.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Marvin McKinney</Link>
                                    </h3>
                                    <p>Web Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
