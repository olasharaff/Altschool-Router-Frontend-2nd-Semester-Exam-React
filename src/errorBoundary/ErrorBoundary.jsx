import React, { Component } from "react";
import { toast } from "react-toastify";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    
    console.error("Error caught by error boundary:", error, errorInfo);
    // i use toastify to show error
    toast.error("Error caught by error boundary")
  }

  render() {
    if (this.state.hasError) {
     
      return <div>
      <section>
        <Home/>
        <SignIn/>
      </section>
      </div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
