import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function LoginModal(props) {
  return (
    <>
      <div className="login-modal">
        <Modal show={props.show} onHide={props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title className="login-modal-title">
              <div>{props.title}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-3">
            <p>{props.firstLine}</p>
            <p>{props.secondLine}</p>
          </Modal.Body>
          <Modal.Footer className="login-modal-buttons justify-content-between">
            <Link to="/sign-up">
              <Button
                className="modal-register-button"
                variant="primary"
                onClick={() => props.onHide()}
              >
                Create Account
              </Button>
            </Link>
            <Link to="/login">
              <Button
                className="modal-login-button"
                variant="dark"
                onClick={() => props.onHide()}
              >
                Log In
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default LoginModal;
