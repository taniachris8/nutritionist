import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";
import "./css/Signup.css";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const _ = await axios.post("http://localhost:8080/users", formData); // eslint-disable-line no-unused-vars
      // Clear the input fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  return (
    <>
      <div className="register-container ">
        <h1 className="register-title">Create an account</h1>
        <Form onSubmit={handleSignUp} className="register-form-container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="your-email@domain.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
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
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <div className="sign-up-page-already-have-an-account">
          <p className="already-have-an-account-paragraph">
            Already have a Pulse Active account?
          </p>
          <Link to="/login" style={{ color: "black" }}>
            <p className="sign-up-page-login-link">Log In</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Signup;
