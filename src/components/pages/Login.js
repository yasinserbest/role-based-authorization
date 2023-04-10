import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Button from "../utilities/Button";
import "./Login.scss";

function Login() {
  const authCtx = useContext(AuthContext);

  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (name, role) => {
    authCtx.onLogin(name, role);
    navigate(from, { replace: true });
  };

  const roleChangeHandler = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="login">
      <div className="login__title">
        Please select role which you want to login.
      </div>
      <div>
        <select onChange={roleChangeHandler} className="login__roles">
          <option></option>
          <option className="login__roles--item">Admin</option>
          <option className="login__roles--item">Editor</option>
          <option className="login__roles--item">Author</option>
          <option className="login__roles--item">Photographer</option>
        </select>
        <Button className="login__btn" onClick={() => handleSubmit(role)}>
          LOG IN
        </Button>
      </div>

      {/* <input onChange={roleChangeHandler}></input>
      <button onClick={() => handleSubmit(role)}>LOG IN</button> */}

      <Link className="login__link" to="/">
        &larr; Go to the home page
      </Link>
    </div>
  );
}

export default Login;
