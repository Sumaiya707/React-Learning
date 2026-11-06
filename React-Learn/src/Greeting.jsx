export const Greeting = ({ name = "guest", message = "hello" }) => {
  return (
    <div>
      <h2>
        {message}, {name}
      </h2>
    </div>
  );
};
