import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, searchUsers } = useContext(GithubContext);

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchUsers(text);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search"
        value={text}
        onChange={handleChange}
      />
      <button className="search-btn" type="submit">
        go
      </button>

      {users.length > 0 && (
        <button className="clear-btn" type="button">
          clear all
        </button>
      )}
    </form>
  );
};

export default UserSearch;
