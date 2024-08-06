"use client"

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { api_url } from "@/api_url"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [preprocessSuccess, setPreprocessSuccess] = useState(false);

    const ReBuildModel = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${api_url}/rebuild-model/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify()
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setData(result);
            setPreprocessSuccess(true);

            const { accuracy, classification_report, confusion_matrix } = result;

            const formattedClassificationReport = classification_report.split('\n').map(line => line.trim()).join('<br />');
            const confusionMatrixFormatted = `
                ${'\n'}${'\n'}${'\n'}Confusion Matrix:${'\n'}${'\n'}
                True Negative: ${confusion_matrix[0][0]}, False Positive: ${confusion_matrix[0][1]}${'\n'}${'\n'}${'\n'}
                False Negative: ${confusion_matrix[1][0]}, True Positive: ${confusion_matrix[1][1]}
            `;

            toast.success(`
                    Model re-trained successfully.
                    Accuracy: ${(accuracy * 100).toFixed(2)}%
                    ${'\n'}${'\n'}
                    ${confusionMatrixFormatted}
                    ${'\n'}${'\n'}
                    Classification Report
                    ${formattedClassificationReport}

            `);

        } catch (err) {
            setError(err.message);
            toast.error('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Re-build Model">
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
                    theme="dark"
                />
                {/*Start Service Details*/}
                <section className="service-details">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-details__content">
                                    <div className="service-details__img-box1">
                                        <div className="img-box">
                                            <img src="EDA/data.png" alt="image" />
                                        </div>
                                        <div className="content-box">
                                            <h2>Re-build Model</h2>
                                            <p>
                                                Our Loan Default Predictor uses a Random Forest Classifier to predict
                                                whether a customer will default on a loan. We start by loading the
                                                training and testing datasets, which contain the necessary features
                                                and labels. The model learns from the training data,
                                                identifying patterns that help it make accurate predictions.
                                            </p>

                                        </div>
                                    </div>

                                    <div className="service-details__text">
                                        <div className="title">
                                            <h3>Training and Evaluation
                                            </h3>
                                            <p>
                                                During training, we monitor the model's performance using metrics such as accuracy and loss.
                                                Once the model is trained, we evaluate it on the test dataset to measure its predictive
                                                capabilities. This evaluation includes calculating the accuracy, generating a
                                                classification report, and plotting a confusion matrix to visualize the results.
                                            </p>
                                        </div>
                                        <div className="text">
                                            <p>
                                                <b>Accuracy</b>: The proportion of correct predictions made by the model. <br />
                                                <b>Classification Report</b>: A detailed report showing the precision, recall, and F1-score for each class.<br />
                                                <b>Confusion Matrix</b>: A matrix that shows the number of correct and incorrect predictions for each class.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="service-details__img-box2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="img-box">
                                                    <img src="EDA/exited.png" alt="image" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="content-box">
                                                    <h2>Model Retention</h2>
                                                    <p>
                                                        To ensure the model can be reused without retraining, we save the trained model with a unique filename.
                                                        This allows us to quickly deploy the model for future predictions, maintaining efficiency and scalability in our system.
                                                    </p>

                                                </div>
                                                <div className="project-one__btn-box">
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
                                                                onClick={() => ReBuildModel()}
                                                                className="thm-btn"
                                                            >
                                                                <span className="txt">Retrian Model</span>
                                                                <i className="icon-next"></i>
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/*Start Sidebar*/}
                            <div className="col-xl-4">
                                <div className="service-details__sidebar">
                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s">
                                        <div className="sidebar__contact-info-bg"
                                            style={{ backgroundImage: 'url(EDA/data2.png)' }} >
                                        </div>
                                        <div className="content-box text-center">
                                            <h3>Ready to<br />Make a Prediction?</h3>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="/predict">
                                                    <span className="txt">Predict Now</span>
                                                    <i className="icon-next"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Sidebar Single*/}

                                </div>
                            </div>
                            {/*End Sidebar*/}

                        </div>
                    </div>
                </section>
                {/*End Blog Details*/}

            </Layout>
        </>
    )
}
