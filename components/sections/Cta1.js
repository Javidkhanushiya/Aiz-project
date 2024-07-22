
import Link from 'next/link'

export default function Cta1() {
    return (
        <>
            <section className="cta-section">
                <div className="container">
                    <div className="cta-wrapper">
                        <div className="mask-shape">
                            <img loading="lazy" src="/assets/img/cta-mask.png" alt="shape-img" />
                        </div>
                        <div className="circle-shape">
                            <img loading="lazy" src="/assets/img/circle.png" alt="shape-img" />
                        </div>
                        <div className="cta-image wow fadeInUp" data-wow-delay=".3s">
                            <img loading="lazy" src="/assets/img/cta.png" alt="cta-img" />
                        </div>
                        <div className="cta-items">
                            <h3 className="wow fadeInUp" data-wow-delay=".5s">Stay Connected With <br /> Cutting Edge IT</h3>
                            <Link href="/contact" className="theme-btn bg-white wow fadeInUp" data-wow-delay=".7s">
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
