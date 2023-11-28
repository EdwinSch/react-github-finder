import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import Loader from "../Layout/Loader";

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("https://api.github.com/users", {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

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
