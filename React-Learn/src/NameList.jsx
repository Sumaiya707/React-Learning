export const NameList = () => {
  // 1. Create an array of objects
  const names = [
    { id: 1, name: "Bruce" },
    { id: 2, name: "Clark" },
    { id: 3, name: "Bruce" },
    { id: 4, name: "Diana" },
  ];

  // 2. Use map() to create a list
  const nameList = names.map((person) => (
    <h2 key={person.id}>{person.name}</h2>
  ));

  // 3. Render the list
  return (
    <div>
      <h1>Name List</h1>
      {nameList}
    </div>
  );
};
