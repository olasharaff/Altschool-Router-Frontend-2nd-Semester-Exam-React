# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



---

# Project Title
AltSchool Front-end Second Exam 
Question 3
## Overview

This React project is a dynamic web application that leverages various technologies to create a seamless user experience. Built with efficiency and scalability in mind, the project showcases the integration of Tailwind CSS, Firebase authentication, and other essential React packages.

## Features

- **Tailwind CSS Integration:** The project utilizes Tailwind CSS for efficient styling, providing a responsive and visually appealing design.

- **Firebase Authentication:** Seamless user authentication with Google Firebase allows users to sign in, sign up using email and password, sign up with Google, and recover forgotten passwords.

- **Firebase Storage and Database:** Custom rules are set for Firebase storage and database, ensuring secure and controlled data management.

- **React Packages:**
  - **react-router-dom:** Enables smooth navigation and dynamic routing within the application.
  - **react-icons:** Provides a comprehensive set of icons for an enhanced user interface.
  - **react-toastify:** Facilitates non-intrusive and customizable toast notifications.
  - **axios:** Used for making dynamic API calls, enhancing the project's interactivity.

## Project Structure

The project is organized into distinct folders, each serving a specific purpose:

- **Components:**
  - **OAuth.jsx:** Manages OAuth authentication components.
  - **Navbar.jsx:** Implements the navigation bar for seamless user interaction.
  - **PrivateRoute.jsx:** Ensures protected routes are accessible only to authenticated users.
  - **Spinner.jsx:** Displays loading spinners to enhance user experience.

- **Pages:**
  - **Home.jsx:** The main landing page of the application.
  - **Signin.jsx:** Manages user sign-in functionality.
  - **Signup.jsx:** Facilitates user registration.
  - **ForgetPassword.jsx:** Allows users to recover forgotten passwords.
  - **Quote.jsx:** Displays quotes dynamically.
  - **NotFound.jsx:** Custom 404 page for handling page not found scenarios.

- **Custom Hooks:**
  - **useFetchBlog.jsx:** Custom hook for fetching blog-related data.
  - **useFetchQuote.jsx:** Custom hook for fetching quote data.
  - **useAuthStatus.jsx:** Custom hook managing authentication status.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository using `npx`.
2. Install dependencies using `npm install`.
3. Configure Firebase credentials for authentication and database functionality.
4. Run the application using `npm start`.

