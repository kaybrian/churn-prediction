'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }



}

export default function Cases() {
    return (
        <>
        {/*Start Cases One*/}
        <section className="cases-one">
            <div className="cases-one__shape1">
                <img src="assets/img/shape/cases-one__shape1.png" alt="shape"/>
            </div>
            <div className="cases-one__shape2">
                <img src="assets/img/shape/cases-one__shape2.png" alt="shape"/>
            </div>
            <div className="cases-one__shape3">
                <img src="assets/img/shape/cases-one__shape3.png" alt="shape"/>
            </div>
            <div className="cases-one__shape4">
                <img src="assets/img/shape/cases-one__shape4.png" alt="shape"/>
            </div>
            <div className="cases-one__shape5 rotate-me">
                <img src="assets/img/shape/cases-one__shape5.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="cases-one__top sec-title-animation animation-style1">
                    <div className="inner-title">
                        <h2>Some Of Our Recent<br/>Cases Studies</h2>
                    </div>

                    <div className="swiper-nav-style2">
                        <div className="swiper-button-prev srp" id="testimonials-three__swiper-button-prev">
                            <i className="icon-prev right"></i>
                        </div>
                        <div className="swiper-button-next srn" id="testimonials-three__swiper-button-next">
                            <i className="icon-next left"></i>
                        </div>
                    </div>

                </div>
                <div className="cases-one__inner">

                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">

                        <div className="swiper-wrapper">
                            {/*Start Single Cases One*/}
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="single-cases-one">
                                        <div className="single-cases-one__img">
                                            <img src="assets/img/resource/cases-one__img1.jpg" alt="cases"/>
                                            <div className="overlay-content text-center">
                                                <h3><Link href="#">Website Design</Link></h3>
                                                <p>We’re a team of hard-core nerds & we’re bringing more
                                                    of you that you marketing business advantage.</p>
                                                <div className="overlay-one-btn">
                                                    <Link href="#"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/*End Single Cases One*/}

                            {/*Start Single Cases One*/}
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="single-cases-one">
                                        <div className="single-cases-one__img">
                                            <img src="assets/img/resource/cases-one__img2.jpg" alt="cases"/>
                                            <div className="overlay-content text-center">
                                                <h3><Link href="#">Website Design</Link></h3>
                                                <p>We’re a team of hard-core nerds & we’re bringing more
                                                    of you that you marketing business advantage.</p>
                                                <div className="overlay-one-btn">
                                                    <Link href="#"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/*End Single Cases One*/}

                            {/*Start Single Cases One*/}
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="single-cases-one">
                                        <div className="single-cases-one__img">
                                            <img src="assets/img/resource/cases-one__img3.jpg" alt="cases"/>
                                            <div className="overlay-content text-center">
                                                <h3><Link href="#">Website Design</Link></h3>
                                                <p>We’re a team of hard-core nerds & we’re bringing more
                                                    of you that you marketing business advantage.</p>
                                                <div className="overlay-one-btn">
                                                    <Link href="#"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/*Start Single Cases One*/}
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="single-cases-one">
                                        <div className="single-cases-one__img">
                                            <img src="assets/img/resource/cases-one__img1.jpg" alt="cases"/>
                                            <div className="overlay-content text-center">
                                                <h3><Link href="#">Website Design</Link></h3>
                                                <p>We’re a team of hard-core nerds & we’re bringing more
                                                    of you that you marketing business advantage.</p>
                                                <div className="overlay-one-btn">
                                                    <Link href="#"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/*End Single Cases One*/}

                            {/*Start Single Cases One*/}
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="single-cases-one">
                                        <div className="single-cases-one__img">
                                            <img src="assets/img/resource/cases-one__img2.jpg" alt="cases"/>
                                            <div className="overlay-content text-center">
                                                <h3><Link href="#">Website Design</Link></h3>
                                                <p>We’re a team of hard-core nerds & we’re bringing more
                                                    of you that you marketing business advantage.</p>
                                                <div className="overlay-one-btn">
                                                    <Link href="#"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/*End Single Cases One*/}

                            {/*Start Single Cases One*/}
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="single-cases-one">
                                        <div className="single-cases-one__img">
                                            <img src="assets/img/resource/cases-one__img3.jpg" alt="cases"/>
                                            <div className="overlay-content text-center">
                                                <h3><Link href="#">Website Design</Link></h3>
                                                <p>We’re a team of hard-core nerds & we’re bringing more
                                                    of you that you marketing business advantage.</p>
                                                <div className="overlay-one-btn">
                                                    <Link href="#"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/*End Single Cases One*/}
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
        {/*End Cases One*/}
        </>
    )
}
