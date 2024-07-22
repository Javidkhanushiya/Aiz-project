
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function Hero1() {
    return (
        <>
            <section className="hero-section fix hero-1 bg-cover" style={{ backgroundImage: 'url("assets/img/hero/hero-bg.jpg")' }}>
                <div className="text-transparent">
                    <h2>Technology</h2>
                </div>
                <div className="line-shape">
                    <img loading="lazy" src="/assets/img/hero/line-shape.png" alt="shape-img" />
                </div>
                <div className="dot-shape">
                    <img loading="lazy" src="/assets/img/hero/dot-shape.png" alt="shape-img" />
                </div>
                <div className="frame-shape">
                    <img loading="lazy" src="/assets/img/hero/frame.png" alt="shape-img" />
                </div>
                <div className="mask-shape wow fadeInRight" data-wow-delay=".7s">
                    <img loading="lazy" src="/assets/img/hero/mask-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-8">
                            <div className="hero-content">
                                <h6 className="wow fadeInUp" data-wow-delay=".2s">Best it SOULTION Provider</h6>
                                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                                    Excellent It Services
                                    for Your Success
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    Consectetur adipiscing elit aenean scelerisque at augue vitae consequat <br /> quisque eget congue velit in cursus leo sed sodales est eget turpis.
                                </p>
                                <div className="hero-button">
                                    <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                        Explore More
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                    </Link>
                                    <VideoPopup style={3} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hero-image wow fadeInUp" data-wow-delay=".4s">
                                <img loading="lazy" src="/assets/img/hero/hero.png" alt="hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
