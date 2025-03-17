const Button = ({
  label,
  onClick,
  color = "blue",
  type = "button",
  ml = "0",
}) => {
  const colors = {
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
    green: "bg-green-500",
    gray: "bg-gray-500",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${colors[color]} text-white px-2 py-1 rounded mt-2 ml-${ml} cursor-pointer`}
    >
      {label}
    </button>
  );
};

export default Button;
