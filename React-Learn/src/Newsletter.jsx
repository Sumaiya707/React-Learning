import { ActionButton } from "./ActionButton";

export const Newsletter = () => {
  const handleSubscribe = () => {
    alert("Successfully subscribed!");
  };

  return (
    <div>
      <h2>Subscribe to newsletter</h2>

      <ActionButton text="SUBSCRIBE" onClick={handleSubscribe} />
    </div>
  );
};
//This is another PARENT component. It reuses the SAME ActionButton but passes a different function.
