import React, { useContext } from "react";
import Table from 'react-bootstrap/Table';
import { Button, Row, Col} from "react-bootstrap";
import FileContext from "../context/FileContext";
import "./Components.css";

//const ListFiles = ({titulo, autor, categoria, path}) => {

  const ListFiles = () => {

  const { files } = useContext(FileContext);

  return (
      <>
      <h2>Listado de recursos del repositorio</h2>
<Table striped bordered hover variant="primary" ClassName="ListFile">
  <thead>
    <Row>
      <Col><b>Titulo</b></Col>
      <Col><b>Autor</b></Col>
      <Col><b>Categoria</b></Col>
      <Col><b>Archivo</b></Col>
      <Col><b>Acciones</b></Col>
    </Row>
  </thead>
  <tbody>
  {files.map(e=>{
            return(
                <Row key={e._id}>
                    <Col>{e.titulo}</Col>
                    <Col>{e.autor}</Col>
                    <Col>{e.categoria}</Col>
                    <Col><a href={e.path} rel="noreferrer" target="_blank">{e.path}</a></Col>
                    <Col><Button variant="warning">Edit</Button>
        &nbsp; &nbsp;
        <Button variant="danger">Delete</Button></Col>
    </Row> 
            )
        }
        )}
    
  </tbody>
</Table>
</>
  );
};

export default ListFiles;