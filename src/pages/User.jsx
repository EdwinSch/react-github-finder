import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import Loader from "../components/Layout/Loader";
import NavButton from "../components/Layout/NavButton";
import Card from "../components/Layout/Card";
import { FaCodepen, FaStore, FaUsers, FaUserFriends } from "react-icons/fa";
import StatsCard from "../components/Layout/StatsCard";

const User = () => {
  const { getUser, user, isLoading } = useContext(GithubContext);
  const params = useParams();

  // destructure
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(params.login);
    // getUserRepos(params.login);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="main-page-container pad-x">
      {/* home btn */}
      <NavButton route="/" label="< back to search" />
      {/* Userinfo */}
      <div className="userinfo-container">
        <img src={avatar_url} alt="user avatar" />

        <div className="user-wrapper">
          <div className="user-header">
            <h4>{name}</h4>
            <p className="badge">{type}</p>
            {hireable ? <p className="badge">hireable</p> : null}
          </div>
          <p className="username">{login}</p>
          <p className="bio">{bio}</p>
          <a
            href={html_url}
            target="_blank"
            rel="norefferer"
            className="github-btn"
          >
            visit github profile
          </a>
          {/* Cards */}
          <div className="cards-wrapper">
            {/* Location */}
            {!location || (
              <Card type="card-container-sm" label="location" info={location} />
            )}
            {/* Website */}
            {!blog || (
              <Card type="card-container-sm" label="website" info={blog} />
            )}
            {/* Twitter */}
            {!twitter_username || (
              <Card
                type="card-container-sm"
                label="X"
                info={`@${twitter_username}`}
              />
            )}
          </div>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="stat-cards-row">
        <StatsCard label="followers" stat={followers} icon={<FaUsers />} />
        <StatsCard
          label="following"
          stat={following}
          icon={<FaUserFriends />}
        />
        <StatsCard
          label="public repos"
          stat={public_repos}
          icon={<FaCodepen />}
        />
        <StatsCard
          label="public gists"
          stat={public_gists}
          icon={<FaStore />}
        />
      </div>
    </section>
  );
};

export default User;
