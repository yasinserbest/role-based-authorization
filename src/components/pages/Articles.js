import React from "react";
import { Link } from "react-router-dom";
import "./Pages.scss";

function Articles() {
  return (
    <div className="page">
      <h2 className="page__name">ARTICLES PAGE</h2>
      <p className="page__message">
        This page is only visible if you are logged in as an <b>AUTHOR.</b>
      </p>
      <div className="page__content">
        <p className="page__content--item">ARTICLE 1</p>
        <p className="page__content--item">ARTICLE 2</p>
        <p className="page__content--item">ARTICLE 3</p>
        <p className="page__content--item">ARTICLE 4</p>
      </div>
      <Link className="login__link" to="/">
        &larr; Go to the Home page
      </Link>
    </div>
  );
}

export default Articles;
