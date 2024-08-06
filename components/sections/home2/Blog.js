import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/*Start Blog Two*/}
        <section className="blog-two">
            <div className="container">
                <div className="sec-title-two text-center sec-title-animation animation-style1">
                    <h2>Read Our <span>Blog Post</span></h2>
                </div>
                <ul className="row">
                    {/*Start Single Blog Two*/}
                    <li className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".1s">
                        <div className="blog-two__single">
                            <div className="blog-two__single-img">
                                <img src="assets/img/blog/blog-two__img1.jpg" alt="#"/>
                            </div>
                            <div className="blog-two__single-content">
                                <div className="date-box">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>
                                            <p>Sep 30, 2022</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-time"></span>
                                            </div>
                                            <p>5 Min Read</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-two__single-content-title">
                                    <h3><Link href="blog-details">Designing The Next-Level Websites</Link></h3>
                                    <p>It should contain the kind of language which will
                                        not hurt the sentiments of the masses.</p>
                                </div>
                                <div className="blog-two__single-content-btn-box">
                                    <Link className="thm-btn" href="blog-details">
                                        <span className="txt">Read More</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*End Single Blog Two*/}

                    {/*Start Single Blog Two*/}
                    <li className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-two__single">
                            <div className="blog-two__single-img">
                                <img src="assets/img/blog/blog-two__img2.jpg" alt="#"/>
                            </div>
                            <div className="blog-two__single-content">
                                <div className="date-box">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>
                                            <p>Sep 30, 2022</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-time"></span>
                                            </div>
                                            <p>5 Min Read</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-two__single-content-title">
                                    <h3><Link href="blog-details">Making Your Success Online</Link></h3>
                                    <p>It should contain the kind of language which will
                                        not hurt the sentiments of the masses.</p>
                                </div>
                                <div className="blog-two__single-content-btn-box">
                                    <Link className="thm-btn" href="blog-details">
                                        <span className="txt">Read More</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*End Single Blog Two*/}

                    {/*Start Single Blog Two*/}
                    <li className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                        <div className="blog-two__single">
                            <div className="blog-two__single-img">
                                <img src="assets/img/blog/blog-two__img3.jpg" alt="#"/>
                            </div>
                            <div className="blog-two__single-content">
                                <div className="date-box">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>
                                            <p>Sep 30, 2022</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-time"></span>
                                            </div>
                                            <p>5 Min Read</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-two__single-content-title">
                                    <h3><Link href="blog-details">Web Designing Is A Brainpower</Link></h3>
                                    <p>It should contain the kind of language which will
                                        not hurt the sentiments of the masses.</p>
                                </div>
                                <div className="blog-two__single-content-btn-box">
                                    <Link className="thm-btn" href="blog-details">
                                        <span className="txt">Read More</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*End Single Blog Two*/}
                </ul>
            </div>
        </section>
        {/*End Blog Two*/}
        </>
    )
}
