const OptionsInput = ({ options, setOptions }) => (
  <div className="mt-4">
    <label className="block">Options:</label>
    {options.map((opt, index) => (
      <input
        key={index}
        type="text"
        value={opt}
        onChange={(e) => {
          const newOptions = [...options];
          newOptions[index] = e.target.value;
          setOptions(newOptions);
        }}
        className="border p-2 w-full mt-2"
      />
    ))}
  </div>
);

export default OptionsInput;
