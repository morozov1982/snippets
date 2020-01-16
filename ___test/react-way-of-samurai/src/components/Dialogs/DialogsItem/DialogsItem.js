import React from "react";
import { NavLink } from "react-router-dom";
import stl from "./../Dialogs.module.css";

const DialogsItem = props => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={stl.dialogs__item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem;