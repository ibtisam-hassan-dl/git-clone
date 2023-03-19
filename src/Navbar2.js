import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Logo from "./github-mark-white.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg" id="outerNav">
      <div class="container-fluid">
        <img src={Logo} alt="logo.png" id="logo"></img>
        <div class="navbar-collapse" id="navbarScroll innerNav">
          <ul class="navbar-nav me-auto my-2 my-lg-0">
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle navButtons"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle navButtons"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle navButtons"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Open Source
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link navButtons" href="/">
                Pricing
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <button className="btn buttons">Sign In</button>
          <button className="btn buttons-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
