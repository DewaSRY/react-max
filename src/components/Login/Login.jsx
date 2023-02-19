import React, { useState, useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";

const INITIAL_FORM = {
  email: "",
  password: "",
};

const Login = () => {
  const [formField, setFormField] = useState(INITIAL_FORM);
  const { email, password } = formField;
  const { onLogin, passwordValid, emailValid } = useContext(AuthContext);

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formField);
    onLogin(email, password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          name="email"
          label="E-Mail"
          type="email"
          isValid={emailValid}
          value={email}
          onChange={formChangeHandler}
          // onBlur={validateEmailHandler}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          isValid={passwordValid}
          value={password}
          onChange={formChangeHandler}
          // onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
