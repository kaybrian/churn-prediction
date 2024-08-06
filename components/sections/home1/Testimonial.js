'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";


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
        nextEl: '.h1n',
        prevEl: '.h1p',
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
            {/*Start Testmonials Three*/}
            <section className="testimonials-three">
                <div className="testimonials-three__shape1 rotate-me">
                    <img src="assets/img/shape/testimonials-three__shape1.png" alt="shapes" />
                </div>
                <div className="testimonials-three__shape2 rotate-me">
                    <img src="assets/img/shape/testimonials-three__shape2.png" alt="shapes" />
                </div>
                <div className="testimonials-three__shape3 rotate-me">
                    <img src="assets/img/shape/testimonials-three__shape3.png" alt="shapes" />
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
                                            <Image
                                            src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="image"
                                            width={150}
                                            height={150}
                                            layout="responsive"
                                        />
                                            </div>
                                        </div>
                                        {/*End About Two Img*/}

                                    </li>
                                    <li className="wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        {/*Single About Two Img*/}
                                        <div className="single-testimonials-three__img-box">
                                        <Image
                                            src="https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="image"
                                            width={290}
                                            height={500}
                                            layout="responsive"
                                        />
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
                                        <h4>Why us ?</h4>
                                    </div>
                                    <h2>
                                        Why Choose BankCustomerChurnPredictor?

                                    </h2>
                                </div>

                                {/* If we need navigation buttons */}
                                <div className="swiper-nav-style2 testimonials-three__swiper-nav-style">
                                    <div className="swiper-button-prev h1p" id="testimonials-three__swiper-button-prev">
                                        <i className="icon-left-arrow right"></i>
                                    </div>
                                    <div className="swiper-button-next h1n" id="testimonials-three__swiper-button-next">
                                        <i className="icon-right-arrow-angle left"></i>
                                    </div>
                                </div>
                                <div className="testimonials-three__content-inner mb-4 pb-4">
                                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">

                                        <div className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="icon-box">
                                                        <span className="icon-quote"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            Choose BankCustomerChurnPredictor for its proven accuracy, backed by training on extensive banking datasets, ensuring high-quality predictions. Our solution is fully customizable, allowing you to tailor the model to your specific customer base and business needs. We prioritize data security and comply with financial industry regulations, giving you peace of mind. Moreover, our dedicated team of data scientists continuously improves the model, ensuring its effectiveness stays ahead of evolving market trends and customer behaviors.

                                                        </p>
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

        </>
    )
}
