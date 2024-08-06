'use client'
import Link from "next/link"
export default function Project() {
    return (
        <>
            {/*Start Project One*/}
            <section className="project-one">
                <div className="container">
                    <div className="sec-title text-center sec-title-animation animation-style1">
                        <div className="sub-title">
                            <h4>Preparing the Data</h4>
                        </div>
                        <h2>Step by Preprocessing</h2>
                    </div>

                    {/*Start Single Project One*/}
                    <div className="project-one__single wow animated fadeInLeft" data-wow-delay="0.1s">
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="project-one__single-img-box">
                                    <img src="EDA/data2.png" alt="#" />
                                    <div className="overlay-icon">
                                        <Link href="EDA/data2.png" className="img-popup">
                                            <span className="icon-plus"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="project-one__single-content-box">
                                    <div className="meta-box">
                                        <ul className="meta-info">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <p><Link href="#">Steps we take to </Link></p>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="meta-info">
                                        <p><Link href="#">Dropping Unnecessary Columns: We remove columns that aren’t needed for training the model.<br /><br />
                                            Encoding Categorical Data: We convert text-based categories into numerical values so that the model can understand them.<br /><br />
                                            Scaling Features: We adjust the data values to a common scale, which helps the model learn more effectively.</Link></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Project One*/}

                    {/*Start Single Project One*/}
                    <div className="project-one__single wow animated fadeInRight" data-wow-delay="0.2s">
                        <div className="row">
                            <div className="col-xl-5 order-22">
                                <div className="project-one__single-content-box project-one__single-content-box--style2">
                                    <div className="meta-box">
                                        <ul className="meta-info">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <p><Link href="#">Splitting the Data</Link></p>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="meta-info">
                                        <p><Link href="#">Splitting the Data: We divide the data into two parts: one for training the model and one for testing its performance. This helps us evaluate how well the model works.

                                        </Link></p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-7 order-11">
                                <div className="project-one__single-img-box">
                                    <img src="EDA/creditscore.png" alt="#" />
                                    <div className="overlay-icon">
                                        <Link href="EDA/creditscore.png" className="img-popup">
                                            <span className="icon-plus"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*End Single Project One*/}
                    {/*Start Single Project One*/}
                    <div className="project-one__single project-one__single--style2 wow animated fadeInLeft"
                        data-wow-delay="0.3s">
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="project-one__single-img-box">
                                    <img src="EDA/heatmap.png" alt="#" />
                                    <div className="overlay-icon">
                                        <Link href="EDA/heatmap.png" className="img-popup">
                                            <span className="icon-plus"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="project-one__single-content-box">
                                    <div className="meta-box">
                                        <ul className="meta-info">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <p><Link href="#">Saving the Data:</Link></p>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="meta-info">
                                        <p><Link href="#">Training and Testing Sets: We save the processed data into separate files for training and testing.<br/><br/>
                                        Scaler: We save the tool that standardizes the data, so we can apply the same scaling to new data in the future.</Link></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Project One*/}

                    <div className="project-one__btn-box">
                        <Link className="thm-btn" href="#">
                            <span className="txt">PreProcess the data Again</span>
                            <i className="icon-next"></i>
                        </Link>
                    </div>

                </div>
            </section>
            {/*End Project One*/}
        </>
    )
}
