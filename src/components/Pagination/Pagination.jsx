import React from "react";
import classes from "./Pagination.module.css";
import { Button } from "@mantine/core";

const Pagination = ({ info, onPaginationClick }) => {
  const { prev, next } = info;
  return (
    <div className={classes.Container}>
      {prev ? (
        <Button
          className={classes.Button}
          onClick={() => {
            onPaginationClick(prev);
          }}
        >
          Previous
        </Button>
      ) : null}
      <Button
        className={classes.Button}
        onClick={() => {
          onPaginationClick(next);
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
