import React from "react";

const UserProfile = ({ user }) => {
  return !user ? (
    <>
      <p>No user Data Available</p>
    </>
  ) : (
    <>
      <p>
        name: {user.name}, age: {user.age}
      </p>
    </>
  );
};

export default UserProfile;
