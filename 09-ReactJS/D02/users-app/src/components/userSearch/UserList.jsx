import users from "../../data/users.js";
import UserCard from "./UserCard.jsx";
import { useState } from "react";
import Search from "./Search.jsx";

function UserList() {
  const [data] = useState(users);
  const [filtered, setFiltered] = useState(users);
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (val) => {
    setSearchVal(val);
    if (val.trim() === "") {
      setFiltered(data);
    } else {
      setFiltered(
        data.filter((user) =>
          user.email.toLowerCase().includes(val.toLowerCase())
        )
      );
    }
  };

  const handleReset = () => {
    setSearchVal("");
    setFiltered(data);
  };

  return (
    <>
      <Search
        searchVal={searchVal}
        onSearch={handleSearch}
        onReset={handleReset}
      />

      <div className="container px-5">
        <div className="row g-4">
          {filtered.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default UserList;
