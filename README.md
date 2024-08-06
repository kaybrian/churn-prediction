# Customer Churn Predictor

## Overview

The Customer Churn Predictor is a web application built with Next.js that predicts whether a bank customer will churn (i.e., leave the bank) based on various attributes. The application uses a Random Forest Classifier to make predictions and provides insights through evaluation metrics and visualizations.

## Features

- **Data Loading**: Load training and testing datasets.
- **Model Training**: Train the Random Forest model on the provided datasets.
- **Model Evaluation**: Evaluate the model using accuracy, classification report, and confusion matrix.
- **Model Retraining**: Retrain the model via an API endpoint.
- **Visualizations**: Display evaluation metrics and confusion matrix.

## Technologies

- **Frontend**: Next.js, React
- **Backend**: Python, FastAPI
- **Machine Learning**: scikit-learn
- **Visualization**: Matplotlib, Seaborn

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python (v3.11 or higher)
- pip (Python package installer)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/kaybrian/churn-prediction.git
    cd churn-prediction
    ```

2. **Install frontend dependencies**:
    ```bash
    npm install
    ```


### Running the Application


2. **Start the frontend server**:
    ```bash
    npm run dev
    ```

3. **Open the application**:
    Open your browser and navigate to `http://localhost:3000`.

### API Endpoints

- **Rebuild Model**: `move to /rebuild-model`
    - Retrains the model with the provided datasets.
    - Returns evaluation metrics: accuracy, classification report, and confusion matrix.

- **Preprocess Data**: `GET /Preprocess`
    - Preprocesses the data and returns the preprocessed data.

- **Predict Churn**: `POST /predict`
    - Predicts whether a customer will churn based on the provided data.
    - Returns the prediction.
