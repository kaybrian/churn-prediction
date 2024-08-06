import Link from "next/link"
export default function Features() {
    return (
        <>
        {/*Start Features One*/}
        <section className="features-one">
            <div className="features-one__shape1">
                <img src="assets/img/shape/features-one__shape1.png" alt="shape"/>
            </div>
            <div className="features-one__shape3">
                <img src="assets/img/shape/features-one__shape3.png" alt="shape"/>
            </div>
            <div className="features-one__shape4 float-bob-y">
                <img src="assets/img/shape/features-one__shape4.png" alt="shape"/>
            </div>
            <div className="features-one__shape5">
                <img src="assets/img/shape/features-one__shape5.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="features-one__logo">
                            <div className="features-one__shape2">
                                <img src="assets/img/shape/features-one__shape2.png" alt="shape"/>
                            </div>
                            <div className="features-one__logo-single style1">
                                <img src="assets/img/resource/features-one__logo1.png" alt="logo"/>
                            </div>
                            <div className="features-one__logo-single style2">
                                <img src="assets/img/resource/features-one__logo2.png" alt="logo"/>
                            </div>
                            <div className="features-one__logo-single style3">
                                <img src="assets/img/resource/features-one__logo3.png" alt="logo"/>
                            </div>
                            <div className="features-one__logo-single style4">
                                <img src="assets/img/resource/features-one__logo4.png" alt="logo"/>
                            </div>
                            <div className="features-one__logo-single style5">
                                <img src="assets/img/resource/features-one__logo5.png" alt="logo"/>
                            </div>
                            <div className="features-one__logo-single style6">
                                <img src="assets/img/resource/features-one__logo6.png" alt="logo"/>
                            </div>
                            <div className="features-one__logo-single style7">
                                <img src="assets/img/resource/features-one__logo7.png" alt="logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="features-one__content">
                            <div className="sec-title-two  sec-title-animation animation-style1">
                                <h2>Integrating Cutting Edge<br/><span>25+ Web Technologies</span></h2>
                                <p>
                                    Web design is not about making a website—it’s about making an investment in your
                                    organization. Successful web design takes into<br/>account more than just aesthetics.
                                </p>
                            </div>
                            <div className="features-one__content-btn">
                                <Link className="thm-btn" href="#">
                                    <span className="txt">See All Integration</span>
                                    <i className="icon-next"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Features One*/}
        </>
    )
}
