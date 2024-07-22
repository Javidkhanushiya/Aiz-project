'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}

export default function News3() {
    return (
        <>
            <section className="news-section-3 fix section-padding" id="blog">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Latest Blog</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Checkout Our Latest <br /> News &amp; Articles
                            </h2>
                        </div>
                        <div className="d-none d-lg-block">
                        <div className="array-button">
                            <button className="array-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg></button>
                            <button className="array-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z"/></svg></button>
                        </div>
                    </div>
                    </div>
                    <div className="swiper news-slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="news-card-items style-2">
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="news-card-items style-2">
                                    <div className="news-image">
                                        <img loading="lazy" src="/assets/img/news/07.jpg" alt="news-img" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="news-card-items style-2">
                                    <div className="news-image">
                                        <img loading="lazy" src="/assets/img/news/08.jpg" alt="news-img" />
                                        <div className="post-date">
                                            <h3>
                                                10 <br />
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="news-card-items style-2">
                                    <div className="news-image">
                                        <img loading="lazy" src="/assets/img/news/08.jpg" alt="news-img" />
                                        <div className="post-date">
                                            <h3>
                                                10 <br />
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
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="d-block d-lg-none mt-4">
                        <div className="array-button justify-content-center">
                            <button className="array-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z"/></svg></button>
                            <button className="array-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
