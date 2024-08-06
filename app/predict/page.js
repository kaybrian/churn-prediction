"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react';
import { api_url } from "@/api_url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    const [formData, setFormData] = useState({
        creditScore: '',
        gender: '',
        age: '',
        tenure: '',
        balance: '',
        numberOfProducts: '',
        hasCreditCard: '',
        isActiveMember: '',
        estimatedSalary: ''
    });


    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: parseFloat(value)
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // log the data to see
        // console.log(formData);

        // Convert formData to a list
        const formDataList = Object.values(formData);

        // send the data to the url
        const response = await fetch(`${api_url}/predict/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "data": [
                    formDataList
                ]
            }
            )
        })

        // Get the response
        const data = await response.json();



        // Check if the response is ok
        if (!response.ok) {
            toast.error("An error occurred");

            // clear the form
            setFormData({
                creditScore: '',
                gender: '',
                age: '',
                tenure: '',
                balance: '',
                numberOfProducts: '',
                hasCreditCard: '',
                isActiveMember: '',
                estimatedSalary: ''
            })
        }

        // Check if the response is ok
        if (response.ok) {
            // Redirect to the result page
            // Log the data to see
            if (data.predictions[0] === 1) {
                toast.success("Based on the data you provided, the customer is likely to churn, i.e., leave the bank");
            } else {
                toast.success("Based on the data you provided, the customer is likely to stay with the bank");
            }

            // clear the form
            setFormData({
                creditScore: '',
                gender: '',
                age: '',
                tenure: '',
                balance: '',
                numberOfProducts: '',
                hasCreditCard: '',
                isActiveMember: '',
                estimatedSalary: ''
            })
        }


    };

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Predict ">
                {/* create a tostify */}
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
                {/*Start Contact Page*/}
                <section className="contact-page">
                    <div className="contact-page__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="contact-page__top-content">
                                        <div className="contact-page__top-content-top sec-title-animation animation-style1">
                                            <h2>Make a Prediction </h2>
                                            <p>Welcome to the Predict page of BankCustomerChurnPredictor. Here, you can input the necessary details about a bank customer to predict whether they are likely to churn (leave the bank) or stay. Please fill in the following information accurately to get the best prediction results.

                                            </p>
                                        </div>

                                        <div className="contact-page__top-content-bottom">
                                            <h2>Required Details
                                                <p>
                                                    To make a prediction, we need the following details about the customer:

                                                </p>                                          </h2>
                                            <ul>

                                                <li>
                                                    <div className="inner">
                                                        <div className="content-box">
                                                            <h4>Credit Score</h4>
                                                            <p>Enter a number between 300 and 850.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner">
                                                        <div className="content-box">
                                                            <h4>Geography</h4>
                                                            <p>Select the customer's country or region from the dropdown list.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner">
                                                        <div className="content-box">
                                                            <h4>Gender</h4>
                                                            <p>Select Male or Female from the options.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner">
                                                        <div className="content-box">
                                                            <h4>Age</h4>
                                                            <p>Enter the customer's age in years.</p>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6">
                                    <div className="contact-page__top-content-bottom">

                                        <ul>

                                            <li>
                                                <div className="inner">
                                                    <div className="content-box">
                                                        <h4>Tenure</h4>
                                                        <p>Enter the number of years the customer has been with the bank.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="content-box">
                                                        <h4>Balance</h4>
                                                        <p>Enter the customer's account balance in numerical format.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="content-box">
                                                        <h4>Number of Products</h4>
                                                        <p>Enter the number of products (e.g., savings account, loan) the customer has with the bank.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="content-box">
                                                        <h4>Has Credit Card</h4>
                                                        <p>Select Yes or No to indicate if the customer has a credit card with the bank.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="content-box">
                                                        <h4>Is Active Member</h4>
                                                        <p>Select Yes or No to indicate if the customer is an active member.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="content-box">
                                                        <h4>Estimated Salary</h4>
                                                        <p>Enter the customer's estimated annual salary in numerical format.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-page__bottom">
                        {/*Start Contact Two*/}
                        <div className="contact-page__bottom-form">
                            <div className="container">
                                <div className="contact-page__bottom-form-inner">
                                    <div className="title-box sec-title-animation animation-style1">
                                        <h2>Get Your Prediction</h2>
                                        <p>
                                            Once you have entered all the required details, click on the "Predict" button to see whether the customer is likely to churn or stay with the bank. Our advanced machine learning model will analyze the data and provide an accurate prediction.
                                            <br /><br />
                                            <b>Please Note that Enter only Numbers in the text fields </b>
                                        </p>
                                    </div>
                                    <div className="contact-page__bottom-form-inner-box">
                                        <form action="assets/inc/sendemail.php"
                                            className="contact-page__form contact-form-validated">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Customer Credit Score*"
                                                            name="creditScore"
                                                            value={formData.creditScore}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Customer Gender *"
                                                            name="gender"
                                                            value={formData.gender}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Customer Age *"
                                                            name="age"
                                                            value={formData.age}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Customer Tenure *"
                                                            name="tenure"
                                                            value={formData.tenure}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Customer Balance left *"
                                                            name="balance"
                                                            value={formData.balance}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Number of products user uses *"
                                                            name="numberOfProducts"
                                                            value={formData.numberOfProducts}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Customer Has card *"
                                                            name="hasCreditCard"
                                                            value={formData.hasCreditCard}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Customer Is Active Member*"
                                                            name="isActiveMember"
                                                            value={formData.isActiveMember}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Estimated Salary *"
                                                            name="estimatedSalary"
                                                            value={formData.estimatedSalary}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">

                                                    <div className="contact-page__btn">
                                                        <button className="thm-btn" type="submit"
                                                            data-loading-text="Please wait..."
                                                            onClick={handleSubmit}
                                                        >
                                                            <span className="txt">
                                                                Make Prediction Now
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Contact Two*/}
                    </div>
                </section>
                {/*End Contact Page*/}


            </Layout>
        </>
    )
}
