import React, { useState } from "react";
import Header from "../../components/Header/Header";
import classes from "./Index.module.css";
import Character from "../../components/Character/Character";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";

const Index = () => {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["getAllCharacters", url],
    queryFn: () => {
      return axios.get(url);
    },
  });

  const handlePaginationButtonClick = (url) => {
    setUrl(url);
    refetch();
  };

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
          <Pagination
            info={info}
            onPaginationClick={handlePaginationButtonClick}
          />
        </div>
      </div>
    );
  }
};

export default Index;
