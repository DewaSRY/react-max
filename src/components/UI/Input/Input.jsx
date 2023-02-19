import classes from "./Input.module.css";

const Input = ({ isValid, label, ...Otherprops }) => {
  return (
    <div className={`${classes.control} ${isValid ? "" : classes.invalid}`}>
      <label>{label}</label>
      <input {...Otherprops} />
    </div>
  );
};

export default Input;
