'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 1,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}


export default function Testimonial2() {
    return (
        <>
            <section className="tesimonial-section-2 pb-0 section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/bg.jpg")' }}>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="text-white wow fadeInUp">Testimonials</span>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                We Prominent Truly Trusted <br />
                                IT Business Solutions
                            </h2>
                        </div>
                        <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                            <button className="array-prev border-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg></button>
                            <button className="array-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z"/></svg></button>
                        </div>
                    </div>
                    <div className="swiper testimonial-slider-2">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img loading="lazy" src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/02.jpg")' }} />
                                        <div className="client-content">
                                            <h4>Kathryn Murphy</h4>
                                            <p>Web Designer</p>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img loading="lazy" src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/03.jpg")' }} />
                                        <div className="client-content">
                                            <h4>Albert Flores</h4>
                                            <p>Medical Assistant</p>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star color-text" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img loading="lazy" src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/02.jpg")' }} />
                                        <div className="client-content">
                                            <h4>Kathryn Murphy</h4>
                                            <p>Web Designer</p>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img loading="lazy" src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/03.jpg")' }} />
                                        <div className="client-content">
                                            <h4>Albert Flores</h4>
                                            <p>Medical Assistant</p>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star color-text" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
