import React, { useContext, useState } from "react";
import {Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const objForm = {
  email: "",
  password: ""
}

const Login = () => {
  //Contexto
  const {handleLogin} = useContext(AuthContext);
  //Estados
  const [form, setForm] = useState(objForm);
  //Navegador
  const navigate = useNavigate();


  const handleForm = (e)=>{
    setForm( {...form, [e.target.name]: e.target.value} );
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    handleLogin(form).then(async (resp)=>{
      if(resp.status === 200){
        let json = await resp.json();
        let token = json.token;
        localStorage.setItem('token', token);
        navigate('/');
      }else{
        alert('Invalid credentials');
      }
    }).catch(error=>{
      console.log(error);
    });
  }

  return (
    <div className="login">
      <h2>Formulario de inicio de sesion de usuario registrado</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required value={form.email} onChange={handleForm} name="email" type="email" placeholder="Escriba su email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required value={form.password} onChange={handleForm} name="password" type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar sesion
        </Button>
      </Form>
    </div>
  );
};

export default Login;
