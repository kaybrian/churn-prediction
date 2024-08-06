
'use client'
import Link from "next/link"
export default function Cta() {

    return (
        <>
        {/*Start Cta Two*/}
        <section className="cta-two">
            <div className="container">
                <div className="cta-two__inner">
                    <div className="cta-two__inner-bg"
                        style={{ backgroundImage: 'url(assets/img/pattern/cta-two__parttern1.png' }} ></div>
                    <div className="cta-two__content sec-title-animation animation-style1">
                        <h2>Have Any Discussion?</h2>
                        <p>Gathered have greater made fruitful. Void to let to know
                            about that you'll sixth upon day.</p>
                    </div>
                    <div className="cta-two__btn">
                        <Link className="thm-btn" href="contact">
                            <span className="txt">Contact with Us</span>
                            <i className="icon-next"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/*End Cta Two*/}
        
        </>
    )
}
