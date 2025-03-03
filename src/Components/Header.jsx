import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Header() {
  return (
    <div>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex justify-content-around gap-5">
              <div>
                <img
                  alt=""
                  src="src/assets/vinyl-record.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                <span className="text-white">Zwaram Audios</span>
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
      <Nav
        className="d-flex justify-content-center "
        defaultActiveKey="/home"
        as="ul"
      >
        <Nav.Item as="li">
        <Nav.Link href="/home" style={{
                    color: "",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "red")}
                  onMouseLeave={(e) => (e.target.style.color = "")}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link
  eventKey="link-1"
  style={{
    transition: "color 0.3s ease, box-shadow 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.target.style.color = "red";
    e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  }}
  onMouseLeave={(e) => {
    e.target.style.color = "";
    e.target.style.boxShadow = "none";
  }}
>
  LP Vinyl Records
</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Buy Now</Nav.Link>
        </Nav.Item>
       
      </Nav>
    </div>
  );
}

export default Header;
