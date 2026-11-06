export const Greeting = ({ name = "guest", message = "hello" }) => {
  //default props
  return (
    <div>
      <h2>
        {message}, {name}
      </h2>
    </div>
  );
};
