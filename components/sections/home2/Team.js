'use client'
import Link from "next/link"
export default function Team() {
    return (
        <>
        {/*Start Team One*/}
        <section className="team-one">
            <div className="team-one__shape1">
                <img src="assets/img/shape/team-one__shape1.png" alt="shape"/>
            </div>
            <div className="team-one__shape2">
                <img src="assets/img/shape/team-one__shape2.png" alt="shape"/>
            </div>
            <div className="team-one__shape3">
                <img src="assets/img/shape/team-one__shape3.png" alt="shape"/>
            </div>
            <div className="team-one__shape4">
                <img src="assets/img/shape/team-one__shape4.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="sec-title-two text-center sec-title-animation animation-style1">
                    <h2>Our Creative <span>Team Leaders</span></h2>
                    <p>It’s about telling a story through the message and visuals
                        that get your<br/>ideas across to your customers</p>
                </div>
                <div className="row">

                    {/*Start Single Team One*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-1.jpg" alt="image"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="www.facebook.com">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="www.twitter.com">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="www.linkedin.com">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Stiphen Jhonson</Link></h3>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                    {/*Start Single Team One*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-2.jpg" alt="image"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="www.facebook.com">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="www.twitter.com">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="www.linkedin.com">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Michle Jhon Doe</Link></h3>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                    {/*Start Single Team One*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-3.jpg" alt="image"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="www.facebook.com">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="www.twitter.com">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="www.linkedin.com">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Jennifer Florica</Link></h3>
                                <p>Web Designer</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                    {/*Start Single Team One*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <img src="assets/img/team/team-v1-4.jpg" alt="image"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="www.facebook.com">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="www.twitter.com">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="www.linkedin.com">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-one__single-title">
                                <h3><Link href="#">Daniels Locasta</Link></h3>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Team One*/}
                </div>
            </div>
        </section>
        {/*End Team One*/}
        </>
    )
}
