import React from "react";
import NavBar from "./NavBar";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  // grabs token
  getAccessTokenSilently().then((token) => console.log(token))
  return (
    <>
      <NavBar />
      {isAuthenticated ? <Profile /> : <h1>Please Try Logging In Again</h1>}
    </>
  );
};

export default ProfilePage;
