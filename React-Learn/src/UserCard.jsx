import { UserInfo } from "./UserInfo";

export const UserCard = (props) => {
  return (
    <div>
      <h>User DETAILS</h>
      <UserInfo {...props} />
    </div>
  );
};
