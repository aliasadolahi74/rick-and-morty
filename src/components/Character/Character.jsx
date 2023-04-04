import React from "react";
import classes from "./Character.module.css";
import _ from "lodash";

const Character = ({ info }) => {
  const getStatusClassName = (status) => {
    const lowerCaseStr = status.toLowerCase();
    switch (lowerCaseStr) {
      case "alive":
        return classes.GreenIcon;
      case "dead":
        return classes.RedIcon;
      default:
        return classes.GrayIcon;
    }
  };

  const { name, image, status, species } = info;

  const iconClassName = [classes.Icon, getStatusClassName(status)].join(" ");

  return (
    <div className={classes.Container}>
      <img className={classes.Image} src={image} alt='avatar' />
      <div className={classes.TextInfo}>
        <h2 className={classes.Name}>{name}</h2>
        <div className={classes.StatusText}>
          <i className={iconClassName}></i>
          <strong>
            {_.startCase(status)} - {_.startCase(species)}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Character;
