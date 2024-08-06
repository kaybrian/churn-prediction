
'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import Image from "next/image";


export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {/*Start Banner Two*/}
        <section className="banner-three">
            <div className="banner-three__shape1 float-bob-x">
                <img src="assets/img/shape/banner-three__shape1.png" alt="shapes"/>
            </div>
            <div className="banner-three__shape2">
                <img src="assets/img/shape/banner-three__shape2.png" alt="shapes"/>
            </div>
            <div className="banner-three__shape3">
                <img src="assets/img/shape/banner-three__shape3.png" alt="shapes"/>
            </div>
            <div className="banner-three__shape4 float-bob-y">
                <img src="assets/img/shape/banner-three__shape4.png" alt="shapes"/>
            </div>
            <div className="banner-three__shape5">
                <img src="assets/img/shape/banner-three__shape5.png" alt="shapes"/>
            </div>
            <div className="banner-three__shape6 float-bob-y">
                <img src="assets/img/shape/banner-three__shape6.png" alt="shapes"/>
            </div>
            <div className="container">
                <div className="banner-three__content">

                    <div className="banner-three__content-inner">
                        <div className="sec-title-four sec-title-animation animation-style1">
                            <div className="sub-title">
                                <h4>Welcome To Diligent</h4>
                            </div>
                            <h2>
                            customer Churn Prediction
                            </h2>
                        </div>
                        <div className="text">
                            <p>
                            BankCustomerChurnPredictor is an advanced machine learning solution designed to help banks and financial institutions proactively identify and retain at-risk customers.


                            </p>
                        </div>
                        <div className="btn-box">
                            <Link className="thm-btn" href="/about">
                                <span className="txt">
                                    Get Started
                                    <i className="icon-next"></i>
                                </span>
                            </Link>
                            <div className="video-gallery">
                                <div className="icon wow zoomIn animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <a className="video-popup" title="Video Gallery"
                                        onClick={() => setOpen(true)}>
                                        <span className="icon-play"></span>
                                    </a>
                                </div>
                                <div className="text2">
                                    <p>Watch Our</p>
                                    <p>Demo Video</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner-three__img">
                        <ul>
                            <li>
                                <div className="banner-three__img-single">
                                    <div className="inner">
                                        <Image
                                            src="https://images.unsplash.com/photo-1521511189395-b82252213754?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="image"
                                            width={600}
                                            height={400}
                                            layout="responsive"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="banner-three__img-single instyle--2">
                                    <div className="inner">
                                    <Image
                                            src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="image"
                                            width={600}
                                            height={400}
                                            layout="responsive"
                                        />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        {/*End Banner Two*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />

        </>
    )
}
