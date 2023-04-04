import React, { useState, useEffect } from "react";
import dummy from "../../dummy/dummy.json";

const Index = () => {
  console.log("dummy", dummy);
  const [data, setData] = useState();

  return <div>Index page</div>;
};

export default Index;
