import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.Container}>
      <h1>Rick and Morty Characters</h1>
    </div>
  );
};

export default React.memo(Header);
