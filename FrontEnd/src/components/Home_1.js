import React, { useContext } from "react";
import CatCard from "./CatCard";
import "./Components.css";
import CatContext from "../context/CatContext";

const Home = () => {
const {categorias} = useContext(CatContext);

  return (
    <>
      <h2>Areas de saberes</h2>
      <div className="contCard">
        {categorias.map((e) => (
          <CatCard className="card" key={e._id} nombre={e.nombre} color={e.color} page={e.page} />
        ))}
      </div>
    </>
  );
};

export default Home;