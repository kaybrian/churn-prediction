
'use client'
import Link from "next/link"
export default function Cta() {

    return (
        <>
        {/*Start Cta One*/}
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner text-center">
                    <div className="cta-one__shape1 float-bob-y">
                        <img src="assets/img/shape/cta-one__shape1.png" alt="#"/>
                    </div>
                    <div className="cta-one__shape2 float-bob-y">
                        <img src="assets/img/shape/cta-one__shape2.png" alt="#"/>
                    </div>
                    <div className="cta-one__shape3 rotate-me">
                        <img src="assets/img/shape/cta-one__shape3.png" alt="#"/>
                    </div>
                    <div className="cta-one__shape4 float-bob-x">
                        <img src="assets/img/shape/cta-one__shape4.png" alt="#"/>
                    </div>
                    <div className="cta-one__shape5 float-bob-x">
                        <img src="assets/img/shape/cta-one__shape5.png" alt="#"/>
                    </div>
                    <div className="cta-one__shape6 float-bob-y">
                        <img src="assets/img/shape/cta-one__shape6.png" alt="#"/>
                    </div>
                    <div className="cta-one__inner-title-box">
                        <h2>Have A Project In Mind? Let’s Get Start.</h2>
                    </div>
                    <div className="cta-one__inner-text-box">
                        <p>
                            Sedut perspiciatis omnis iste natus voluptate accusantium doloremque
                            <br/>laudan totam aperiaaqus epsa quae abillo.
                        </p>
                    </div>
                    <div className="cta-one__inner-btn-box">
                        <Link className="thm-btn" href="#">
                            <span className="txt">Just Say Hello</span>
                            <i className="icon-next"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/*End Cta One*/}
        
        </>
    )
}
