
'use client'
import Link from "next/link"
import Image from "next/image"

export default function Banner() {
    return (
        <>
        {/*Start Banner One*/}
        <section className="banner-one">
            <div className="banner-one__shape1 float-bob-x">
                <img src="assets/img/shape/banner-one__shape1.png" alt="#"/>
            </div>
            <div className="banner-one__shape2 rotate-me">
                <img src="assets/img/shape/banner-one__shape2.png" alt="#"/>
            </div>
            <div className="banner-one__shape3 float-bob-y">
                <img src="assets/img/shape/banner-one__shape3.png" alt="#"/>
            </div>
            <div className="container">
                <div className="banner-one__inner">
                    <div className="banner-one__content wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="sub-title">
                            <h5>Retain the Model
                            </h5>
                        </div>
                        <div className="big-title">
                            <h2>What This
                            <br/>Page Does</h2>
                        </div>
                        <div className="text">
                            <p>This page is designed to handle the important task of preparing and <br/> processing data for our model. Here's what happens behind the scenes:</p>
                        </div>
                        <div className="btn-box">
                            <Link className="thm-btn" href="/predict">
                                <span className="txt">
                                    Predict Now
                                    <i className="icon-next"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="banner-one__img wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner mt-4 pt-4 ">
                            <img
                                src="EDA/data.png"
                                alt="banner"
                            />
                        </div>
                        <div className="banner-one__img-bg"></div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Banner One*/}

        </>
    )
}
