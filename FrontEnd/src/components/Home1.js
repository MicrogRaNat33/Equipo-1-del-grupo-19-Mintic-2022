import React, { useContext } from "react";
import FileContext from "../context/FileContext";
import ProductCard from "./CatCard";
import Search from "./Search";
import "./Components.css";

const File = () => {
  const { files } = useContext(FileContext);

  return (
    <div>
      <h2>File</h2>
      <Search />
      <br />
      <hr />
      <br />
      <div className="contCard">
        {files.map((e) => (
          <ProductCard className="card" key={e._id} url_img={e.url_img} name={e.name} price={e.price} />
        ))}
      </div>
    </div>
  );
};

export default File;
