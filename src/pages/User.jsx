import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

const User = () => {
  const { getUser, user } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    // getUserRepos(params.login);
  }, []);

  return <section className="main-page-container">{user.login}</section>;
};

export default User;
