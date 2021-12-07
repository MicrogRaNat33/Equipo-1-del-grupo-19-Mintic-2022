import { createContext, useEffect, useState } from "react";
import { apiFile, apiFiletitulo, apiFileautor, apiFilecategoria, apiFileuser} from "./Api";

const FileContext = createContext();

const FileProvider = ({children})=>{

    const [files, setFiles] = useState([]);
    const [filesTitulo, setFilesTitulo] = useState([]);
    const [filesAutor, setFilesAutor] = useState([]);
    const [filesCat, setFilesCat] = useState([]);
    const [filesUser, setFilesUser] = useState([]);

    useEffect(()=>{
        getFiles();
        getFilesTitulo();
        getFilesAutor();
        getFilesCat();
        getFilesUser();
    }, []);

    const getFiles = ()=>{
        fetch(apiFile).then(async(resp)=>{
            let json = await resp.json();
            setFiles(json);
        }).catch(error=>{
            console.error(error);
        })
    }
    
    const getFilesTitulo = async()=>{

        fetch(apiFiletitulo).then(async(resp)=>{
            let json = await resp.json();
            setFilesTitulo(json);
        }).catch(error=>{
            console.error(error);
        });
    }

    const getFilesAutor = async()=>{

        fetch(apiFileautor).then(async(resp)=>{
            let json = await resp.json();
            setFilesAutor(json);
        }).catch(error=>{
            console.error(error);
        });
    }

    const getFilesCat = async()=>{

        fetch(apiFilecategoria).then(async(resp)=>{
            let json = await resp.json();
            setFilesCat(json);
        }).catch(error=>{
            console.error(error);
        });
    }

// Metodo buscar archivo insertado por un usuario

    const handleCreate = async (objFile)=>{
        let token = localStorage.getItem('token');
        let resp = await fetch(apiFile, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objFile)
        });

        if(resp.status === 201){
            getFiles();
        }
        return resp;
    }

    const getFilesUser = async()=>{
        //Capturar el token
        let token = localStorage.getItem('token');
        //Realizar petición
        let resp = await fetch(apiFileuser, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if(resp.status === 200){
            let json = await resp.json();
            setFilesUser(json);
        }

        return resp;
    }
    
  //  const data = {files, filesTitulo, filesAutor, filesCat, filesUser, getFiles, getFilesTitulo, getFilesAutor, getFilesCat, getFilesUser, handleCreate, updateFile, handleDelete};

    const data = {files, filesTitulo, filesAutor, filesCat, filesUser, getFiles, getFilesTitulo, getFilesAutor, getFilesCat, getFilesUser, handleCreate};

    return <FileContext.Provider value={data}>{children}</FileContext.Provider>
}

export {FileProvider};
export default FileContext;
