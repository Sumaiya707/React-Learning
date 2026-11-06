export function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      <p>Age: {props.age}</p>

      <p>Student: {props.isStudent ? "Yes" : "No"}</p>

      <p>Skills: {props.skills.join(", ")}</p>

      <button onClick={props.handleClick}>Click Me</button>
    </div>
  );
}
