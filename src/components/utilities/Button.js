import React from "react";
import "./Button.scss";
function Button(props) {
  const classes = "button " + props.className;
  return (
    <button onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  );
}

export default Button;
