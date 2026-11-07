export const CustomeButton = () => {
  const handleClick = () => {
    alert("THANKS FOR LIKING ");
  };

  return <button onClick={handleClick}> LIKE </button>;
};
