import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Button from "../utilities/Button";
import "./Home.scss";
function Home() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);

  return (
    <div className="home">
      <h1 className="home__title">Home Page</h1>

      {authCtx.isLoggedIn ? (
        <div className="home__isAuthorized">
          <span className="home__isAuthorized--detail">You're signed as</span>
          <span className="home__isAuthorized--name">
            {authCtx.user.roles[0]}
          </span>
        </div>
      ) : (
        <div className="home__isAuthorized">
          <span className="home__isAuthorized--detail">
            You are not logged in!
          </span>
          <Link
            className="home__links--item home__isAuthorized--name"
            to="/login"
          >
            Please Login
          </Link>
        </div>
      )}
      <div className="home__links">
        <Link className="home__links--item" to="/admin">
          Go to the Admin page
        </Link>
        <Link className="home__links--item" to="/editor">
          Go to the Editor page
        </Link>
        <Link className="home__links--item" to="/articles">
          Go to the Articles page
        </Link>
        <Link className="home__links--item" to="/photos">
          Go to the Photos page
        </Link>
        <Link className="home__links--item" to="/profile">
          Go to the Profile page
        </Link>
      </div>
      {authCtx.isLoggedIn && (
        <Button onClick={authCtx.onLogout}>Sign Out</Button>
      )}
    </div>
  );
}

export default Home;
