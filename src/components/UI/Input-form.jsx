import "./Input-form.module.css";
export default function FormInput({ label, ...otherProps }) {
  if (!label) {
    return;
  }
  return (
    <div className="new-expense__control">
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
}
