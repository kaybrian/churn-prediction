'use client'
import Link from "next/link"
import { useState } from "react"
import { api_url } from "@/api_url"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Project() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [preprocessSuccess, setPreprocessSuccess] = useState(false);

    const PreprocessData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${api_url}/preprocess/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    test_size: 0,
                    random_state: 0
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setData(result.message);
            setPreprocessSuccess(true);  // Set success to true
            toast.success(result.message);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                                        <p><Link href="#">Training and Testing Sets: We save the processed data into separate files for training and testing.<br /><br />
                                            Scaler: We save the tool that standardizes the data, so we can apply the same scaling to new data in the future.</Link></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Project One*/}

                    <div className="project-one__btn-box">
                        {/* {
                            loading ? <p>Loading...</p> : (
                                <button className="thm-btn" onClick={PreProcess}>
                                    <span className="txt">PreProcess Data</span>
                                    <i className="icon-next"></i>
                                </button>)
                        } */}

                        {
                            loading ? (
                                <button
                                    disabled={true}
                                    className="thm-btn"

                                >
                                    <span className="txt">Loading ...</span>
                                    <i className="icon-next"></i>
                                </button>
                            ) : (
                                <button
                                    onClick={() => PreprocessData()}
                                    className="thm-btn"
                                >
                                    <span className="txt">PreProcess Data</span>
                                    <i className="icon-next"></i>
                                </button>
                            )
                        }

                    </div>

                </div>
            </section>
            {/*End Project One*/}
        </>
    )
}
