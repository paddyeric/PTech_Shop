import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

function Cancel() {
  return (
    <>
      {[
        'danger',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Transaction Cancelled. Navigate to <Link to={'/cart'}>Cart</Link>.
        </Alert>
      ))}
    </>
  );
}

export default Cancel;
