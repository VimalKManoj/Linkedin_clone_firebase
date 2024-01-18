import React, { useState } from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
const SearchComponent = ({
  setSearchInput,
  searchInput,
  allUsers,
  searchedUser,
}) => {
  const [showResults, setShowResults] = useState(true);
  let navigate = useNavigate();
  const openUser = (user) => {
    navigate("/profile", { state: { id: user.id, email: user.email } });
    setSearchInput("");
    setShowResults(false);
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    setShowResults(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 100);
  };

  return (
    <div className="search_container">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {searchInput.length === 0 || !showResults ? (
        <></>
      ) : (
        <div className="search-results">
          {searchedUser.length === 0 ? (
            <div className="single-user">No user found</div>
          ) : (
            searchedUser.map((user) => (
              <div
                key={user.id}
                className="single-user"
                onClick={() => {
                  openUser(user);
                }}
              >
                <Avatar className="avatar" src={user.profileLink} />
                <div>
                  <p>{user.name}</p>
                  <p className="single-job">{user.job}</p>
                  <p className="single-place">{user.place}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
