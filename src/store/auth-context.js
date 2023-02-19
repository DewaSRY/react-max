import { useEffect, createContext, useReducer } from "react";
export const createAction = (type, payload) => ({ type, payload });
//       passwordValid: action.val.trim().length > 6
//      emailValid: state.value.includes("@") }

const AuthContext = createContext({
  isLoggedIn: false,
  passwordValid: true,
  emailValid: true,
  onLogout: () => {},
  onLogin: (email, password) => {},
});
const ACTION_FORM = {
  SET_FORM: "SET_FORM",
};

const INITIAL_FORM = {
  isLoggedIn: false,
  passwordValid: true,
  emailValid: true,
  // email: "",
  // password: "",
};
const AuthReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_FORM.SET_FORM:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unheandel type ${type} in userReducer`);
  }
};

export const AuthContextProvider = ({ children }) => {
  const [{ isLoggedIn, passwordValid, emailValid }, dispact] = useReducer(
    AuthReducer,
    INITIAL_FORM
  );
  console.log("passwordValid", passwordValid);
  console.log("emailValid", emailValid);
  const setIsLoggedIn = (bool) =>
    dispact(createAction(ACTION_FORM.SET_FORM, { isLoggedIn: bool }));
  const setValidation = (email, password) => {
    const setEmail = email.includes("@");
    const setPassword = password.trim().length > 6;
    const payload = {
      passwordValid: setPassword,
      emailValid: setEmail,
    };
    dispact(createAction(ACTION_FORM.SET_FORM, payload));
  };
  useEffect(() => {
    const localUser = localStorage.getItem("isLoggedIn");
    if (localUser === "1") setIsLoggedIn(true);
  }, []);
  const onLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const onLogin = (email, password) => {
    setValidation(email, password);
    if (passwordValid && emailValid) {
      console.log("passwordValid1", passwordValid);
      console.log("emailValid1", emailValid);
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    }
  };
  const value = {
    isLoggedIn,
    setValidation,
    onLogout,
    onLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
