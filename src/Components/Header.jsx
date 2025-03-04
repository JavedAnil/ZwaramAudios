import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand>
            <div className="d-flex justify-content-around gap-5">
              <div>
                <Link to={"./"} >
                <img
                  alt=""
                  src="src/assets/vinyl-record.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                <span className="text-white">Zwaram Audios</span>
                </Link>
                
                
              </div>

              <div className="icons">
                <i
                  className="fa-solid fa-cart-shopping p-2"
                  style={{
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#ffcc00")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                ></i>
                <i
                  className="fa-solid fa-user gap-2"
                  style={{
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#ffcc00")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                ></i>
              </div>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Nav className="d-flex justify-content-center bg-dark py-3 shadow-lg" defaultActiveKey="/home" as="ul">
      {/* Home */}
      <Nav.Item as="li" className="mx-3">
        <Nav.Link as={Link} to="/" 
          className="text-white fw-bold px-3 py-2 rounded"
          style={{ transition: "color 0.3s ease, transform 0.2s ease" }}
          onMouseEnter={(e) => { e.target.style.color = "red"; e.target.style.transform = "scale(1.1)"; }}
          onMouseLeave={(e) => { e.target.style.color = "white"; e.target.style.transform = "scale(1)"; }}
        >
          Home
        </Nav.Link>
      </Nav.Item>

      {/* LP Vinyl Records */}
      <Nav.Item as="li" className="mx-3">
        <Nav.Link as={Link} to="/Cards"
          className="text-white fw-bold px-3 py-2 rounded"
          style={{ transition: "color 0.3s ease, transform 0.2s ease" }}
          onMouseEnter={(e) => { e.target.style.color = "red"; e.target.style.transform = "scale(1.1)"; }}
          onMouseLeave={(e) => { e.target.style.color = "white"; e.target.style.transform = "scale(1)"; }}
        >
          LP Vinyl Records
        </Nav.Link>
      </Nav.Item>

      {/* Buy Now */}
      <Nav.Item as="li" className="mx-3">
        <Nav.Link as={Link} to="/buy"
          className="text-white fw-bold px-3 py-2 rounded"
          style={{ transition: "color 0.3s ease, transform 0.2s ease" }}
          onMouseEnter={(e) => { e.target.style.color = "red"; e.target.style.transform = "scale(1.1)"; }}
          onMouseLeave={(e) => { e.target.style.color = "white"; e.target.style.transform = "scale(1)"; }}
        >
          Buy Now
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default Header;
