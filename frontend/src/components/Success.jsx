import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';


function Success() {
    return (
        <>
            {[
                'success',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    Paymentment Made Successfully. Navigate to <Link to={'/'}>Home</Link>.
                </Alert>
            ))}
        </>
    );
}

export default Success;