import { useState } from 'react';
import { Link } from "react-router-dom";
import { addItem } from "../cart/cartFunctions";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Modal from 'react-bootstrap/Modal';


const Card = ({ item, toast }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCart = () => {
    addItem(item, () => { });
    toast.success(`${item.name} added to cart`);
  };


  return (
    <>
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1">

        <div className="flex flex-col" onClick={handleShow}>
          <Link>
            <img
              className="w-full h-60 object-fit"
              src={item.image[0]}
              alt="img"
            />
          </Link>
        </div>


        <div className="p-2">
          <p className="my-2 font-bold tracking-tight">{item.name}</p>

          <div className="flex justify-between">
            <p className="my-3 font-normal text-gray-700">{`$${item.price}`}</p>

            <div className="flex space-x-2">
              <div>
                <Button variant="primary" onClick={handleShow}>
                  View
                </Button>
              </div>

              <Modal show={show} onHide={handleClose} size='md' centered={true}>
                <Modal.Header closeButton>
                  <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Carousel>
                    {item.image.map((allImage, id) => (
                      <Carousel.Item key={id}>
                        <img src={allImage} alt="" className="d-block w-100 bigimg" />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Modal.Body>

                <Modal.Body>
                  <div className="space-y-2">
                    <p> <strong>Price:</strong> {`$${item.price}`}</p>
                    <p><strong>Brand:</strong> {item.brand}</p>
                    <p><strong>Category:</strong> {item.category}</p>
                    <p>{item.description}</p>
                  </div>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              <div>
                <Button
                  onClick={addToCart}
                  variant="dark"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
