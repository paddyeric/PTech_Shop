import { useState, useEffect } from "react";
import { updateItem, removeItem } from "../cart/cartFunctions";
import { getCart } from "../cart/cartFunctions";
import Checkout from "./Checkout";
import BackButton from "./BackButton";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";


const Cart = () => {
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const cart = getCart();
    setItems(cart);
    const initialQuantities = {};
    cart.forEach(item => {
      initialQuantities[item._id] = item.quantity || 1;
    });
    setQuantities(initialQuantities);
  }, []);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = removeItem(productId);
    setItems(updatedCart);
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[productId];
      return newQuantities;
    });
  };


  const handleChange = (productId) => (e) => {
    const nextCount = e.target.value < 1 ? 1 : e.target.value;
    setQuantities(prev => ({
      ...prev,
      [productId]: nextCount
    }));

    if (e.target.value) {
      updateItem(productId, nextCount);
    }
  };


  return (
    <div className="m-4">
      <BackButton />

      <h2 className="mt-2">Your cart has {`${items.length}`} items</h2>

      <div className="flex ">
        <div className="mt-3 space-y-3">
          {items && items.length > 0 ? (
            items.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col xs={1}>
                    <Image src={item.image[0]} alt={item.name} rounded />
                  </Col>
                  <Col md={3}>
                    {item.name}
                  </Col>

                  <Col md={3}>
                    ${item.price}
                  </Col>

                  <Col md={2} className="mr-7">
                    <input
                      type="number"
                      value={quantities[item._id] || 1}
                      onChange={handleChange(item._id)}
                      className="border 2xl"
                    />
                  </Col>

                  <Col md={2}>
                    <Button
                      type="button"
                      variant="danger"
                      onClick={() => handleRemoveFromCart(item._id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>

                </Row>
              </ListGroup.Item>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}

        </div>

        <div>
          <Checkout products={items} quantities={quantities} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
