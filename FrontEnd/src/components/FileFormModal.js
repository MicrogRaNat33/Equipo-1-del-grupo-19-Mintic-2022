import React, {useEffect, useState} from "react";
import {Modal, Button, Form, Row, Col} from "react-bootstrap";


const objForm = {
    titulo: "",
    autor: "",
    categoria: "",
    path:""
  };


const FileFormModal = ({show, handleClose, objFile, updateFile}) => {
    const [form, setForm] = useState(objForm);

    useEffect(()=>{
        setForm({id: objFile._id, titulo: objFile.titulo, autor: objFile.autor, categoria: objFile.categoria, path: objFile.path})
    }, [objFile]);

    const handleForm = (e) => {
        setForm({ ...form, [e.target.titulo]: e.target.value });
      };

      const handleUpdate = ()=>{
          updateFile(form);
          handleClose();
      }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar archivo</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {/*******Fila 1*******/}
        <Row>
          {/*******Columna 1*******/}
          <Col>
            <Form.Group className="mb-3" controlId="fileNombre">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                name="titulo"
                type="text"
                placeholder="Digite el titulo del recurso"
                value={form.nombre}
                onChange={handleForm}
                required
              />
            </Form.Group>
          </Col>
          {/*******Columna 2*******/}
          <Col>
            <Form.Group className="mb-3" controlId="fileAutor">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                name="autor"
                type="text"
                placeholder="Digite el autor del recurso"
                value={form.autor}
                onChange={handleForm}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        {/*******Fila 2*******/}
        <Row>
        <col>
          <Form.Group className="mb-3" controlId="fileCat">
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              value={form.categoria}
              onChange={handleForm}
              name="categoria"
              type="text"
              placeholder="Digite el area del saber"
              required
            />
          </Form.Group>
          </col>
          <col>
          <Form.Group className="mb-3" controlId="filePath">
            <Form.Label>Archivo</Form.Label>
            <Form.Control
              value={form.path}
              onChange={handleForm}
              name="path"
              type="text"
              placeholder="Digite el link al archivo"
              required
            />
          </Form.Group>
          </col>
        </Row>

        <img src={form.url_img} height="200px" width="200px"/>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
