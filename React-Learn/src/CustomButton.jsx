export const CustomButton = () => {
  function handleClick(e) {
    console.log("Event:", e);
    console.log("Target:", e.target);
    console.log("X position:", e.clientX);
    console.log("Y position:", e.clientY);
  }

  return <button onClick={handleClick}> Click Me </button>;
};
