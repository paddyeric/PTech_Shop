import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { isAuthenticated, signIn, jwtAuth } from "../auth/authentication";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";


const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
  });

  const { email, password, error, loading } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });
    signIn({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        jwtAuth(data, () => {
          setValues({
            ...values,
          });
        });
      }
    });
  };


  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Form className="w-50" onSubmit={clickSubmit}>
        {loading && <Loader />}
        {error && <Error message={error} />}

        <h3 className="mb-5">Sign In</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleChange("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handleChange("password")}
          />
        </Form.Group>

        <div className="flex justify-between">
          <Button type="submit" variant="secondary">
            Login
            {isAuthenticated() && <Navigate to={'/'} />}
          </Button>

          <Link to={"/signup"}>
            <div className="mt-2">Sign Up</div>
          </Link>
        </div>
      </Form>


    </div>
  );
};

export default LoginPage;
