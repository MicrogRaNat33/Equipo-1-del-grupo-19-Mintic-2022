import React, { useContext } from "react";
import {Card} from "react-bootstrap";
import CatContext from "../context/CatContext";

const CatCard = ({nombre, color, page}) => {
  const {categorias} = useContext(CatContext);
  return (
    <Card style={{ width: "18rem"}} bg={color}>
      <Card.Body>
      <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {page}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CatCard;
