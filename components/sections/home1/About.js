'use client'
import Link from "next/link"
import { useState } from 'react'
import CounterUp from "@/components/elements/CounterUp"
import Image from "next/image";

export default function About() {
    return (
        <>
            {/*Start About Three*/}
            <section className="about-three">
                <div className="about-three__shape1 float-bob-y">
                    <img src="assets/img/shape/about-three__shape1.png" alt="shapes" />
                </div>
                <div className="about-three__shape2">
                    <img src="assets/img/shape/about-three__shape2.png" alt="shapes" />
                </div>
                <div className="about-three__shape3">
                    <img src="assets/img/shape/about-three__shape3.png" alt="shapes" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-three__content">
                                <div className="sec-title-four sec-title-animation animation-style1">
                                    <div className="sub-title">
                                        <h4>How It Works</h4>
                                    </div>
                                    <h2>
                                        We Are The Best Digital Agencies In The City
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>
                                        From Data to Insight in Four Simple Steps
                                    </p>
                                </div>
                                <div className="about-three__fact-box">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="about-three__fact-single">
                                                <div className="count-outer count-box">
                                                    <CounterUp end={12} />
                                                    <i className="icon-plus-symbol-button"></i>
                                                </div>
                                                <div className="title">
                                                    <h3>Data Input</h3>
                                                </div>
                                                <div className="text">
                                                    <p>Our model analyzes 12 key customer attributes, including credit score, account balance, and product usage.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="about-three__fact-single">
                                                <div className="count-outer count-box">
                                                    <CounterUp end={89} />
                                                    <i className="icon-percentage"></i>
                                                </div>
                                                <div className="title">
                                                    <h3>Advanced Processing</h3>
                                                </div>
                                                <div className="text">
                                                    <p>State-of-the-art machine learning algorithms process and learn from your historical customer data.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="about-three__fact-single">
                                                <div className="count-outer count-box">
                                                    <CounterUp end={89} />
                                                    <i className="icon-percentage"></i>
                                                </div>
                                                <div className="title">
                                                    <h3>Churn Prediction</h3>
                                                </div>
                                                <div className="text">
                                                    <p>Receive accurate predictions on which customers are at risk of leaving.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 mt-2 col-md-6">
                                            <div className="about-three__fact-single">
                                                <div className="count-outer count-box">
                                                    <CounterUp end={89} />
                                                    <i className="icon-percentage"></i>
                                                </div>
                                                <div className="title">
                                                    <h3>Actionable Insights</h3>
                                                </div>
                                                <div className="text">
                                                    <p>Get detailed reports on factors contributing to churn, enabling targeted retention efforts.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-three__img-box">
                                <ul>
                                    <li className="wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        {/*Single About Three Img*/}
                                        <div className="single-about-three__img-box">
                                            <Image
                                                src="https://images.unsplash.com/photo-1508243529287-e21914733111?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="image"
                                                width={290}
                                                height={290}
                                                layout="responsive"
                                            />
                                        </div>
                                        {/*End About Three Img*/}
                                    </li>

                                    <li className="wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        {/*Single About Three Img*/}
                                        <div className="single-about-three__img-box">
                                            <Image
                                                src="https://images.unsplash.com/photo-1492462543947-040389c4a66c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="image"
                                                width={600}
                                                height={400}
                                                layout="responsive"
                                            />
                                        </div>
                                        {/*End About Three Img*/}
                                    </li>
                                </ul>

                                <div className="about-three__img-box-bottom wow fadeInLeft" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    {/*Single About Three Img*/}
                                    <div className="single-about-three__img-box">
                                        <Image
                                            src="https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="image"
                                            width={600}
                                            height={400}
                                            layout="responsive"
                                        />
                                    </div>
                                    {/*End About Three Img*/}
                                </div>

                                <div className="overlay-box text-center">
                                    <div className="outer-box">
                                        <div className="count-outer count-box">
                                            <CounterUp end={5} />
                                            <i className="icon-plus-symbol-button"></i>
                                        </div>
                                        <div className="title">
                                            <p>Years Of<br />Experiences</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End About Three*/}
        </>
    )
}
