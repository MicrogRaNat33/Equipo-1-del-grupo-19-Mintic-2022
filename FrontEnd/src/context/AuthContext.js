import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiLogin, apiRegister } from "./Api";

//Crear contexto
const AuthContext = createContext();

//Crear proveedor para el contexto
const AuthProvider = ({children})=>{
    //Estados
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        let token = localStorage.getItem('token');
        if(token){
            setAuth(true);
        }
    }, []);

    const handleRegister = (objUser)=>{
        //Realizar petición al servidor para registrar un usuario
        fetch(apiRegister, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        }).then(async(resp)=>{   
            if(resp.status === 201){
                let json = await resp.json();
                let token = json.token;
                console.log(token);
                localStorage.setItem('token', token);                
                setAuth(true);
                navigate('/');
            }else{
                alert("Credentials invalid");
            }       
            
        }).catch(error=>{
            console.log(error);
        })
    }

    const handleLogin = async (objUser)=>{
        let resp = await fetch(apiLogin, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        });
        if(resp.status === 200){
            setAuth(true);
        }
        return resp;
    }

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate('/');
        setAuth(false);
    }


    const data = {handleRegister, handleLogin, auth, handleLogout};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;