import { useState } from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import AuthenticationGuard from "./components/AuthenticationGuard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/profile" element={<AuthenticationGuard component={ProfilePage}/>} />
        </Routes>
      </BrowserRouter>
      {/* <NavBar />
      <Profile />
      <LoginButton />
      <LogoutButton /> */}
    </>
  );
}

export default App;
