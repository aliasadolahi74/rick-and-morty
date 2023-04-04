import React, { useState } from "react";
import Header from "../../components/Header/Header";
import classes from "./Index.module.css";
import Character from "../../components/Character/Character";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";

const Index = () => {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: ["getAllCharacters", url],
    queryFn: () => {
      return axios.get(url);
    },
  });

  const { mutate } = useMutation({
    mutationFn: (url) => {
      return axios.get(url);
    },
    onSuccess: (response, url) => {
      queryClient.invalidateQueries({ queryKey: ["getAllCharacters", url] });
    },
  });

  const handlePaginationButtonClick = (url) => {
    setUrl(url);
    mutate(url);
  };

  const renderContent = () => {
    if (isLoading) {
      return <div style={{ color: "#ffffff" }}>Loading...</div>;
    } else {
      const { results: characters, info } = data.data;
      return (
        <div className={classes.Content}>
          <div className={classes.Characters}>
            {characters?.map((character) => (
              <Character key={character.id} info={character} />
            ))}
          </div>
          <Pagination
            info={info}
            onPaginationClick={handlePaginationButtonClick}
          />
        </div>
      );
    }
  };

  return (
    <div className={classes.Container}>
      <Header />
      {renderContent()}
    </div>
  );
};

export default Index;
