export const UserInfo = (props) => {
  return (
    <div>
      <p>NAME:{props.name}</p>
      <p>AGE: {props.age}</p>
      <p>CITY: {props.city}</p>
      <p>EMAIL: {props.email}</p>
    </div>
  );
};
