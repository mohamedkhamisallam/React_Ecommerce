import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { FaCartPlus } from "react-icons/fa";

function NavBar({countItem,countPrice}) {
  return (
    <Navbar expand="lg" className=" mainColor ">
      <Container>
        <Navbar.Brand href="#home" className="text-white">APP STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white cart   p-3  text-end ">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <span className="mx-2">$ {countPrice().toFixed(2)}</span>
            
            <span  >cart <FaCartPlus />
            <sup className="m-1  "><Badge bg="primary pill">{countItem()}</Badge></sup>
             </span>
            {/* <h6 className=" position-absolute top-50 end-0"><Badge bg="primary pill">0</Badge></h6> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
