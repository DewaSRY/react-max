import "./Button.module.css";

export default function Button({ value, ...otherProps }) {
  return <button {...otherProps}>{value}</button>;
}
