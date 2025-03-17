const InputField = ({ label, value, onChange, required, type }) => (
  <div className="mt-4">
    <label className="block">{label}:</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="border p-2 w-full"
    />
  </div>
);

export default InputField;
