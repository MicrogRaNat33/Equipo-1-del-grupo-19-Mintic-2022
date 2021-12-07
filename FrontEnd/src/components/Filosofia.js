import React, { useContext } from "react";
import {Card, Nav} from "react-bootstrap";
import CatContext from "../context/CatContext";
import { Link } from "react-router-dom";

const Filosofia = () => {

  const { subcat } = useContext(CatContext);
  
  return (
<>
      <h2>Areas de saberes</h2>
      <div className="contCard">
        {subcat.map(e =>{
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

export default Filosofia;
