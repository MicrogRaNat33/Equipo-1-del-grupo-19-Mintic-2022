import React, { useContext } from "react";
import CatContext from "../context/CatContext";


const CatNames = () => {
    const { categorias } = useContext(CatContext);

   return(
       <>
    <option>Seleccione categoria</option>
    {categorias.map(e =>{
            return (<option value={e.nombre}>{e.nombre}</option>);
          }
            )}
          </>
   ); 
}

export default CatNames;