import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/*Start Blog One*/}
        <section className="blog-one">
            <div className="container">
                <div className="sec-title text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Blog & News</h4>
                    </div>
                    <h2>Read Our Latest Blog</h2>
                </div>
                <div className="row">
                    {/*Start Single Blog One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img-box">
                                <img src="assets/img/blog/blog-one-1.jpg" alt="#"/>
                            </div>
                            <div className="blog-one__single-content">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="line"></div>
                                            <p><Link href="#">Design</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>
                                            <p><Link href="#">Sep 30, 2022</Link></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-one__single-content-meta-box-title-box">
                                    <h3><Link href="blog-details">Sharing You and Your Company<br/>with The World</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog One*/}
                    {/*Start Single Blog One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img-box">
                                <img src="assets/img/blog/blog-one-2.jpg" alt="#"/>
                            </div>
                            <div className="blog-one__single-content">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="line"></div>
                                            <p><Link href="#">Development</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>
                                            <p><Link href="#">Sep 30, 2022</Link></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-one__single-content-meta-box-title-box">
                                    <h3><Link href="blog-details">I Will Deliver The Digital Results<br/>As You
                                            Desire</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog One*/}
                    {/*Start Single Blog One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img-box">
                                <img src="assets/img/blog/blog-one-3.jpg" alt="#"/>
                            </div>
                            <div className="blog-one__single-content">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="line"></div>
                                            <p><Link href="#">Design</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>
                                            <p><Link href="#">Sep 30, 2022</Link></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-one__single-content-meta-box-title-box">
                                    <h3><Link href="blog-details">Will Reach Your Audience and<br/>Convert Your
                                            Leads</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog One*/}
                </div>
            </div>
        </section>
        {/*End Blog One*/}
        </>
    )
}
