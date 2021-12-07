import { createContext, useEffect, useState } from "react";
import { apiCat, apiCatnombre, apiSubcat} from "./Api";

const CatContext = createContext();

const CatProvider = ({children})=>{

    const [categorias, setCategorias] = useState([]);
    const [catnombre, setCatNombre] = useState([]);
    const [subcat, setSubcat] = useState([]);
    
    useEffect(()=>{
       getCategorias();
       getCatNombre();
       getSubcat();
    }, []);

    const getCategorias = ()=>{
        fetch(apiCat).then(async(resp)=>{
            let json = await resp.json();
            setCategorias(json);
        }).catch(error=>{
            console.error(error);
        })
    }
    
    const getCatNombre = async()=>{

        fetch(apiCatnombre).then(async(resp)=>{
            let json = await resp.json();
            setCatNombre(json);
        }).catch(error=>{
            console.error(error);
        });
    }

    const getSubcat = async()=>{

        fetch(apiSubcat).then(async(resp)=>{
            let json = await resp.json();
            setSubcat(json);
        }).catch(error=>{
            console.error(error);
        });
    }

    const data = {categorias, catnombre, subcat, getCategorias, getCatNombre, getSubcat};


    return <CatContext.Provider value={data}>{children}</CatContext.Provider>
}

export {CatProvider};
export default CatContext;
