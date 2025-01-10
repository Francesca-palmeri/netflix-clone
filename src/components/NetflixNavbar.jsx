import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Search, Bell, PersonCircle } from "react-bootstrap-icons"

const NetflixNavbar = function () {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="logo.png"
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link href="#" className="text-white fw-bold">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                TV Shows
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                Movies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                Recently Added
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                My List
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex align-items-center">
            <Button variant="link" className="px-2 text-white custom-button">
              <Search className="icons" />
            </Button>
            <Button id="kids" className="fw-bold bg-transparent border-0">
              KIDS
            </Button>
            <Button variant="link" className="px-2 text-white custom-button">
              <Bell className="icons" />
            </Button>
            <Button variant="link" className="px-2 text-white custom-button">
              <PersonCircle className="icons" />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NetflixNavbar
