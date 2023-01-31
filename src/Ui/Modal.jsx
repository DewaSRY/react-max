import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
const portalEl = document.getElementById("overlays");
const Modal = ({ children, onClick }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClick={onClick} />, portalEl)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </Fragment>
  );
};

export default Modal;
