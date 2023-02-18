import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import InputForm from "../UI/InpuntForm";
import classes from "./AddUser.module.css";

const ENTERED_FORM = {
  username: "",
  age: "",
};

export default function AddUser({ onAddUser }) {
  const [enteeredForm, setEnteredForm] = useState(ENTERED_FORM);
  const { username, age } = enteeredForm;
  const [error, setError] = useState(null);

  const addUserSumbit = (event) => {
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

    onAddUser(enteeredForm);
    setEnteredForm(ENTERED_FORM);
  };

  const EnteredFildHeandler = (event) => {
    const { name, value } = event.target;
    setEnteredForm({ ...enteeredForm, [name]: value });
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
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserSumbit}>
          <InputForm
            label="Username"
            name="username"
            type="text"
            value={username}
            onChange={EnteredFildHeandler}
          />
          <InputForm
            label="Age"
            name="age"
            type="number"
            value={age}
            onChange={EnteredFildHeandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
