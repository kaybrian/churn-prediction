import Link from "next/link"

export default function Footer2() {
    return (
        <>
            
        {/*Start Footer Two*/}
        <footer className="footer-two">
            <div className="footer-two__shape1 rotate-me">
                <img src="assets/img/shape/footer-two__shape1.png" alt="shape"/>
            </div>
            <div className="footer-two__shape2">
                <img src="assets/img/shape/footer-two__shape2.png" alt="shape"/>
            </div>
            <div className="footer-two__shape3">
                <img src="assets/img/shape/footer-two__shape3.png" alt="shape"/>
            </div>
            <div className="footer-two__shape4">
                <img src="assets/img/shape/footer-two__shape4.png" alt="shape"/>
            </div>
            <div className="footer-two__shape5 float-bob-y">
                <img src="assets/img/shape/footer-two__shape5.png" alt="shape"/>
            </div>

            {/* Start Footer Main */}
            <div className="footer-main footer-main__two">
                <div className="container">
                    {/* Start Footer Main Two Top*/}
                    <div className="footer-main__two-top">
                        <div className="footer-two__logo-box">
                            <Link href="/">
                                <img src="assets/img/logo/footer-two-1.png" alt="logo"/>
                            </Link>
                        </div>

                        <div className="footer-two__socel-link">
                            <ul className="clearfix">
                                <li>
                                    <Link href="#">
                                        <i className="icon-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="icon-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="icon-instagram-symbol"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="icon-linkedin"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* End Footer Main Two Top*/}

                    <div className="footer-main__inner footer-main-two__inner">
                        <div className="row">
                            {/*Start Single Footer Widget*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
                                <div className="single-footer-widget">
                                    <div className="title">
                                        <h3>Help & Support</h3>
                                    </div>
                                    <div className="single-footer-widget-box single-footer-widget__about">
                                        <div className="text">
                                            <p>Need any support? or have any project on your mind?</p>
                                        </div>
                                        <ul className="clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-pin"></span>
                                                </div>
                                                <p>55 Green Street, New York</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-mail-inbox-app"></span>
                                                </div>
                                                <p><Link href="mailto:support@gmail.com">support@gmail.com</Link></p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-phone-call"></span>
                                                </div>
                                                <p><Link href="tel:000245862092">000 245 (862) 092</Link></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget*/}

                            {/*Start Single Footer Widget*/}
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget ml55">
                                    <div className="title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <div className="single-footer-widget-box single-footer-widget__links">
                                        <ul className="clearfix">
                                            <li>
                                                <p><Link href="about">Need a career?</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="about">About Us</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="web-development">Our Services</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="blog-details">Latest News</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="contact">Contact Us</Link></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget*/}

                            {/*Start Single Footer Widget*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget ml50">
                                    <div className="title">
                                        <h3>Our Services</h3>
                                    </div>
                                    <div className="single-footer-widget-box single-footer-widget__links">
                                        <ul className="clearfix">
                                            <li>
                                                <p><Link href="web-development">Front End Development</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="web-development">UI/UX Development</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="web-development">Web Development</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="web-development">Web Design Strategy</Link></p>
                                            </li>
                                            <li>
                                                <p><Link href="web-development">Digital Marketing</Link></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget*/}

                            {/*Strat Single Footer Widget*/}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="title">
                                        <h3>Latest News</h3>
                                    </div>
                                    <div className="single-footer-widget-box single-footer-widget__blog-list">
                                        <ul className="clearfix">
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/footer/footer-two__img1.jpg" alt="#"/>
                                                    <Link href="#"><i className="fa-solid fa-link"></i></Link>
                                                </div>
                                                <div className="title-box">
                                                    <h5>
                                                        <Link href="blog-details">Believed in The Strength of the <br/>
                                                            Creativeness.</Link>
                                                    </h5>
                                                    <div className="date-box">
                                                        <ul className="clearfix">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-calendar"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>28 Nov, 2022</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>4 Min Read</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/footer/footer-two__img2.jpg" alt="#"/>
                                                    <Link href="#"><i className="fa-solid fa-link"></i></Link>
                                                </div>
                                                <div className="title-box">
                                                    <h5>
                                                        <Link href="blog-details">Believed in The Strength of the <br/>
                                                            Creativeness.</Link>
                                                    </h5>
                                                    <div className="date-box">
                                                        <ul className="clearfix">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-calendar"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>28 Nov, 2022</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>4 Min Read</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget*/}
                        </div>
                    </div>
                </div>
                {/* End Footer Main */}

                {/*Start Footer Bottom */}
                <div className="footer-bottom footer-bottom-two">
                    <div className="container">
                        <div className="footer-bottom__inner footer-bottom__two-inner">
                            <div className="copyright-text text-center">
                                <p>Copyright © 2024 Diligent by <Link
                                        href="https://themeforest.net/user/thememx">Thememx. </Link>
                                    All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer Bottom */}
            </div>
        </footer>
        {/*Start Footer two*/}
    

        </>
    )
}
