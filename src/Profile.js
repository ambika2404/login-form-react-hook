import React from "react";
import { useContext } from "react";
import { LoginContext } from "./LoginContext";

const Profile = () => {
  const { userName } = useContext(LoginContext);
  return (
    <div>
      <h1>Welcome {userName}!! </h1>
      <button>Goto home Page</button>
    </div>
  );
};

export default Profile;
