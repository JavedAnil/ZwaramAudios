import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function Maincard() {
  const productDetails = JSON.parse(sessionStorage.getItem("pDetails")) || {};
  console.log(productDetails);

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    
    handleClose();
  };
  
  const navigate = useNavigate()
     const addCart =()=> {
            toast.success("Order Confirmed")
            navigate("/Cards")
        }
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto p-4 bg-white shadow-md">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-4">
            <img
              className="w-full"
              height="600"
              src={productDetails.imageUrl}
              width="600"
              alt="Product"
            />
          </div>
          <div className="lg:w-1/2 p-4">
            <h1 className="text-2xl font-bold">{productDetails.name}</h1>
            <p className="text-lg mt-2">
              MRP:
              <span className="text-red-500 text-xl font-bold">
                {productDetails.price}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>

            

            <button
              onClick={handleShow}
              className="mt-4 w-full bg-yellow-500 text-white py-2 text-lg font-semibold"
            >
              Buy Now
            </button>

            <p className="mt-4 text-sm text-gray-600">
              {productDetails.description}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            {/* Address */}
            <Form.Group controlId="formAddress" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
              />
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Button onClick={addCart} variant="primary" type="submit" className="mt-3 w-100">
              Submit Order
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Maincard;
