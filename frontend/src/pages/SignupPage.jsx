import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { signUp } from "../auth/authentication";
import { useState } from "react";
import Error from "../components/Error";


const SignupPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false });
    signUp({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };



  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Form className="w-50 ">
        {error && <Error message={error} />}
        {success && (<div
          className="alert alert-info"
          style={{ display: success ? "" : "none" }}
        >
          New account is created. Please <Link to={"/login"}>Login</Link>
        </div>)}

        <h3 className="mb-5">Sign Up</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleChange("name")}
          />
        </Form.Group>

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
          <Button variant="secondary" onClick={clickSubmit}>
            Sign Up
          </Button>

          <Link to={"/login"}>
            <div className="mt-2">Login</div>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignupPage;
