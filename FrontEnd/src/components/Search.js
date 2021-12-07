import React, { useContext, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FileContext from "../context/FileContext";
import { CatProvider } from "../context/CatContext";
import CatNames from "./CatNames";

const objForm = {
  titulo: "",
  autor: "",
  categoria: "",
  path:""
};

const FileForm = () => {
    const {handleCreate} = useContext(FileContext);
  const [form, setForm] = useState(objForm);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(form).then(resp=>{
        console.log(resp);
    }).catch(error=>{
        console.error(error);
    });
    setForm(objForm);
  };

  return (
    
    <div className="fileForm">
    <h2>Busqueda de Archivos del repositorio</h2>
      <Form onSubmit={handleSubmit}>
        <Row><Col>
            <Form.Group className="mb-3" controlId="titulo">
              <Form.Label>Buscar por titulo del recurso</Form.Label>
              <Form.Control
                name="titulo"
                type="text"
                placeholder="Escriba el titulo del recurso"
                value={form.titulo}
                onChange={handleForm}
                required
              />
            </Form.Group>
            </Col>
            <Col><Button variant="success" type="submit">
          Buscar
        </Button></Col>
          </Row>
          
          <Row>
          <Col>
            <Form.Group className="mb-3" controlId="Autor">
              <Form.Label>Buscar por Autor del recurso</Form.Label>
              <Form.Control
                name="autor"
                type="text"
                placeholder="Escriba el autor del recurso"
                value={form.autor}
                onChange={handleForm}
                required
              />
            </Form.Group>
            </Col>
            <Col><Button variant="success" type="submit">
          Buscar
        </Button></Col>
          </Row>
        
        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label htmlFor="categoria">Buscar por area del saber</Form.Label>
          <Form.Select aria-label="Selecione categoria"
                value={form.categoria}
                onChange={handleForm}
                name="categoria"
                id="categoria"
                type="text"
                placeholder="Selecione área del saber"
                required
               >
  <CatProvider>
   <CatNames />
   </CatProvider>
</Form.Select></Form.Group>
            </Col>
            <Col><Button variant="success" type="submit">
          Buscar
        </Button></Col>
        </Row>
      </Form>
    </div>
  );
};

export default FileForm;
