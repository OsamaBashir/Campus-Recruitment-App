import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import PostJob from "../Pages/company/PostJob";
const Header = () => {
  const state = useSelector((state) => state);
  const auth = state.auth;

  const role = auth?.users?.role;

  const [open, setOpen] = useState(false);

  const history = useHistory();

  const showModal = () => {
    setOpen(true);
  };

  const toggleModal = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    history.push("/");
  };

  const company = [
    {
      to: "./vacancy",
      name: "Vacancies",
    },
    {
      to: "./profile",
      name: "Profile",
    },
  ];
  const student = [
    {
      to: "./companies",
      name: "Companies",
    },
    {
      to: "./alljobs",
      name: "All Jobs",
    },
    {
      to: "./appliedjobs",
      name: "Applied Jobs",
    },
    {
      to: "./profile",
      name: "Profile",
    },
  ];

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./vacancies">
            Campus Recruitment System
          </Navbar.Brand>
          <Nav className="me-auto">
            {role === "student"
              ? student.map((value) => (
                  <Nav.Link as={Link} to={value.to}>
                    {value.name}
                  </Nav.Link>
                ))
              : role === "company"
              ? company.map((value) => (
                  <Nav.Link as={Link} to={value.to}>
                    {value.name}
                  </Nav.Link>
                ))
              : null}
          </Nav>
          {role === "student" ? (
            <Button
              className="buttonlogout"
              variant="outline-light"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : role === "company" ? (
            <>
              <Button
                className="navbutton"
                variant="outline-success"
                onClick={showModal}
              >
                Post Job
              </Button>
              <Button
                className="buttonlogout"
                variant="outline-light"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : null}
        </Container>
      </Navbar>

      <PostJob open={open} toggleModal={toggleModal} />
    </div>
  );
};

export default Header;
