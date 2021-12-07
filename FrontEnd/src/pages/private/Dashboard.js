import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { FileProvider } from "../../context/FileContext";
import AuthContext from "../../context/AuthContext";
import logo from "../../repositorio.png";


const Dashboard = () => {

  const {handleLogout} = useContext(AuthContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
                height="76"
              className="d-inline-block align-top"
            />{" "}
            Open Know
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">
              Home
            </Nav.Link>
            <Nav.Link  href="" onClick={handleLogout}>
                Salir
              </Nav.Link>
              <Nav.Link as={Link} to="about" href="#about">
                About
              </Nav.Link>
            <Nav.Link as={Link} to="addfile" href="#addfile">
                Agregar
              </Nav.Link>
              <Nav.Link as={Link} to="listfiles" href="#listfiles">
                Listar
              </Nav.Link>
              <Nav.Link as={Link} to="search" href="#search">
                Buscar
              </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/**Aquí se mostrarán los componentes al navegar por el navbar */}
      <FileProvider>
        <Outlet />
      </FileProvider>
    </>
  );
};

export default Dashboard;
