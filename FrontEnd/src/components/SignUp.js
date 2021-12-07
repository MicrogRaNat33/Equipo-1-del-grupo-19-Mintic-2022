import React, { useContext, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import "./Components.css";

const SignUp = () => {
  //Crear contexto de tipo AuthContext
  const {handleRegister} = useContext(AuthContext);

  const objForm = {
    nombre: "",
    email: "",
    password: "",
    pais: "",
    data_pol:"",
  };
  const [form, setForm] = useState(objForm);

  const handleForm = (e) => {
    let array = { ...form, [e.target.name]: e.target.value };
    setForm(array);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Llamar la función del contexto
    handleRegister(form);
    setForm(objForm);
  };

  return (
    <div className="register">
      <h3>Formulario de creación de cuenta de usuario</h3>
      {/**Formulario de registro**/}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nombre">Nombres y apellidos</Form.Label>
              <Form.Control
                value={form.nombre}
                onChange={handleForm}
                name="nombre"
                id="nombre"
                type="text"
                placeholder="Escriba sus nombres y apellidos"
                required
              />
            </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control
                value={form.email}
                onChange={handleForm}
                name="email"
                id="email"
                type="email"
                placeholder="Escriba su email"
                required
              />
            </Form.Group>

          </Col>
        </Row>
        <Row>
          {/**Password***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Contraseña</Form.Label>
              <Form.Control
                value={form.password}
                onChange={handleForm}
                required
                name="password"
                id="password"
                type="password"
                placeholder="Digite su password"
                
              />
            </Form.Group>
          </Col>
          
          {/**select de pais***/}
          <Col>
          <Form.Group className="mb-3">
          <Form.Label htmlFor="pais">Selecione Pais donde reside</Form.Label>
          <Form.Select aria-label="Selecione Pais donde reside"
                value={form.pais}
                onChange={handleForm}
                name="pais"
                id="pais"
                type="text"
                placeholder="Selecione el pais donde reside"
                required
               >
  <option>Pais</option>
  <option value="Colombia">Colombia</option>
  <option value="USA">USA</option>
  <option value="España">España</option>
</Form.Select></Form.Group>
          </Col>
        </Row>
        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check label="Estoy de acuerdo con la politica de tratamiento de datos personales"
               value={true}
               // value={e.target.checked}
                onChange={handleForm}
                name="data_pol"
                id="data_pol"
                type="checkbox"
                required
     />
  </Form.Group>
        </Col>
        {/**Botón de registro***/}
        <Col>
        <Button variant="primary" type="submit">
          Crear cuenta de usuario
        </Button>
        </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SignUp;
