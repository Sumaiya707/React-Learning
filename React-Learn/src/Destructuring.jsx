export function Destructuring({ name, age, isStudent, skills }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
      <p>Skills: {skills.join(", ")}</p>
    </div>
  );
}
