//

export default function InputField({ label, ...OtherProps }) {
  return (
    <>
      <label htmlFor="age">{label}</label>
      <input {...OtherProps} />
    </>
  );
}
