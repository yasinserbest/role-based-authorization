import React from "react";
import "./Pages.scss";
import { Link } from "react-router-dom";
function Editor() {
  return (
    <div className="page">
      <h2 className="page__name">EDITORS PAGE</h2>
      <p className="page__message">
        This page is only visible if you are logged in as an <b>EDITOR.</b>
      </p>
      <div className="page__content">
        <p className="page__content--item">EDITOR 1</p>
        <p className="page__content--item">EDITOR 2</p>
        <p className="page__content--item">EDITOR 3</p>
        <p className="page__content--item">EDITOR 4</p>
      </div>
      <Link className="login__link" to="/">
        &larr; Go to the Home page
      </Link>
    </div>
  );
}

export default Editor;
