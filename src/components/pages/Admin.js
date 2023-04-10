import React from "react";
import { Link } from "react-router-dom";
import "./Pages.scss";
function Admin() {
  return (
    <div className="page">
      <h2 className="page__name">ADMIN PAGE</h2>
      <p className="page__message">
        This page is only visible if you are logged in as an <b>ADMIN.</b>
      </p>
      <div className="page__content">
        <p className="page__content--item">ADMIN 1</p>
        <p className="page__content--item">ADMIN 2</p>
        <p className="page__content--item">ADMIN 3</p>
        <p className="page__content--item">ADMIN 4</p>
      </div>
      <Link className="login__link" to="/">
        &larr; Go to the Home page
      </Link>
    </div>
  );
}

export default Admin;
