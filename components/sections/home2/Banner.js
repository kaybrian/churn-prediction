
'use client'
import Link from "next/link"
export default function Banner() {
    return (
        <>
        {/*Start Banner Two*/}
        <section className="banner-two">
            <div className="banner-two__shape1">
                <img src="assets/img/shape/banner-two__shape1.png" alt="shape"/>
            </div>
            <div className="banner-two__shape2">
                <img src="assets/img/shape/banner-two__shape2.png" alt="shape"/>
            </div>
            <div className="banner-two__shape3">
                <img src="assets/img/shape/banner-two__shape3.png" alt="shape"/>
            </div>
            <div className="banner-two__shape4">
                <img src="assets/img/shape/banner-two__shape4.png" alt="shape"/>
            </div>
            <div className="banner-two__shape5 rotate-me">
                <img src="assets/img/shape/banner-two__shape5.png" alt="shape"/>
            </div>
            <div className="banner-two__shape6 float-bob-y">
                <img src="assets/img/shape/banner-two__shape6.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="banner-two__inner clearfix">
                    <div className="banner-two__content wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="big-title">
                            <h2>Web Designing<br/>is Brainpower<br/>Made Visible</h2>
                        </div>
                        <div className="text">
                            <p>There are many variations of passages of available, but the majority have suffered
                                alterationd in some form, by injected humour, or randomised words.</p>
                        </div>
                        <div className="bottom-box">
                            <div className="btn-box">
                                <Link className="thm-btn" href="contact">
                                    <span className="txt">
                                        Get Started
                                        <i className="icon-next"></i>
                                    </span>
                                </Link>
                            </div>
                            <div className="user-people">
                                <ul>
                                    <li>
                                        <img src="assets/img/slider/banner-two__user1.png" alt="user-people"/>
                                    </li>
                                    <li>
                                        <img src="assets/img/slider/banner-two__user2.png" alt="user-people"/>
                                    </li>
                                    <li>
                                        <img src="assets/img/slider/banner-two__user3.png" alt="user-people"/>
                                    </li>
                                    <li>
                                        <img src="assets/img/slider/banner-two__user4.png" alt="user-people"/>
                                    </li>
                                </ul>
                                <div className="text">
                                    <p>20k+ Worldwide</p>
                                    <p>Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner-two__img float-bob-y">
                        <img src="assets/img/slider/banner-two__mian-img.png" alt="banner"/>
                    </div>

                </div>
            </div>
        </section>
        {/*End Banner Two*/}

        </>
    )
}
