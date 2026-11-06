export const UserDetails = ({ name, isOnline }) => {
  if (isOnline) {
    return (
      <div>
        <h3>{name}</h3>
        <span> online </span>
        <p>available for chat</p>
        <button>send message</button>
        <h3>{isOnline}</h3>
      </div>
    );
  }
  return (
    <div>
      <h3>{name}</h3>
      <span>offline</span>
      <p> not available</p>
      <small>check back later</small>
    </div>
  );
};
