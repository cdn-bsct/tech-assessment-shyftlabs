import React from "react";
import "./navigation-panel.css";

import { Link } from "../link/link";

export default function NavigationPanel() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-header">Student Management</div>
        <div className="navlink-container">
          <Link title="Home" destination="/" />
          <Link title="Students" destination="/students" />
          <Link title="Courses" destination="/courses" />
          <Link title="Results" destination="/results" />
        </div>
      </div>
    </>
  );
}
