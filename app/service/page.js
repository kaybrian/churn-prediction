'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }



}
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our services">
                <div>
                    {/*Start Service Three*/}
                    <section className="service-three service">
                        <div className="service-three__shape1 float-bob-x">
                            <img src="assets/img/shape/service-three__shape4.png" alt="shapes"/>
                        </div>
                        <div className="service-three__shape2">
                            <img src="assets/img/shape/service-three__shape2.png" alt="shapes"/>
                        </div>
                        <div className="service-three__shape3 float-bob-y">
                            <img src="assets/img/shape/service-three__shape5.png" alt="shapes"/>
                        </div>
                        <div className="container">
                            <div className="sec-title-three text-center sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Featured Services</h4>
                                </div>
                                <h2>
                                    What We Offer For You
                                </h2>
                            </div>
                            <div className="row">

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-design-strategy1">
                                                <span className="path1"></span><span className="path2"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="web-development">Design Strategy</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>All trials are our Pro planed by default you
                                                    can try out all the features available.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-web-development2"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span className="path4"></span><span
                                                    className="path5"></span><span className="path6"></span><span className="path7"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="web-development">Web Development</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>All trials are our Pro planed by default you
                                                    can try out all the features available.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-digital-marketing"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="web-development">Digital Marketing</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>All trials are our Pro planed by default you
                                                    can try out all the features available.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-email-marketing"><span className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="web-development">Email Marketing</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>All trials are our Pro planed by default you
                                                    can try out all the features available.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-product-development"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="web-development">Product Development</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>All trials are our Pro planed by default you
                                                    can try out all the features available.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}

                                {/*Start Single Service Three*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-three__single">
                                        <div className="service-three__single-icon">
                                            <span className="icon-business-strategy"></span>
                                        </div>
                                        <div className="service-three__single-content">
                                            <div className="title">
                                                <h3><Link href="web-development">Business Strategy</Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>All trials are our Pro planed by default you
                                                    can try out all the features available.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Service Three*/}
                            </div>
                        </div>
                    </section>
                    {/*End Service Three*/}

                    {/*Start Fact Counter One*/}
                    <section className="fact-counter-one about">
                        <div className="shape1"><img src="assets/img/shape/fact-counter-one-about-shape1.png" alt=""/></div>
                        <div className="shape2"><img src="assets/img/shape/fact-counter-one-about-shape2.png" alt=""/></div>
                        <div className="shape3"><img src="assets/img/shape/fact-counter-one-about-shape3.png" alt=""/></div>
                        <div className="shape4"><img src="assets/img/shape/fact-counter-one-about-shape4.png" alt=""/></div>
                        <div className="container">
                            <div className="row">
                                {/*Start Single Fact Counter*/}
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="single-fact-counter wow fadeInUp" data-wow-delay=".1s">
                                        <div className="single-fact-counter-inner">
                                            <div className="single-fact-counter-icon">
                                                <span className="icon-completed-projects"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span></span>
                                            </div>
                                            <div className="outer-box">
                                                <div className="count-outer count-box">
                                                <CounterUp end={484} />
                                                    <i className="icon-plus-symbol-button"></i>
                                                </div>
                                                <div className="title">
                                                    <p>Completed Projects</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Fact Counter*/}
                                {/*Start Single Fact Counter*/}
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="single-fact-counter wow fadeInUp" data-wow-delay=".2s">
                                        <div className="single-fact-counter-inner">
                                            <div className="single-fact-counter-icon">
                                                <span className="icon-happy-clients"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span></span>
                                            </div>
                                            <div className="outer-box">
                                                <div className="count-outer count-box">
                                                <CounterUp end={209} />
                                                    <i className="icon-plus-symbol-button"></i>
                                                </div>
                                                <div className="title">
                                                    <p>Happy Clients</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Fact Counter*/}
                                {/*Start Single Fact Counter*/}
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="single-fact-counter wow fadeInUp" data-wow-delay=".3s">
                                        <div className="single-fact-counter-inner">
                                            <div className="single-fact-counter-icon">
                                                <span className="icon-winning-award"></span>
                                            </div>
                                            <div className="outer-box">
                                                <div className="count-outer count-box">
                                                <CounterUp end={123} />
                                                    <i className="icon-plus-symbol-button"></i>
                                                </div>
                                                <div className="title">
                                                    <p>Winning Award</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Fact Counter*/}
                                {/*Start Single Fact Counter*/}
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="single-fact-counter wow fadeInUp" data-wow-delay=".4s">
                                        <div className="single-fact-counter-inner">
                                            <div className="single-fact-counter-icon">
                                                <span className="icon-cup-teas"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span></span>
                                            </div>
                                            <div className="outer-box">
                                                <div className="count-outer count-box">
                                                <CounterUp end={245} />
                                                    <i className="icon-plus-symbol-button"></i>
                                                </div>
                                                <div className="title">
                                                    <p>Cup of Teas</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Fact Counter*/}
                            </div>
                        </div>
                    </section>
                    {/*End Fact Counter One*/}


                    {/*Start Testmonials Three*/}
                    <section className="testimonials-three about">
                        <div className="testimonials-three__shape1 rotate-me">
                            <img src="assets/img/shape/testimonials-three__shape1.png" alt="shapes"/>
                        </div>
                        <div className="testimonials-three__shape2 rotate-me">
                            <img src="assets/img/shape/testimonials-three__shape2.png" alt="shapes"/>
                        </div>
                        <div className="testimonials-three__shape3 rotate-me">
                            <img src="assets/img/shape/testimonials-three__shape3.png" alt="shapes"/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="testimonials-three__img">
                                        <ul>
                                            <li className="wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                {/*Single About Two Img*/}
                                                <div className="single-testimonials-three__img-box">
                                                    <div className="inner">
                                                        <img src="assets/img/testimonial/testimonials-three__img1.jpg" alt="image"/>
                                                    </div>
                                                </div>
                                                {/*End About Two Img*/}
                                                {/*Single About Two Img*/}
                                                <div className="single-testimonials-three__img-box">
                                                    <div className="inner">
                                                        <img src="assets/img/testimonial/testimonials-three__img2.jpg" alt="image"/>
                                                    </div>
                                                </div>
                                                {/*End About Two Img*/}
                                            </li>
                                            <li className="wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                {/*Single About Two Img*/}
                                                <div className="single-testimonials-three__img-box">
                                                    <img src="assets/img/testimonial/testimonials-three__img3.jpg" alt="image"/>
                                                </div>
                                                {/*End About Two Img*/}
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-7">
                                    <div className="testimonials-three__content">
                                        <div className="sec-title-four sec-title-animation animation-style1">
                                            <div className="sub-title">
                                                <h4>Customers Feedback</h4>
                                            </div>
                                            <h2>
                                                What Says Our Client’s<br/>About Diligent
                                            </h2>
                                        </div>

                                        {/* If we need navigation buttons */}
                                        <div className="swiper-nav-style2 testimonials-three__swiper-nav-style">
                                            <div className="swiper-button-prev srp" id="testimonials-three__swiper-button-prev">
                                                <i className="icon-left-arrow right"></i>
                                            </div>
                                            <div className="swiper-button-next srn" id="testimonials-three__swiper-button-next">
                                                <i className="icon-right-arrow-angle left"></i>
                                            </div>
                                        </div>
                                        <div className="testimonials-three__content-inner">
                                            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">

                                                <div className="swiper-wrapper">
                                                    <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div className="icon-box">
                                                            <span className="icon-quote"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>
                                                                “ Concor delivers sectors concor delivers world className infrastructure
                                                                the is a world className infrastructure solutions across a broad
                                                                industry start and end of creativity to customers and the
                                                                stakeholders across the world broad ...”
                                                            </p>
                                                        </div>
                                                        <div className="athor-box">
                                                            <h3>Alina Kolaminov</h3>
                                                            <p>Marketing Agent</p>
                                                        </div>
                                                    </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div className="icon-box">
                                                            <span className="icon-quote"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>
                                                                “ Concor delivers sectors concor delivers world className infrastructure
                                                                the is a world className infrastructure solutions across a broad
                                                                industry start and end of creativity to customers and the
                                                                stakeholders across the world broad ...”
                                                            </p>
                                                        </div>
                                                        <div className="athor-box">
                                                            <h3>Alina Kolaminov</h3>
                                                            <p>Marketing Agent</p>
                                                        </div>
                                                    </div>
                                                    </SwiperSlide>
                                                </div>


                                            </Swiper>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*End Testmonials Three*/}
                </div>

            </Layout>
        </>
    )
}