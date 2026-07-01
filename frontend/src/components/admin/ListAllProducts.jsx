import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getProducts, deleteProduct } from "../../api/apiAdmin";
import { Link } from "react-router-dom";
import Loader from './../Loader';
import Error from './../Error'


const ListAllProducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to load users. Please try again.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchProducts();
  },[]);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (err) {
      setError('Failed to delete user');
      console.error('Error deleting user:', err);
    }
  };


  return (
    <div className="m-4">
      <div className="flex align-items-center mt-3">
        {loading && <Loader/>}
        {error && <Error message={error}/>}

        <Col>
          <h1>Admin Products List</h1>
        </Col>

        <Link to={'/addproduct'}>
        <Button variant="dark">
          <p className="mt-2">Add Product</p>
        </Button>
        </Link>
      </div>

      <>
        <Table striped hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant="light" className="btn-sm mx-2">
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => handleDelete(product._id)}
                  >
                    <FaTrash style={{ color: "white" }} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </div>
  );
};

export default ListAllProducts;
