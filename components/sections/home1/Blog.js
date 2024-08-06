import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/*Start Blog Three*/}
        <section className="blog-three">
            <div className="blog-three__shape1 float-bob-y">
                <img src="assets/img/shape/blog-three__shape1.png" alt="shapes"/>
            </div>
            <div className="blog-three__shape2">
                <img src="assets/img/shape/blog-three__shape2.png" alt="shapes"/>
            </div>
            <div className="container">
                <div className="sec-title-three text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Blog & Airticle</h4>
                    </div>
                    <h2>
                        Read Our Latest Airticle
                    </h2>
                </div>
                <div className="row">

                    {/*Start Single Blog Three*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <img src="assets/img/blog/blog-three__img1.jpg" alt="#"/>
                            </div>
                            <div className="blog-three__single-content">
                                <div className="meta-box">
                                    <ul className="meta-info">
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
                                <div className="title-box">
                                    <h3><Link href="blog-details">Designing The Next-Level<br/>Websites</Link></h3>
                                </div>
                                <div className="btn-box">
                                    <Link href="blog-details">
                                        Read More
                                        <i className="icon-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog Three*/}

                    {/*Start Single Blog Three*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <img src="assets/img/blog/blog-three__img2.jpg" alt="#"/>
                            </div>
                            <div className="blog-three__single-content">
                                <div className="meta-box">
                                    <ul className="meta-info">
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
                                <div className="title-box">
                                    <h3><Link href="blog-details">Best Agencies Are Choose<br/>Their Clients Wisely</Link>
                                    </h3>
                                </div>
                                <div className="btn-box">
                                    <Link href="blog-details">
                                        Read More
                                        <i className="icon-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog Three*/}

                    {/*Start Single Blog Three*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <img src="assets/img/blog/blog-three__img3.jpg" alt="#"/>
                            </div>
                            <div className="blog-three__single-content">
                                <div className="meta-box">
                                    <ul className="meta-info">
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
                                <div className="title-box">
                                    <h3><Link href="blog-details">It is Your Time to Show<br/>Your Creativity </Link></h3>
                                </div>
                                <div className="btn-box">
                                    <Link href="blog-details">
                                        Read More
                                        <i className="icon-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog Three*/}

                </div>
            </div>
        </section>
        {/*End Blog Three*/}
        </>
    )
}
