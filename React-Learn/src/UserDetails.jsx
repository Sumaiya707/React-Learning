export const UserDetails = ({ name, isOnline }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{isOnline}</h3>
    </div>
  );
};
