import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./componentsCss/RequestForm.css";
import Alert from "react-bootstrap/Alert";

function RequestForm() {
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    userName: false,
    userEmail: false,
    message: false,
  });
  const [showFieldError, setShowFieldError] = useState(false);
  const [inputNameFocused, setInputNameFocused] = useState(false);
  const [inputEmailFocused, setInputEmailFocused] = useState(false);
  const [inputMessageFocused, setInputMessageFocused] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowFieldError(true);
      return;
    }

    emailjs
      .sendForm("service_ngq7wue", "template_dmnvpjd", form.current, {
        publicKey: "S3NkJowHFmQ-Rhco_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowAlert(true);
          setUserName("");
          setUserEmail("");
          setMessage("");
          setFormErrors({
            userName: false,
            userEmail: false,
            message: false,
          });
          setInputNameFocused(false);
          setInputEmailFocused(false);
          setInputMessageFocused(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setShowErrorAlert(true);
        }
      );
    e.target.reset();
  };

  const handleInputChange = (e) => {
    const input = e.target;
    if (input.value.trim() === "") {
      input.setAttribute("placeholder", input.getAttribute("data-placeholder"));
    } else {
      input.removeAttribute("placeholder");
    }
  };
  const validateForm = () => {
    let isValid = true;
    const errors = {
      userName: !userName.trim(),
      userEmail: !userEmail.trim() || !isValidEmail(userEmail),
      message: !message.trim(),
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      isValid = false;
      if (!isValidEmail(userEmail)) {
        setShowFieldError(false); // Don't show the general error message
      } else {
        setShowFieldError(true); // Set showFieldError to true if any field is empty
      }
    } else {
      setShowFieldError(false); // Otherwise, set it to false
    }

    return isValid;
  };
  const isValidEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="request-form-container">
      <h1 className="request-form-hdr">
        Запишитесь на бесплатную консультацию
      </h1>
      <p className="request-form-prg">
        Я подберу для вас оптимальную программу, исходя из ваших потребностей и
        индивидуальных особенностей
      </p>
      <form ref={form} className="request-form" onSubmit={sendEmail}>
        <div className="input-group">
          <div className="input-container">
            <input
              type="text"
              name="user_name"
              id="name"
              className={`input name-input ${
                (formErrors.userName && !userName) ||
                (formErrors.userName &&
                  !inputNameFocused &&
                  !inputEmailFocused &&
                  !inputMessageFocused)
                  ? "error"
                  : ""
              }`}
              data-placeholder="Например, Иван Иванов"
              placeholder="Например, Иван Иванов"
              onChange={(e) => {
                handleInputChange(e);
                setUserName(e.target.value);
              }}
              onFocus={() => {
                setInputNameFocused(true);
                setShowFieldError(false);
              }}
              onBlur={() => setInputNameFocused(false)}
              value={userName}
            />
            {formErrors.userName &&
              !userName &&
              !inputNameFocused &&
              !inputEmailFocused &&
              !inputMessageFocused && (
                <p className="error-message">Пожалуйста, введите Ваше имя</p>
              )}
            <label for="name" class="input-label">
              Ваше имя
            </label>
          </div>
          <div className="input-container">
            <input
              type="email"
              id="name"
              name="user_email"
              data-placeholder="Например, ivanivavov@gmail.com"
              placeholder="Например, ivanivavov@gmail.com"
              value={userEmail}
              onChange={(e) => {
                handleInputChange(e);
                setUserEmail(e.target.value);
              }}
              onFocus={
                (() => setInputEmailFocused(true),
                () => setShowFieldError(false))
              }
              onBlur={() => setInputEmailFocused(false)}
              className={`input email-input ${
                (formErrors.userEmail && !userEmail) ||
                (formErrors.userEmail &&
                  !inputNameFocused &&
                  !inputEmailFocused &&
                  !inputMessageFocused)
                  ? "error"
                  : ""
              }`}
            />
            {formErrors.userEmail &&
              !userName &&
              !inputNameFocused &&
              !inputEmailFocused &&
              !inputMessageFocused && (
                <p className="error-message">
                  *Пожалуйста, введите адрес электронной почты в формате
                  'name@example.com'
                </p>
              )}
            <label for="email" class="input-label">
              Email
            </label>
          </div>
        </div>
        <div className="input-container">
          <textarea
            type="text"
            id="name"
            name="message"
            value={message}
            data-placeholder="Здесь вы можете оставить комментарий"
            placeholder="Здесь вы можете оставить комментарий"
            onChange={(e) => {
              handleInputChange(e);
              setMessage(e.target.value);
            }}
            onFocus={
              (() => setInputMessageFocused(true),
              () => setShowFieldError(false))
            }
            onBlur={() => setInputMessageFocused(false)}
            className={`input message-input ${
              (formErrors.message && !message) ||
              (formErrors.message &&
                !inputNameFocused &&
                !inputEmailFocused &&
                !inputMessageFocused)
                ? "error"
                : ""
            }
            `}
          />
          {formErrors.message &&
            !message &&
            !inputNameFocused &&
            !inputEmailFocused &&
            !inputMessageFocused && (
              <p className="error-message">
                *Пожалуйста, введите Ваше сообщение
              </p>
            )}
          <label for="message" className="input-label">
            Сообщение
          </label>
        </div>
        <button type="submit" value="Send" className="request-form-btn">
          Хочу консультацию
        </button>
      </form>
      <Alert
        variant="success"
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible
        className="success-alert-message"
      >
        <p className="alert-message-prg">
          Ваше сообщение было успешно отправлено! Мы свяжемся с вами в ближайшее
          время.
        </p>
      </Alert>
      <Alert
        variant="danger"
        show={showErrorAlert}
        onClose={() => setShowErrorAlert(false)}
        dismissible
        className="error-alert-message"
      >
        <p className="alert-message-prg">
          Что-то пошло не так... Пожалуйста, заполните форму снова.
        </p>
      </Alert>
      <Alert
        variant="danger"
        show={showFieldError}
        onClose={() => setShowFieldError(false)}
        dismissible
        className="error-alert-message"
      >
        <p className="alert-message-prg">
          Пожалуйста, заполните все поля для отправки формы.
        </p>
      </Alert>
    </div>
  );
}

export default RequestForm;
