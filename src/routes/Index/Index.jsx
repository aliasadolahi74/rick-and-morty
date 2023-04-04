import React, { useState, useEffect } from "react";
import data from "../../dummy/dummy.json";
import Header from "../../components/Header/Header";
import classes from "./Index.module.css";
import Character from "../../components/Character/Character";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Index = () => {
  const [page, setPage] = useState(1);

  const { isLoading, data } = useQuery(["getAllCharacters"], () => {
    return axios.get("https://rickandmortyapi.com/api/character");
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    const { results: characters, info } = data.data;
    return (
      <div className={classes.Container}>
        <Header />
        <div className={classes.Content}>
          <div className={classes.Characters}>
            {characters.map((character) => (
              <Character key={character.id} info={character} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Index;
