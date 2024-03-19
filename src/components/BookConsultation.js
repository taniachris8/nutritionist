import React from "react";
import { useState, useRef } from "react";
import "./componentsCss/BookConsultation.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";

function BookConsultation({ onHide, showBookConsultation }) {
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    userName: false,
    userEmail: false,
    userPhone: false,
    message: false,
  });
  const [showFieldError, setShowFieldError] = useState(false);
  const [inputNameFocused, setInputNameFocused] = useState(false);
  const [inputEmailFocused, setInputEmailFocused] = useState(false);
  const [inputMessageFocused, setInputMessageFocused] = useState(false);
  const [inputPhoneFocused, setInputPhoneFocused] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowFieldError(true);
      return;
    }

    emailjs
      .sendForm("service_o63h0md", "template_8hrbezg", form.current, {
        publicKey: "S3NkJowHFmQ-Rhco_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowAlert(true);
          setUserName("");
          setUserPhone("");
          setUserEmail("");
          setMessage("");
          setFormErrors({
            userName: false,
            userEmail: false,
            userPhone: false,
            message: false,
          });
          setInputNameFocused(false);
          setInputEmailFocused(false);
          setInputMessageFocused(false);
          setInputPhoneFocused(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setShowErrorAlert(true);
        }
      );
    e.target.reset();
  };
  const validateForm = () => {
    let isValid = true;
    const errors = {
      userName: !userName.trim(),
      userEmail: !userEmail.trim() || !isValidEmail(userEmail),
      userPhone: !userPhone.trim(),
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
    <>
      <Modal onHide={onHide} show={showBookConsultation}>
        <Modal.Header closeButton>
          <p className="book-modal-title">
            Пожалуйста, введите ваши данные для записи:
          </p>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Введите имя"
                autoFocus
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onFocus={
                  (() => setInputNameFocused(true),
                  () => setShowFieldError(false))
                }
                onBlur={() => setInputNameFocused(false)}
                className={
                  (formErrors.userName && !userName) ||
                  (formErrors.userName &&
                    !inputNameFocused &&
                    !inputEmailFocused &&
                    !inputPhoneFocused &&
                    !inputMessageFocused)
                    ? "error"
                    : ""
                }
              />
              {formErrors.userName &&
                !userName &&
                !inputNameFocused &&
                !inputEmailFocused &&
                !inputPhoneFocused &&
                !inputMessageFocused && (
                  <p className="error-message">Пожалуйста, введите Ваше имя</p>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control
                type="text"
                name="user_phone"
                placeholder="Введите номер телефона"
                autoFocus
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                onFocus={
                  (() => setInputPhoneFocused(true),
                  () => setShowFieldError(false))
                }
                onBlur={() => setInputPhoneFocused(false)}
                className={
                  (formErrors.userPhone && !userPhone) ||
                  (formErrors.userPhone &&
                    !inputNameFocused &&
                    !inputEmailFocused &&
                    !inputPhoneFocused &&
                    !inputMessageFocused)
                    ? "error"
                    : ""
                }
              />
              {formErrors.userPhone &&
                !userPhone &&
                !inputNameFocused &&
                !inputEmailFocused &&
                !inputPhoneFocused &&
                !inputMessageFocused && (
                  <p className="error-message">
                    Пожалуйста, введите Ваш номер телефона
                  </p>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Адрес электронной почты</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="name@example.com"
                autoFocus
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                onFocus={
                  (() => setInputEmailFocused(true),
                  () => setShowFieldError(false))
                }
                onBlur={() => setInputEmailFocused(false)}
                className={
                  (formErrors.userEmail && !userEmail) ||
                  (formErrors.userEmail &&
                    !inputNameFocused &&
                    !inputEmailFocused &&
                    !inputPhoneFocused &&
                    !inputMessageFocused)
                    ? "error"
                    : ""
                }
              />
              {formErrors.userEmail &&
                !userName &&
                !inputNameFocused &&
                !inputEmailFocused &&
                !inputPhoneFocused &&
                !inputMessageFocused && (
                  <p className="error-message">
                    *Пожалуйста, введите адрес электронной почты в формате
                    'name@example.com'
                  </p>
                )}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Комментарий</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={
                  (() => setInputMessageFocused(true),
                  () => setShowFieldError(false))
                }
                onBlur={() => setInputMessageFocused(false)}
                className={
                  (formErrors.message && !message) ||
                  (formErrors.message &&
                    !inputNameFocused &&
                    !inputEmailFocused &&
                    !inputPhoneFocused &&
                    !inputMessageFocused)
                    ? "error"
                    : ""
                }
              />
              {formErrors.message &&
                !message &&
                !inputNameFocused &&
                !inputEmailFocused &&
                !inputPhoneFocused &&
                !inputMessageFocused && (
                  <p className="error-message">
                    *Пожалуйста, введите Ваше сообщение
                  </p>
                )}
            </Form.Group>
            <div className="book-button-container">
              <button type="submit" value="Send" className="book-btn">
                Отправить
              </button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p className="book-prg">
            Отправляя свои персональные данные, Вы соглашаетесь с положением о
            персональных данных
          </p>
        </Modal.Footer>
        <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
          className="book-success-message"
        >
          <p className="alert-message-prg">
            Ваш запрос был успешно отправлен! Мы свяжемся с вами в ближайшее
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
      </Modal>
    </>
  );
}

export default BookConsultation;
