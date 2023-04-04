import React, { useState, useEffect } from "react";
import dummy from "../../dummy/dummy.json";
import Header from "../../components/Header/Header";

const Index = () => {
  console.log("dummy", dummy);
  const [data, setData] = useState();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Index;
