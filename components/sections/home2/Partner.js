'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 10,
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
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }



}

 
export default function Partner() {
    return (
    <>
            
        {/*Start Partner Style2*/}
        <div className="partner-style2">
            <div className="container">
                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="img-box">
                                <img src="assets/img/brand/brand-v2-1.png" alt="#"/>
                            </div>

                            <div className="img-box2">
                                <img src="assets/img/brand/brand-v2-6.png" alt="#"/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="img-box">
                                <img src="assets/img/brand/brand-v2-2.png" alt="#"/>
                            </div>

                            <div className="img-box2">
                                <img src="assets/img/brand/brand-v2-7.png" alt="#"/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="img-box">
                                <img src="assets/img/brand/brand-v2-3.png" alt="#"/>
                            </div>

                            <div className="img-box2">
                                <img src="assets/img/brand/brand-v2-8.png" alt="#"/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="img-box">
                                <img src="assets/img/brand/brand-v2-4.png" alt="#"/>
                            </div>

                            <div className="img-box2">
                                <img src="assets/img/brand/brand-v2-9.png" alt="#"/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="img-box">
                                <img src="assets/img/brand/brand-v2-5.png" alt="#"/>
                            </div>

                            <div className="img-box2">
                                <img src="assets/img/brand/brand-v2-10.png" alt="#"/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="img-box">
                                <img src="assets/img/brand/brand-v2-1.png" alt="#"/>
                            </div>

                            <div className="img-box2">
                                <img src="assets/img/brand/brand-v2-6.png" alt="#"/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="img-box">
                                <img src="assets/img/brand/brand-v2-2.png" alt="#"/>
                            </div>

                            <div className="img-box2">
                                <img src="assets/img/brand/brand-v2-7.png" alt="#"/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="img-box">
                                <img src="assets/img/brand/brand-v2-3.png" alt="#"/>
                            </div>

                            <div className="img-box2">
                                <img src="assets/img/brand/brand-v2-8.png" alt="#"/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="img-box">
                                <img src="assets/img/brand/brand-v2-4.png" alt="#"/>
                            </div>

                            <div className="img-box2">
                                <img src="assets/img/brand/brand-v2-9.png" alt="#"/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="img-box">
                                <img src="assets/img/brand/brand-v2-5.png" alt="#"/>
                            </div>

                            <div className="img-box2">
                                <img src="assets/img/brand/brand-v2-10.png" alt="#"/>
                            </div>
                        </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
        {/*End Partner Style2*/}
        </>
    )
}
