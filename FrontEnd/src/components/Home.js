import React from "react";
import { CatProvider } from "../context/CatContext";
import CatCard from "./CatCard";
import "./Components.css";

const Home = () => {

  return (
    <CatProvider>
  <CatCard className="card" />
  </CatProvider>
  );
};

export default Home;