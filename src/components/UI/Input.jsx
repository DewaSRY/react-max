import classes from "./Input.module.css";

const Input = ({ label, ...OtherProps }) => {
  return (
    <div className={classes.input}>
      <label>{label}</label>
      <input {...OtherProps} />
    </div>
  );
};

export default Input;
