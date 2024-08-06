'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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

export default function Testimonial() {
    
    return (
        <>
            
        {/*Start Testimonial Two*/}
        <section className="testimonials-two">
            <div className="testimonials-two__shape1">
                <img src="assets/img/shape/testimonials-two__shape1.png" alt="shape"/>
            </div>
            <div className="testimonials-two__shape2 rotate-me">
                <img src="assets/img/shape/testimonials-two__shape2.png" alt="shape"/>
            </div>
            <div className="testimonials-two__shape3">
                <img src="assets/img/shape/testimonials-two__shape3.png" alt="shape"/>
            </div>
            <div className="testimonials-two__shape4">
                <img src="assets/img/shape/testimonials-two__shape4.png" alt="shape"/>
            </div>
            <div className="testimonials-two__shape5">
                <img src="assets/img/shape/testimonials-two__shape5.png" alt="shape"/>
            </div>
            <div className="testimonials-two__shape6 float-bob-y">
                <img src="assets/img/shape/testimonials-two__shape6.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="testimonials-two__text text-center sec-title-animation animation-style1">
                    <h2>What Our Customers Says<br/>About Us</h2>
                </div>
                <div className="testimonials-two__inner">
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">

                        <div className="swiper-wrapper">

                            {/*Start Testimonial Two*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonials-two__single">
                                    <div className="athour-box">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-two__img1.jpg" alt="image"/>
                                        </div>
                                        <div className="title">
                                            <h3>Alane Smith</h3>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                    <div className="testimonials-two__single-content">
                                        <h3>“Outstanding Support Team”</h3>
                                        <p>
                                            Etiam non mattis turpisantum. Nuncagh sodales ante nisi, et semper sem to be
                                            pellentesque sed cras idnacum deloed aprin delrutta acina cuim.
                                        </p>
                                        <div className="reting-box">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*End Testimonial Two*/}

                            {/*Start Testimonial Two*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonials-two__single">
                                    <div className="athour-box">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-two__img2.jpg" alt="image"/>
                                        </div>
                                        <div className="title">
                                            <h3>Alina Kolaminov</h3>
                                            <p>Marketing Agent</p>
                                        </div>
                                    </div>
                                    <div className="testimonials-two__single-content">
                                        <h3>“Awesome Services”</h3>
                                        <p>
                                            Etiam non mattis turpisantum. Nuncagh sodales ante nisi, et semper sem to be
                                            pellentesque sed cras idnacum deloed aprin delrutta acina cuim.
                                        </p>
                                        <div className="reting-box">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*End Testimonial Two*/}

                            {/*Start Testimonial Two*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonials-two__single">
                                    <div className="athour-box">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-two__img3.jpg" alt="image"/>
                                        </div>
                                        <div className="title">
                                            <h3>Cavid Zeynal</h3>
                                            <p>UI/UX Designer</p>
                                        </div>
                                    </div>
                                    <div className="testimonials-two__single-content">
                                        <h3>“Very Professional Service”</h3>
                                        <p>
                                            Etiam non mattis turpisantum. Nuncagh sodales ante nisi, et semper sem to be
                                            pellentesque sed cras idnacum deloed aprin delrutta acina cuim.
                                        </p>
                                        <div className="reting-box">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*End Testimonial Two*/}
                            {/*Start Testimonial Two*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonials-two__single">
                                    <div className="athour-box">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-two__img3.jpg" alt="image"/>
                                        </div>
                                        <div className="title">
                                            <h3>Cavid Zeynal</h3>
                                            <p>UI/UX Designer</p>
                                        </div>
                                    </div>
                                    <div className="testimonials-two__single-content">
                                        <h3>“Very Professional Service”</h3>
                                        <p>
                                            Etiam non mattis turpisantum. Nuncagh sodales ante nisi, et semper sem to be
                                            pellentesque sed cras idnacum deloed aprin delrutta acina cuim.
                                        </p>
                                        <div className="reting-box">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*End Testimonial Two*/}
                        </div>
                    </Swiper>
                </div>
            </div>

            <div className="container">
                {/*Start Fact Two*/}
                <div className="fact-two">
                    <div className="row">
                        {/*Start Single Fact Two*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="fact-two__single text-center">
                                <div className="counter-box count-box">
                                    <h2> 40</h2>
                                    <i className="icon-plus-symbol-button"></i>
                                </div>
                                <div className="text-box">
                                    <p>Over the past 6 years, I’ve worked with<br/>more than 40 companies.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Fact Two*/}

                        {/*Start Single Fact Two*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="fact-two__single text-center">
                                <div className="counter-box count-box">
                                    <h2>5/5</h2>
                                </div>
                                <div className="text-box">
                                    <p>Clients have consistently rated us 5/5,<br/>except one Brett.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Fact Two*/}

                        {/*Start Single Fact Two*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="fact-two__single text-center">
                                <div className="counter-box count-box">
                                    <h2>3</h2>
                                    <span className="m">m</span>
                                    <i className="icon-plus-symbol-button"></i>
                                </div>
                                <div className="text-box">
                                    <p>We’ve driven over 3M conversions through<br/>content worldwide.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Fact Two*/}

                    </div>
                </div>
                {/*End Fact Two*/}
            </div>
        </section>
        {/*End Testimonial Two*/}


        </>
    )
}
