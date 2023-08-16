import React from "react";
import { Container } from "react-bootstrap";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

export const MainNavigation = () => {
  return (
    <Container>
      <header className={classes.header}>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/helmet"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Helmet
          </NavLink>
          <NavLink
            to="/jacket"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Jackets
          </NavLink>
          <NavLink
            to="/pant"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Pants
          </NavLink>
          <NavLink
            to="/glove"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Gloves
          </NavLink>
          <NavLink
            to="/boot"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Boots
          </NavLink>
          <NavLink
            to="/backbag"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Backbags
          </NavLink>
          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Accessories
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};
