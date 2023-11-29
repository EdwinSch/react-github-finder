import { Link } from "react-router-dom";

const UserItem = ({ login, avatar_url }) => {
  return (
    <div className="user-card">
      <img src={avatar_url} alt="profile avatar" />
      <div className="info-wrapper">
        <p className="username">{login}</p>
        <Link to={`/user/${login}`} className="visit-profile-link">
          visit profile
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
