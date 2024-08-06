'use client'
import Link from "next/link"
export default function About() {
    return (
        <>

        {/*Start About Two*/}
        <section className="about-two">
            <div className="about-two__shape1">
                <img src="assets/img/shape/about-two__shape1.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-two__content">
                            <div className="sec-title-two  sec-title-animation animation-style1">
                                <h2>We’re Not Average <br/> <span>Web Design</span> Company</h2>
                                <p>
                                    Web design is not about making a website—it’s about making an investment in your
                                    organization. Successful web design takes into account more than just aesthetics.
                                </p>
                            </div>
                            <div className="about-two__content-list">
                                <ul className="clearfix">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <div className="title">
                                            <h4>We build websites with design them to convert</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <div className="title">
                                            <h4>Your website is like a business card, it should look good</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <div className="title">
                                            <h4>Creative minds behind wacky websites</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-two__btn-box">
                                <Link className="thm-btn" href="#">
                                    <span className="txt">Learn More</span>
                                    <i className="icon-next"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="about-two__img float-bob-y">
                            <img src="assets/img/about/about-two__img1.png" alt="image"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/*End About Two*/}

        </>
    )
}
