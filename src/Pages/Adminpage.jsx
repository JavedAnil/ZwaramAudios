import React, { useEffect, useState } from 'react';
import { Button, Card, Modal, Form } from 'react-bootstrap';

import { deleteProducts, showProducts, uploadProduct } from '../Components/Services/allAPI';



function Adminpage() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: ''
  });
  useEffect(()=>{
    adminpView()
  },[])
  const handleButtonClick = () => {
    setShowModal(true);
  };
  
  const[viewProducts,setViewProducts] = useState([])
  const adminpView = async()=> {
    const apiresponse= await showProducts()
    
    setViewProducts(apiresponse.data)
  }


  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value
    });
  };

  const handleSubmit  = async (e) => {
    e.preventDefault();
    setProducts([...products, productDetails]);
    try {
        await uploadProduct(productDetails)
        setProductDetails({
            name: '',
            description: '',
            imageUrl: '',
            price: ''
          });
          setShowModal(false);
    } catch (error) {
        console.log(error)
    }

    
    
  };
  const deletePro =async(id) => {
    adminpView()
    await deleteProducts (id)
    adminpView()
   }

  return (
    <div>
      <Button variant="primary m-5" onClick={handleButtonClick}>Add Product</Button>
      <div>
      <div>
       <div className="flex  space-x-4 mx-4"  >
                    {viewProducts.map((value,index)=>(
                            <div id='carts-card' key={index} >
                            <img id='card-image' src={value.imageUrl} width="200"/>
                            <p className="text-center text-gray-700 mt-2">
                                {value.name}
                            </p>
                            <div className='d-flex justify-content-center' >
                            <Button onClick={()=>deletePro(value.id)} variant="danger"><i className="fa-solid fa-trash"></i></Button>
                            </div>
                            
                        </div>
                    ))}
                    
                
                </div>
  
    </div>
      </div>
      <div className='m-5'>
        
        
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={productDetails.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                />
              </Form.Group>
              <Form.Group controlId="formProductDescription" className="mt-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={productDetails.description}
                  onChange={handleChange}
                  placeholder="Enter product description"
                />
              </Form.Group>
              <Form.Group controlId="formProductImageUrl" className="mt-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="imageUrl"
                  value={productDetails.imageUrl}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                />
              </Form.Group>
              <Form.Group controlId="formProductPrice" className="mt-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={productDetails.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

          {products.map((product, index) => (
            <Card className="mt-3" key={index} style={{width:'250px',height:'350px',display:'flex'}}>
              <Card.Body>             
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
  );
}

export default Adminpage;