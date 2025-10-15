const Button = ({ text, type }) => {
  // Define simple style logic based on prop
  const getStyle = () => {
    if (type === "primary") return { backgroundColor: "blue", color: "white", padding: "10px 20px", borderRadius: "5px" };
    if (type === "danger") return { backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px" };
    if (type === "secondary") return { backgroundColor: "gray", color: "white", padding: "10px 20px", borderRadius: "5px" };
    return { backgroundColor: "black", color: "white" }; // default
  };

  return (
    <button style={getStyle()}>
      {text}
    </button>
  );
};

export default Button;
