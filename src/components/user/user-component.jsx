import React, { useState } from "react";
import "./user.css";

import ErrorModel from "../Ui/Error-componen";
import Button from "../Ui/Button-componenet";
import Card from "../Ui/Card-component";

const default_user = {
  name: "",
  age: "",
};

const Adduser = ({ onAddUser }) => {
  const [userField, setUserField] = useState(default_user);
  const [aler, setAlert] = useState(false);
  const { name, age } = userField;

  const changeHeandler = (event) => {
    const { name, value } = event.target;
    setUserField({ ...userField, [name]: value });
  };
  const AddUserHeandler = (event) => {
    event.preventDefault();
    userField.name.trim().length === 0 || userField.age.trim().length === 0
      ? setAlert(true)
      : onAddUser(userField);

    setUserField(default_user);
  };
  const errorHandler = () => {
    setAlert(false);
  };
  return (
    <div>
      {aler && (
        <ErrorModel
          title={"hallo"}
          message={"halllo"}
          onConfirm={errorHandler}
        />
      )}

      <Card className="input">
        <form onSubmit={AddUserHeandler}>
          <label htmlFor="">User Name</label>
          <input
            name="name"
            value={name}
            onChange={changeHeandler}
            id="userName"
            type="text"
          />
          <label htmlFor="ageUser">Age (Years)</label>
          <input
            name="age"
            value={age}
            onChange={changeHeandler}
            id="ageUser"
            type="number"
            min={0}
          />
          <Button>Add New User</Button>
        </form>
      </Card>
    </div>
  );
};
export default Adduser;
