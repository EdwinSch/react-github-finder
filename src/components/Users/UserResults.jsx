import { useContext } from "react";
import UserItem from "./UserItem";
import Loader from "../Layout/Loader";
import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {
  const { users, isLoading } = useContext(GithubContext);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid-container">
      {users.map((user) => {
        return <UserItem key={user.id} {...user} />;
      })}
    </div>
  );
};

export default UserResults;
