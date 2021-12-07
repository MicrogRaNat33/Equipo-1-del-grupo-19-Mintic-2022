import React, { useContext } from "react";
import CatContext from "../context/CatContext";


const SubCats = () => {
    const { subcat } = useContext(CatContext);

   return(
       <>
    {subcat.map(e =>{
                        return (<option value={e.nombre}>{e.nombre}</option>);
            }
            )
            }
         </>
   ); 
}

export default SubCats;