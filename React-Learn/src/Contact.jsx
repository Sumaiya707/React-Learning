import { ActionButton } from "./ActionButton"; //This is the PARENT component. It creates the function and passes it to ActionButton.

export const Contact = () => {
  const handleSendMessage = () => {
    alert("Sending message!");
  };

  return (
    <div>
      <h2>CONTACT US</h2>

      <ActionButton text="SEND MESSAGE" onClick={handleSendMessage} />
    </div>
  );
};
