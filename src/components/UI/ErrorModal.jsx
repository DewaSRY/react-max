import React from "react";
import { createPortal } from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = ({ onConfirm }) => {
  return <div className={classes.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ onConfirm, title, message }) => {
  const getElement = (id) => document.getElementById(id);

  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        getElement("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        getElement("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
