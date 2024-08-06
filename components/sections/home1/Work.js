import Link from "next/link"
export default function Work() {
    return (
        <>
        {/*Start Working Process One*/}
        <section className="working-process-one">
            <div className="working-process-one__shape1 float-bob-x">
                <img src="assets/img/shape/working-process__shape1.png" alt="shapes"/>
            </div>
            <div className="working-process-one__shape2">
                <img src="assets/img/shape/working-process__shape2.png" alt="shapes"/>
            </div>
            <div className="working-process-one__shape5 float-bob-y">
                <img src="assets/img/shape/working-process__shape5.png" alt="shapes"/>
            </div>
            <div className="container">
                <div className="sec-title-four text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Benefits</h4>
                    </div>
                    <h2>Why work with us?</h2>
                </div>
                <div className="row">

                    {/*Start Single Working Process One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="working-process-one__single text-center">
                            <div className="icon-box">
                                <i className="icon-problem-analysis"></i>
                                <div className="overlay-list">
                                    <span>01</span>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="title-box">
                                    <h5>First Step</h5>
                                    <h3><Link href="#">Reduce Customer Churn</Link></h3>
                                </div>
                                <div className="text-box">
                                    <p>Identify at-risk customers before they leave, giving you the opportunity to intervene.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Working Process One*/}

                    {/*Start Single Working Process One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="working-process-one__single text-center">
                            <div className="working-process-one__shape3">
                                <img src="assets/img/shape/working-process__shape3.png" alt="shapes"/>
                            </div>
                            <div className="icon-box">
                                <i className="icon-find-solutions"></i>
                                <div className="overlay-list">
                                    <span>02</span>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="title-box">
                                    <h5>Second Step</h5>
                                    <h3><Link href="#">Increase Customer Lifetime Value</Link></h3>
                                </div>
                                <div className="text-box">
                                    <p>Focus retention efforts on high-value customers most likely to churn.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Working Process One*/}

                    {/*Start Single Working Process One*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="working-process-one__single text-center">
                            <div className="working-process-one__shape4">
                                <img src="assets/img/shape/working-process__shape4.png" alt="shapes"/>
                            </div>
                            <div className="icon-box">
                                <i className="icon-build-develop"></i>
                                <div className="overlay-list">
                                    <span>03</span>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="title-box">
                                    <h5>Third Step</h5>
                                    <h3><Link href="#">Optimize Marketing Spend</Link></h3>
                                </div>
                                <div className="text-box">
                                    <p> Target retention campaigns more effectively, improving ROI on marketing initiatives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Working Process One*/}

                </div>
            </div>
        </section>
        {/*End Working Process One*/}
        </>
    )
}
