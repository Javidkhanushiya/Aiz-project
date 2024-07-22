
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function Hero4() {
    return (
        <>
            <section className="hero-section hero-4 bg-cover" style={{ backgroundImage: 'url("/assets/img/section-bg.jpg")' }}>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h6 className="wow fadeInUp">Applying Data security</h6>
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">Security Analytics For Big Data.</h1>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    Consectetur adipiscing elit aenean scelerisque at augue vitae consequat quisque eget congue velit in cursus leo sed sodales est eget turpis.
                                </p>
                                <div className="hero-button">
                                    <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".7s">
                                        Explore More
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                    </Link>
                                    <VideoPopup style={3}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="hero-image">
                                <img loading="lazy" src="/assets/img/hero/hero-4.png" alt="hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
