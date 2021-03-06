import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav">
      <Link to="/" id="logo">
        <div id="icon"></div>
        <div className="vcenter">React</div>
      </Link>
      <div className="navitem">
        <NavLink to="/counter" className="vcenter">
          Counter
        </NavLink>
      </div>
      <div className="navitem">
        <NavLink to="/time" className="vcenter">
          Time
        </NavLink>
      </div>
      <div className="navitem">
        <NavLink to="/lifecycle" className="vcenter">
          Lifecycle
        </NavLink>
      </div>
      <div className="navitem">
        <NavLink to="/hooks" className="vcenter">
          Hooks
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
