import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState(false);

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text === "") {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 1500);
      return;
    }
    searchUsers(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputError && <p className="input-error">empty search</p>}

      <input
        type="text"
        placeholder="Search GitHub User"
        value={text}
        onChange={handleChange}
      />
      <button className="search-btn" type="submit">
        go
      </button>

      {users.length > 0 && (
        <button
          onClick={clearUsers}
          className="nav-btn clear-btn"
          type="button"
        >
          clear results
        </button>
      )}
    </form>
  );
};

export default UserSearch;
