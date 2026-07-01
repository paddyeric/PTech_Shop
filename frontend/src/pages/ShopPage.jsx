import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { API } from "../api/apiConfig";
import axios from "axios";
import Card from "../components/Card";
import ScrollToTop from "react-scroll-to-top";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useLocation } from "react-router-dom";
import SearchProduct from "../components/SearchProduct";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("search") || "";

    const getProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = searchTerm ? `${API}/products?search=${encodeURIComponent(searchTerm)}`
          :
          `${API}/products`;

        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        setError(error?.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [location.search]);

  return (
    <div className="flex justify-center">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div>
          <div className="flex justify-center"><SearchProduct/></div>
          

          <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div key={item._id} className="mt-4 p-2">
              <Card item={item} toast={toast} />
            </div>
          ))}
        </div>
        </div>
        
      )}

      <ToastContainer />

      <ScrollToTop smooth color="white" style={{ backgroundColor: '#FA0903', width: '30px', height: '30px', borderRadius: '20px' }} />
    </div>
  );
};

export default ShopPage;
