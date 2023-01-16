import React from "react";
import Card from "./Card-component";
import Button from "./Button-componenet";
import "./error.css";
const ErrorModel = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <Card className={"model"}>
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button addClick={props.onConfirm}>okey</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModel;
