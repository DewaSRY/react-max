import classes from "./Form.input.module.css";

const FormInput = ({ className, title, ...otherporps }) => {
  return (
    <div className={classes.formInput}>
      <label>{title}</label>
      <input {...otherporps} />
    </div>
  );
};

export default FormInput;
