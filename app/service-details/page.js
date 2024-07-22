'use client'
import Layout from "@/components/layout/Layout"
import { useEffect, useState } from 'react';
import ProjectSlider1 from "@/components/slider/ProjectSlider1"
import Testimonial1 from "@/components/sections/Testimonial4"
import News1 from "@/components/sections/News5"
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Accordion1 from "@/components/elements/Accordion1"
import "/public/assets/css/service-details.css"
import Tabs from "@/components/sections/Tabs"
import ServiceDetailForm from "@/components/elements/ServiceDetailForm";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function ServiceDetails() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);

        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const expertiseItems = [
        {
            img: '/assets/img/section-3-icon-1.png',
            title: 'PHP E-Commerce Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
        {
            img: '/assets/img/section-3-icon-2.png',
            title: 'PHP Application Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
        {
            img: '/assets/img/section-3-icon-3.png',
            title: 'PHP Application Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
        {
            img: '/assets/img/section-3-icon-4.png',
            title: 'PHP Migration Services',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
        {
            img: '/assets/img/section-3-icon-5.png',
            title: 'PHP Database Integration',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
        {
            img: '/assets/img/section-3-icon-6.png',
            title: 'Full Stack PHP Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
    ];
    const [activeItem, setActiveItem] = useState(1)

    const handleClick = (index) => {
        setActiveItem(index)
    }

    return (
        <>


            <Layout headerStyle={1} footerStyle={5}>
                <section className="service-detail-wrapper">
                    <div className="bg-1">
                        <h2>PHP</h2>
                    </div>
                    {/* <div className="bg-4">
                        <img loading="lazy" src="/assets/img/aiz-logo.png" alt="image" />
                    </div> */}
                    <div className="container">
                        <div className="service-detail-wrapper-main">
                            <div className="service-detail-wrapper-contant">
                                <h1>PHP Development</h1>
                                <p>AIZ Infotechs Provides Expert PHP Development Services That Help You Leverage The Optimum Benefit
                                    Of PHP Web Development In Achieving Enterprise-Level Goals. We Come Second To None When It Comes
                                    To Delivering Highly Functional PHP Solutions Like PHP Application Development, PHP CMS
                                    Development, And More.
                                    PHP Is Not A New Technology; It Has Many Versions And Has Seen A Lot Of Changes Since Its
                                    Introduction. We Have A Team Of Experienced PHP Developers Who Are Enthusiastic About PHP And
                                    Have In-Depth Knowledge Of All Its Versions. Our Team Members Have Extensive Work Experience And
                                    Have Been Satisfying Clients By Creating Unique PHP Solutions Addressing Their Requirements.
                                </p>
                            </div>
                            {isMobile ? (
                                <ServiceDetailForm />
                            ) : (

                                <div className="service-detail-wrapper-form">
                                    <h2 className="mb-3"> Let’s <span>Connect</span> With Us</h2>
                                    <form action="#" className="row gap-3 mx-0">
                                        <input type="text" placeholder="Full Name" className="col-12 cst-input" />
                                        <input type="email" placeholder="Email" className="col-12 cst-input" />
                                        <input type="text" placeholder="Services" className="col-12 cst-input" />
                                        <textarea placeholder="Description" className="col-12 cst-input"></textarea>
                                        <Link href="#">Submit</Link>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="expertise-section">
                    <div className="container">
                        <h2 className="text-center">We Have Expertise In</h2>
                        {isMobile ? (
                            <div>
                                <Swiper
                                    spaceBetween={16}
                                    slidesPerView={isMobile ? 1 : 3} // Example to change slidesPerView based on screen size
                                    navigation={{ nextEl: ".array-next", prevEl: ".array-prev" }}
                                    modules={[Navigation, Autoplay]}
                                    autoplay={{
                                        delay: 3000, // Delay between transitions in milliseconds (3000ms = 3 seconds)
                                        disableOnInteraction: false, // Continue autoplay after user interactions (e.g., swiping)
                                    }}
                                >
                                    {expertiseItems.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="expertise-div active">
                                                <div className="expertise-icon-div">
                                                    <img loading="lazy" src={item.img} alt="image" style={{ width: 'auto', height: 'auto' }} />
                                                </div>
                                                <div>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                          
                            </div>
                        ) : (
                            <div className="row">
                                {expertiseItems.map((item, index) => (
                                    <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                        <div className="expertise-div active">
                                            <div className="expertise-icon-div">
                                                <img loading="lazy" src={item.img} alt="image" style={{ width: 'auto', height: 'auto' }} />
                                            </div>
                                            <div>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                <section className="choose-us-section fix section-padding">
                    <div className="choose-shape d-none d-xl-block">
                        <img loading="lazy" src="/assets/img/choose/shape-2.png" alt="shape-img" />
                    </div>
                    <div className="bottom-shape">
                        <img loading="lazy" src="/assets/img/choose/bottom-shape.png" alt="shape-img" />
                    </div>
                    <div className="arrow-shape-1 bounce-x d-none d-lg-block">
                        <img loading="lazy" src="/assets/img/choose/arrow-shape-1.png" alt="shape-img" />
                    </div>
                    <div className="line-shape">
                        <img loading="lazy" src="/assets/img/choose/line-shape.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="choose-us-wrapper">
                            <div className="row">
                                <div className="col-lg-6 d-none d-xl-block">
                                    <div className="choose-us-image wow fadeInUp" data-wow-delay=".4s">
                                        <img loading="lazy" src="/assets/img/choose/01.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-4 mt-lg-0">
                                    <div className="choose-content">
                                        <div className="section-title">
                                            <span className="wow fadeInUp text-center text-xl-start d-block">WHY CHOOSE US</span>
                                            <h2 className="wow fadeInUp text-center text-xl-start" data-wow-delay=".3s">
                                                We Prominent Truly Trusted <br />
                                                IT Business Solutions
                                            </h2>
                                        </div>
                                        <p className="mt-3 mt-md-0 wow fadeInUp  text-xl-start" data-wow-delay=".5s">
                                            AIZ Infotechs Is One Of The Leading PHP Development Company India That Provides Myriad
                                            PHP Development Services, From Simple PHP Web Development To Complex PHP Database
                                            Integration. We Have A Dedicated PHP Development Team That Continuously Sharpens Its PHP
                                            Development Skills And Learns New Technologies To Help Organisations Take Optimum
                                            Benefit Of Customised PHP Solutions Specially Curated For Their Businesses.

                                            Our Adept PHP Development Team Doesn’t Settle For Anything Less Than A Robust PHP
                                            Solution That Strengthens Your Organisation And Helps In Achieving Enterprise-Level
                                            Goals.

                                            There Are Many Instances Where Clients Feel Abandoned By The PHP Development Company
                                            India Partner After The Final Development. They Don’t Take Any Guarantee Or Provide
                                            Maintenance-Related Services, Whereas Our Company’s Policy Is Reciprocal To It, We Offer
                                            On-Demand Support To Our Clients, Irrespective Of Their Project’s Size, Whether Small Or
                                            Big.

                                            You Will Find Our PHP Solution Department Friendly, Supportive, And Available For You
                                            Whenever You Are In Need.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service-section fix section-padding bg-cover" id="service">
                    <div className="container">
                        <div className="section-title-area">
                            <div className="section-title">
                                <span className="wow fadeInUp">Hiring Models</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We Solve IT Problems <br /> With Technology
                                </h2>
                            </div>
                            <div className="d-none d-lg-block">
                                <div className="array-button">
                                    <button className="array-prev"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg></button>
                                    <button className="array-next"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z" /></svg></button>
                                </div>
                            </div>
                        </div>
                        <div className="service-wrapper mb-0">
                            <div className="swiper service-slider">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="service-box-items">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        Database Security
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-box-items">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        IT Consultancy
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-box-items">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        Cyber Security
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-box-items">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        App Development
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="d-none mt-4">
                                <div className="array-button justify-content-center">
                                    <button className="array-prev"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z" /></svg></button>
                                    <button className="array-next"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cta-banner-2 pt-5 mt-sm-2">
                        <div className="container">
                            <div className="cta-wrapper-2">
                                <div className="author-icon">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={'17px'} width={"17px"}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
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
                                <a class="theme-btn" href="/contact"><span>Get A Quote<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="17px" width="17px"><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path></svg></span></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="work-process-section fix section-padding pt-0 d-none d-md-block">
                    <div className="container">
                        <div className="section-title text-center">
                            <span>How IT work</span>
                            <h2>Standard Work Process</h2>
                        </div>
                        <div className="process-work-wrapper">
                            <div className="line-shape">
                                <img loading="lazy" src="/assets/img/process/linepng.png" alt="image" />
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="work-process-items text-center">
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/process/01.svg" alt="img" />
                                            <h3 className="number">
                                                1
                                            </h3>
                                        </div>
                                        <div className="content">
                                            <h4>Choose A Service</h4>
                                            <p>
                                                In a free hour, when our power of choice is untrammeled and
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="work-process-items text-center">
                                        <div className="content style-2">
                                            <h4>Define Requirements</h4>
                                            <p>
                                                In a free hour, when our power of choice is untrammeled and
                                            </p>
                                        </div>
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/process/02.svg" alt="img" />
                                            <h5 className="number">
                                                2
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="work-process-items text-center">
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/process/03.svg" alt="img" />
                                            <h3 className="number">
                                                3
                                            </h3>
                                        </div>
                                        <div className="content">
                                            <h4>Request A Meeting</h4>
                                            <p>
                                                In a free hour, when our power of choice is untrammeled and
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="work-process-items text-center">
                                        <div className="content style-2">
                                            <h4>Finial Solutio3</h4>
                                            <p>
                                                In a free hour, when our power of choice is untrammeled and
                                            </p>
                                        </div>
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/process/04.svg" alt="img" />
                                            <h5 className="number">
                                                4
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-section-3 fix section-padding section-bg">
                    <div className="line-shape d-none d-md-block">
                        <img loading="lazy" src="/assets/img/team/line-shape.png" alt="shape-img" />
                    </div>
                    <div className="mask-shape">
                        <img loading="lazy" src="/assets/img/team/mask-shape-2.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="section-title-area">
                            <div className="section-title">
                                <span className="wow fadeInUp">What We Do</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We Solve IT Problems <br /> With Technology
                                </h2>
                            </div>
                            <Link href="service.html" className="theme-btn wow fadeInUp d-none d-block" data-wow-delay=".5s">
                                See all Services
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                            </Link>
                        </div>
                        <div className="swiper service-slider-2">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-card-items mt-0">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items mt-0">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items mt-0">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items mt-0">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items mt-0">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>

                <section className="technology-section">
                    <h2>Technology Stack</h2>
                    <Tabs />
                </section>

                <section className="project-section fix section-padding pt-0 mt-4">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="wow fadeInUp"> Our Projects</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Latest showcase and solutions <br /> to our customers
                            </h2>
                        </div>
                    </div>

                    <ProjectSlider1 />

                </section>

                <Testimonial1 />

                <News1 />

                <section className="faq-section fix section-padding">
                    <div className="right-shape">
                        <img loading="lazy" src="/assets/img/faq/right-shape.png" alt="shape-img" />
                    </div>
                    <div className="faq-shape-box">
                        <div className="faq-shape">
                            <img loading="lazy" src="/assets/img/faq/shape.png" alt="shape-img" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="faq-wrapper">
                            <div className="row g-4">
                                <div className="col-lg-6 wow fadeInUp d-none d-lg-block" data-wow-delay=".4s">
                                    <div className="faq-image">
                                        <img loading="lazy" src="/assets/img/faq/faq.png" alt="faq-img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-content">
                                        <div className="section-title">
                                            <span className="wow fadeInUp">See Our Faqs</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                Keep Your Business Safe &amp; <br /> Ensure High Availability
                                            </h2>
                                        </div>
                                        <div className="faq-accordion mt-4 mt-md-0">
                                            <Accordion1 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-us-section d-none d-md-block">
                    <div className="container">
                        <div className="form-div-main row m-0">
                            <div className="form-div-icon d-none d-lg-block col-lg-5 col-xl-4">
                                <ul>
                                    <li><Link href="instagram.com/aizinfotechs"><img loading="lazy" src="/assets/img/instagram-icon.png" alt="image" /></Link>
                                        <Link href="instagram.com/aizinfotechs">instagram.com/aizinfotechs</Link>
                                    </li>
                                    <li><Link href="https://www.facebook.com/aizinfotech"><img loading="lazy" src="/assets/img/Facebook-icon.png" alt="image" /></Link>
                                        <Link href="https://www.facebook.com/aizinfotech">https://www.facebook.com/aizinfotech</Link>
                                    </li>
                                    <li><Link href="https://x.com/aizinfotechs"><img loading="lazy" src="/assets/img/Twitter-icon.png" alt="image" /></Link>
                                        <Link href="https://x.com/aizinfotechs">https://x.com/aizinfotechs</Link>
                                    </li>
                                    <li><Link href="https://api.whatsapp.com/send?phone=917874278859"><img loading="lazy" src="/assets/img/WhatsApp-icon.png" alt="image" /></Link>
                                        <Link href="https://api.whatsapp.com/send?phone=917874278859">WhatsApp</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="vr d-none d-lg-block">
                            </div>
                            <div className="Connect-div col">
                                <h3>Let’s <span>Connect</span> With Us</h3>
                                <form action="#">
                                    <input type="text" placeholder="Full Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="text" placeholder="Services" />
                                    <textarea rows="1" cols="50" placeholder="Description"></textarea>
                                </form>
                                <Link href="">Submit</Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}