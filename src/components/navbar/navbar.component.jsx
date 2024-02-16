import React from "react";
import { NavLink } from "react-router-dom";

import alberto from "../../assets/images/alberto.svg";
import "./navbar.style.css";

export default function NavBar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary rounded"
        aria-label="Thirteenth navbar example"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample11"
            aria-controls="navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
            <img
              src={alberto}
              alt="logo"
              width="30"
              height="auto"
              className="d-inline-block align-text-top"
            />
            <span className="navbar-brand col-lg-3 me-0">
              Alberto's Portfolio
            </span>

            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <NavLink to="/projectsinprogress" className="nav-link">
                      Projects in Progress
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projectscompleted" className="nav-link">
                      Projects Completed
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact me
                </NavLink>
              </li>
            </ul>
            <div class="d-lg-flex col-lg-3 justify-content-lg-end">
              <button class="btn btn-primary">Button</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
