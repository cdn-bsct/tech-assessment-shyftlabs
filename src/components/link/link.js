import React from "react";
import { NavLink } from "react-router-dom";

export function Link({ title, destination, isActive }) {
  return (
    <>
      <NavLink
        to={destination}
        style={(isActive) => ({
          color: isActive ? "#000080" : "#000000",
          textDecoration: isActive ? "none" : "none",
        })}
      >
        {title}
      </NavLink>
    </>
  );
}
