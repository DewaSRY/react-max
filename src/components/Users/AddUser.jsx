import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import InputField from "../UI/InputField";
import classes from "./AddUser.module.css";

const ENTERED_FIELD = {
  username: "",
  age: "",
};

const AddUser = ({ onAddUser }) => {
  const [enteredField, setEnteredField] = useState(ENTERED_FIELD);
  const { username, age } = enteredField;
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    onAddUser(enteredField);
    setEnteredField(ENTERED_FIELD);
  };

  const enteredChangeHandler = (event) => {
    const { name, value } = event.target;
    setEnteredField({ ...enteredField, [name]: value });
  };

  const errorHandler = () => setError(null);

  if (error) {
    return (
      <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />
    );
  }

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <InputField
            label="Username"
            name="username"
            type="text"
            value={username}
            onChange={enteredChangeHandler}
          />
          <InputField
            label="Age (Years)"
            name="age"
            type="number"
            value={age}
            onChange={enteredChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
