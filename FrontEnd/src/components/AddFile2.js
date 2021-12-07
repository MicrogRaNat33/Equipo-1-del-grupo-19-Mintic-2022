import React, { useContext, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FileContext from "../context/FileContext";
import "./Components.css";

const objForm = {
  titulo: "",
  autor: "",
  categoria: "",
  path:""
};

const AddFile = () => {
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
  <h2>Agregar un archivo al repositorio</h2>
    <Form onSubmit={handleSubmit}>
      <Row><Col>
          <Form.Group className="mb-3" controlId="titulo">
            <Form.Label>Titulo del recurso</Form.Label>
            <Form.Control
              name="titulo"
              id="titulo"
              type="text"
              placeholder="Escriba el titulo del recurso"
              value={form.titulo}
              onChange={handleForm}
              required
            />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="autor">
            <Form.Label>Autor del recurso</Form.Label>
            <Form.Control
              name="autor"
              id="autor"
              type="text"
              placeholder="Escriba el autor del recurso"
              value={form.autor}
              onChange={handleForm}
              required
            />
          </Form.Group>
          </Col>
        </Row>
        
        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label htmlFor="categoria">Selecione categoria</Form.Label>
          <Form.Select aria-label="Selecione área del saber"
          value={form.categoria}
                onChange={handleForm}
                name="categoria"
                id="categoria"
                type="text"
                placeholder="Selecione área del saber"
                required
               >
  <option>Categoria</option>
  <option value="1">Biología</option>
  <option value="2">Filosofia</option>
  <option value="3">Informática</option>
  <option value="3">Psicología</option>
  <option value="3">Espiritualidad</option>
  <option value="3">Fenomenologia</option>
</Form.Select></Form.Group>
          </Col>
          <col>
          <Form.Group className="mb-3" controlId="path">
            <Form.Label>Escriba el nombre del archivo con la ruta de acceso</Form.Label>
            <Form.Control
              name="path"
              type="text"
              placeholder="Escriba ruta de acceso al archivo y el nombre del mismo"
              value={form.path}
              onChange={handleForm}
              required
            />
          </Form.Group>
          </col>
        </Row>
     <Button variant="success" type="submit">
        Insertar archivo en la base de datos
      </Button>
    </Form>
  </div>
);
};

export default AddFile;
