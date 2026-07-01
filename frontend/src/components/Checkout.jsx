import Button from "react-bootstrap/esm/Button";
import { API } from './../api/apiConfig';


const Checkout = ({ products, quantities }) => {
  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      const quantity = quantities?.[nextValue._id] || 1;
      return currentValue + quantity * nextValue.price;
    }, 0);
  };

  const handleCheckout = async () => {
    const total = getTotal();
    const amount = Math.round(total * 100); // cents

    const items = products.map((p) => ({
      id: p._id,
      name: p.name,
      description: p.description || '',
      unit_amount: Math.round(p.price * 100),
      quantity: quantities?.[p._id] || 1,
    }));

    try {
      const response = await fetch(`${API}/checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, items }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to create checkout session');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (err) {
      console.error('Checkout error:', err);
      alert(err.message || 'Checkout failed');
    }
  };

  return (
    <div>
      <div className="card w-40">
        <div className="card-body">
          <h5 className="card-title">Checkout</h5>
          <p className="card-text">Total: ${getTotal()}</p>
          <Button variant="secondary" onClick={handleCheckout}>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
