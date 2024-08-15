import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  // Built in hook from Auth0 that gives us access to our user information and our authenticated status (whether we are logged in or not) among other things
  const { user, isAuthenticated } = useAuth0();

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Auth0 App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isAuthenticated ? (
            <>
              <Navbar.Text className="mx-3">
                Signed in as: <a href="/profile">{user?.name}</a>
              </Navbar.Text>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
