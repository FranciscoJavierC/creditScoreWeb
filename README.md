# Credit Score Web App
A web application designed to help users manage their credit-related information, compare credit companies, and track potential changes in credit scores based on financial data.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [Contributors](#contributors)

## Features
- **User Authentication:** Allows users to sign up and log in securely.
- **Dashboard:** Displays financial recommendations, credit card due dates, and statement dates.
- **Credit Score Calculator:** Provides an estimate of how users' credit scores might change based on financial behavior.
- **Proposed Timeline:** Shows potential changes in credit scores over time based on user inputs.
- **Important Information Section:** Offers an overview of key credit terms and differences between statements and credit scores.
- **Company Comparison:** Suggests credit companies that best match the user’s needs.

## Technologies Used
- **Frontend:** HTML, EJS templates, Bootstrap for styling.
- **Backend:** Node.js, Express.js for server-side logic.
- **Database:** MongoDB for storing user data and financial information.

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/credit-score-web-app.git
    cd credit-score-web-app
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the app:
    ```bash
    npm start
    ```
    The server should be running at `http://localhost:3000`.

4. To start the server using `nodemon`:
    ```bash
    nodemon index.js
    ```
    The server will be running and ready for development.

## Routes
- `/login`: User login page
- `/signup`: User registration page
- `/home`: Home dashboard
- `/currentUser`: User-specific information and tools

## Contributors
- Francisco Cortez, Julio Morales, Bukola Awotoye, Marcos Barbosa
