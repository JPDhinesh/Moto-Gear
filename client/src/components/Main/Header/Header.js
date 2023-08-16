import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <div className={classes.header}>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand className={classes.heading}>Motor ProGear</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${classes.userProfile} ms-auto`}>
              <Link to="">Sign in</Link>
              <Link to="">Sign up</Link>
              <Link to="">My Cart</Link>
              <Link to="/about">
                <i
                  className="fas fa-info-circle"
                  data-toggle="tooltip"
                  title="About"
                ></i>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
