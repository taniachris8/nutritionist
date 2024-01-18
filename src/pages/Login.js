import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";
import "./css/Login.css";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Alert } from "react-bootstrap";
import { useUser } from "../contexts/UserContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const { saveUser } = useUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send a GET request to check if the user exists
      const response = await axios.get("http://localhost:8080/users", {
        params: {
          email: formData.email,
          password: formData.password,
        },
      });

      const user = response.data[0]; // Assuming you expect one user with these credentials

      if (user) {
        // Save user information in cookies
        Cookies.set("user", JSON.stringify(user));
        saveUser(user);
        // Redirect or perform other actions as needed
        console.log("User logged in successfully:", user);
        navigate("/account"); // Redirect to the dashboard or other page
      } else {
        // Handle invalid credentials, show an error message, etc.
        setShowError(true);
        // Clear the input fields
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <h1 className="login-title">Log in to your account</h1>
      <div className="login-wrapper">
        <Form className="login-form-container" onSubmit={handleLogin}>
          <h2>Already have a Pulse Active account?</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Link to="forgot-password">
            <div style={{ paddingBottom: 10 }}>Forgot your password?</div>
          </Link>
          <Button
            variant="primary"
            type="submit"
            style={{ width: "300px", marginBottom: "10px" }}
          >
            Log in
          </Button>
          <Alert
            style={{ paddingTop: "10px", paddingBottom: "0" }}
            show={showError}
            variant="danger"
            onClose={() => setShowError(false)}
            dismissible
          >
            <Alert.Heading style={{ fontSize: "20px" }}>
              Invalid email address or password
            </Alert.Heading>
            <p style={{ fontSize: "16px" }}>Please input correct details</p>
          </Alert>
        </Form>

        <div className="sign-up-container">
          <div className="sign-up-title">
            <h2>New to Pulse Active?</h2>
          </div>
          <div className="sign-up-text">
            <div className="check-marks">
              <p> ✔ Manage your account details</p>
              <p> ✔ Order tracking & history</p>
              <p> ✔ Access the Loyalty Club: </p>
            </div>
            <div className="dot-marks">
              <p>• Collect points & gain valuable benefits </p>
              <p>• Exclusive discounts</p>
            </div>
          </div>
          <Link to="/sign-up">
            <Button variant="primary" type="submit" style={{ width: "300px" }}>
              Sign up
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Login;
