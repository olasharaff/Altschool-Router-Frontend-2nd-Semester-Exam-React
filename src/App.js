import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import Quote from "./pages/Quote";
import NavBar from "./components/Navbar";
// import ErrorBoundary from "./errorBoundary/ErrorBoundary";
import { ToastContainer } from "react-toastify";




function App() {
  return (
    <>
      {/* <ErrorBoundary> */}
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      {/* </ErrorBoundary> */}
      <ToastContainer
        position="bottom-center"
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
    </>
  );
}

export default App;
