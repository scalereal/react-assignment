import React from "react";
import img from "../Asset/undraw.png";
import { Empty } from "../styles/Empty.styled";
const PageNotFound = () => {
  return (
    <Empty>
      <h2>Sorry, there is no result for keyword you searched.</h2>
      <img src={img} alt="no img found" />
    </Empty>
  );
};

export default PageNotFound;
