import React from "react";
import { Route, Link } from "react-router-dom";

export const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var activeClass = match ? "active" : "";
        return (
          <li className={activeClass}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
