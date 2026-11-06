export const Alert = ({ children, type = "success" }) => {
  return (
    <div
      style={{
        backgroundColor: type === "success" ? "#55c688" : "#c61151",
        color: "Black",
        padding: "16px",
        borderRadius: "10px",
        marginBottom: "17px",
      }}
    >
      {children}
    </div>
  );
};
