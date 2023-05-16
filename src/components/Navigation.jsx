import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div class="navigation">
      <nav class="navbar navbar-expand navbar-light bg-light mb-5">
        <div class="container">
          <NavLink className="navbar-brand" to="/">
            <h4 class="text-primary">
              <span class="fa-solid fa-droplet" />&nbsp;&nbsp; BP Category Calculator
            </h4>
          </NavLink>
          <div>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <NavLink className="btn btn-outline-primary" to="/history">
                <h6 style={{padding: 0, margin: 0}}><span class="fa-solid fa-history"></span>&nbsp;History</h6>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
