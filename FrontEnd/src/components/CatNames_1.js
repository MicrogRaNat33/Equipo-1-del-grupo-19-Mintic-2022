import React, { useContext } from "react";
import CatContext from "../context/CatContext";
import { CatProvider } from "../context/CatContext";
import SubCats from "./SubCats";

const CatNames = () => {
    const { categorias } = useContext(CatContext);

   return(
       <>
    <option>Seleccione categoria</option>
    {categorias.map(e =>{
            return (
              <optgroup value={e.nombre}>{e.nombre}
              <CatProvider>
              <SubCats />
                </CatProvider>
            </optgroup>
          )
          }
            )}
          </>
   ) 
}

export default CatNames;