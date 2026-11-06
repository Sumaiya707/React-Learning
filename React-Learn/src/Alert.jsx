export const Alert = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#2f3ab4",
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
