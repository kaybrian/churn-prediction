import Link from "next/link"
export default function Pricing() {
    return (
        <>
            
        {/*Start Service Two*/}
        <section className="service-two">
            <div className="service-two__shape1">
                <img src="assets/img/shape/service-two__shape1.png" alt="shape"/>
            </div>
            <div className="service-two__shape2">
                <img src="assets/img/shape/service-two__shape2.png" alt="shape"/>
            </div>
            <div className="service-two__shape3">
                <img src="assets/img/shape/service-two__shape3.png" alt="shape"/>
            </div>
            <div className="service-two__shape4 float-bob-y">
                <img src="assets/img/shape/service-two__shape4.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="sec-title-two text-center sec-title-animation animation-style1">
                    <h2>Our Affordable <span>Services</span></h2>
                    <p>It’s about telling a story through the message and visuals that get your<br/>
                        ideas across to your customers</p>
                </div>
                <div className="row">

                    {/*Start Single Service Two*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-two__single">
                            <div className="service-two__single-icon-box color1">
                                <span className="icon-website-design"><span className="path1"></span><span
                                        className="path2"></span></span>
                            </div>
                            <div className="service-two__single-title-box">
                                <h3><Link href="web-development">Website Design</Link></h3>
                            </div>
                            <div className="service-two__single-text-box">
                                <p>All trials are our Pro plan by default you can try out all features.</p>
                            </div>
                            <div className="overlay-btn">
                                <Link href="web-development">Learn More <span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-two__single">
                            <div className="service-two__single-icon-box color2">
                                <span className="icon-design-strategy"><span className="path1"></span><span
                                        className="path2"></span><span className="path3"></span><span
                                        className="path4"></span></span>
                            </div>
                            <div className="service-two__single-title-box">
                                <h3><Link href="web-development">Design Strategy</Link></h3>
                            </div>
                            <div className="service-two__single-text-box">
                                <p>All trials are our Pro plan by default you can try out all features.</p>
                            </div>
                            <div className="overlay-btn">
                                <Link href="web-development">Learn More <span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                        <div className="service-two__single">
                            <div className="service-two__single-icon-box">
                                <span className="icon-free-consultation"></span>
                            </div>
                            <div className="service-two__single-title-box">
                                <h3><Link href="web-development">Free Consultation</Link></h3>
                            </div>
                            <div className="service-two__single-text-box">
                                <p>All trials are our Pro plan by default you can try out all features.</p>
                            </div>
                            <div className="overlay-btn">
                                <Link href="web-development">Learn More <span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                        <div className="service-two__single">
                            <div className="service-two__single-icon-box color3">
                                <span className="icon-web-development1"></span>
                            </div>
                            <div className="service-two__single-title-box">
                                <h3><Link href="web-development">Web Development</Link></h3>
                            </div>
                            <div className="service-two__single-text-box">
                                <p>All trials are our Pro plan by default you can try out all features.</p>
                            </div>
                            <div className="overlay-btn">
                                <Link href="web-development">Learn More <span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Two*/}
                </div>
            </div>
        </section>
        {/*End Service Two*/}
        </>
    )
}
