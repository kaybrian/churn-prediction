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



}

export default function Service() {
    return (
        <>
        {/*Start Service Three*/}
        <section className="service-three">
            <div className="service-three__shape1 float-bob-x">
                <img src="assets/img/shape/service-three__shape1.png" alt="shapes"/>
            </div>
            <div className="service-three__shape2">
                <img src="assets/img/shape/service-three__shape2.png" alt="shapes"/>
            </div>
            <div className="service-three__shape3 float-bob-y">
                <img src="assets/img/shape/service-three__shape3.png" alt="shapes"/>
            </div>
            <div className="container">
                <div className="sec-title-three text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Key Features</h4>
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
                                    <h3><Link href="web-development">Accurate Predictions</Link></h3>
                                </div>
                                <div className="text">
                                    <p>Leverage the power of machine learning to predict customer churn with high accuracy.</p>
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
                                    <h3><Link href="web-development">Comprehensive Analysis</Link></h3>
                                </div>
                                <div className="text">
                                    <p>Utilize a wide range of customer data points to gain deep insights into churn factors.</p>
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
                                    <h3><Link href="web-development">Data-Driven Decision Making</Link></h3>
                                </div>
                                <div className="text">
                                    <p>Empower your retention strategies with actionable intelligence.</p>
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
                                    <h3><Link href="web-development">Easy Integration</Link></h3>
                                </div>
                                <div className="text">
                                    <p>Seamlessly incorporate our predictions into your existing CRM and customer service workflows.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Three*/}
                </div>
            </div>
        </section>
        {/*End Service Three*/}
        </>
    )
}
