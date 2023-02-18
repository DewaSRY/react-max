//
export default function InputForm({ label, ...otherprops }) {
  return (
    <>
      <label htmlFor="age">{label} (Years)</label>
      <input {...otherprops} />
    </>
  );
}
