'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
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

export default function Testimonial() {
    
    return (
        <>
        {/*Start Testimonials One*/}
        <section className="testimonials-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                        <div className="testimonials-one__img-box">
                            <img src="assets/img/testimonial/testimonials-one__img1.jpg" alt="#"/>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="testimonials-one__content-box">
                            <div className="sec-title sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Testimonial</h4>
                                </div>
                                <h2>See The Success Stories<br/>from My Clients</h2>
                            </div>

                            <div className="testimonials-one__inner">
                                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">

                                    <div className="swiper-wrapper">

                                        {/*Start Single Swiper Slide */}
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-box">
                                                <p>
                                                    “Regulatory requirements, long processes, outdated software, and
                                                    endless suppliers still create a lot of complexity in the midle
                                                    industry today. Our mission is to make of the
                                                    travel effortless.”
                                                </p>
                                            </div>
                                            <div className="athour-box">
                                                <h3>Alina Kolaminov</h3>
                                                <p>Marketing Agent</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        {/*End Single Swiper Slide */}
                                        {/*Start Single Swiper Slide */}
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-box">
                                                <p>
                                                    “Regulatory requirements, long processes, outdated software, and
                                                    endless suppliers still create a lot of complexity in the midle
                                                    industry today. Our mission is to make of the
                                                    travel effortless.”
                                                </p>
                                            </div>
                                            <div className="athour-box">
                                                <h3>Alina Kolaminov</h3>
                                                <p>Marketing Agent</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        {/*End Single Swiper Slide */}
                                        {/*Start Single Swiper Slide */}
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-box">
                                                <p>
                                                    “Regulatory requirements, long processes, outdated software, and
                                                    endless suppliers still create a lot of complexity in the midle
                                                    industry today. Our mission is to make of the
                                                    travel effortless.”
                                                </p>
                                            </div>
                                            <div className="athour-box">
                                                <h3>Alina Kolaminov</h3>
                                                <p>Marketing Agent</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        {/*End Single Swiper Slide */}


                                        {/*Start Single Swiper Slide */}
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-box">
                                                <p>
                                                    “Regulatory requirements, long processes, outdated software, and
                                                    endless suppliers still create a lot of complexity in the midle
                                                    industry today. Our mission is to make of the
                                                    travel effortless.”
                                                </p>
                                            </div>
                                            <div className="athour-box">
                                                <h3>Alina Kolaminov</h3>
                                                <p>Marketing Agent</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        {/*End Single Swiper Slide */}
                                        {/*Start Single Swiper Slide */}
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-box">
                                                <p>
                                                    “Regulatory requirements, long processes, outdated software, and
                                                    endless suppliers still create a lot of complexity in the midle
                                                    industry today. Our mission is to make of the
                                                    travel effortless.”
                                                </p>
                                            </div>
                                            <div className="athour-box">
                                                <h3>Alina Kolaminov</h3>
                                                <p>Marketing Agent</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        {/*End Single Swiper Slide */}
                                        {/*Start Single Swiper Slide */}
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-box">
                                                <p>
                                                    “Regulatory requirements, long processes, outdated software, and
                                                    endless suppliers still create a lot of complexity in the midle
                                                    industry today. Our mission is to make of the
                                                    travel effortless.”
                                                </p>
                                            </div>
                                            <div className="athour-box">
                                                <h3>Alina Kolaminov</h3>
                                                <p>Marketing Agent</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        {/*End Single Swiper Slide */}
                                    </div>

                                    {/* If we need navigation buttons */}
                                    <div className="swiper-nav-style2 testimonials-one__swiper-nav-style2">
                                        <div className="swiper-button-prev srp" id="testimonial-one__swiper-button-prev">
                                            <i className="icon-left-arrow right"></i>
                                        </div>
                                        <div className="swiper-button-next srn" id="testimonial-one__swiper-button-next">
                                            <i className="icon-right-arrow-angle left"></i>
                                        </div>
                                    </div>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Testimonials One*/}


        </>
    )
}
