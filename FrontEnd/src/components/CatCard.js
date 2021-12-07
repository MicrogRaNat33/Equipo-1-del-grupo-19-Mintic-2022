import React, { useContext } from "react";
import {Card, Nav} from "react-bootstrap";
import CatContext from "../context/CatContext";
import { Link } from "react-router-dom";

const CatCard = () => {

  const { categorias } = useContext(CatContext);
  
  return (
<>
      <h2>Areas de saberes</h2>
      <div className="contCard">
        {categorias.map(e =>{
          return (
            <Nav.Link as={Link} to={e.page} href={e.page}> 
          <Card key={e._id} style={{ width:"18rem", background:`${e.color}`}}>
      <Card.Body>
      <Card.Title>{e.nombre}</Card.Title>
      </Card.Body>
    </Card>
    </Nav.Link>
        )
        }
        )}
      </div>
    </>
    
  );
};

export default CatCard;
