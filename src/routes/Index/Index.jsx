import React, { useState, useEffect } from "react";
import data from "../../dummy/dummy.json";
import Header from "../../components/Header/Header";
import classes from "./Index.module.css";
import Character from "../../components/Character/Character";

const Index = () => {
  // console.log("dummy", data);
  // const [data, setData] = useState();

  const { results: characters, info } = data;
  console.log(characters);
  const { next, prev, pages } = info;

  return (
    <div className={classes.Container}>
      <Header />
      <div className={classes.Content}>
        <div className={classes.Characters}>
          {characters?.map((character) => (
            <Character key={character.id} info={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
