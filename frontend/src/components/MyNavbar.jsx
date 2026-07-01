import { RiShoppingBag3Fill } from "react-icons/ri";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { itemTotal } from "../cart/cartFunctions";
import { isAuthenticated, signOut } from "../auth/authentication";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";


const MyNavbar = () => {
  const user = isAuthenticated();
  const navigate = useNavigate();

  const signOutHandler = () => {
    signOut(() => {
      navigate("/");
    });
  };

  return (
    <Navbar expand="lg" className="bg-slate-900">
      <Container>
        <LinkContainer to={"/"} className="text-white">
          <Navbar.Brand href="#home">
            <div className="flex gap-x-2 items-center">
              <img src='https://res.cloudinary.com/dxxc4e93b/image/upload/v1781692362/ptech_mxpftf.png' alt="logo" className="w-10 h-10" />
              <p className="text-2xl mt-2">PTech</p>
            </div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">


            <LinkContainer to={"/shop"}>
              <Nav.Link className="text-white">
                <div className="flex items-center space-x-1">
                  <div>
                    <RiShoppingBag3Fill size={20} />
                  </div>
                  <div>Shop</div>
                </div>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/cart"}>
              <Nav.Link className="text-white">
                <div className="flex items-center space-x-1">
                  <div>
                    <FaShoppingCart />
                  </div>
                  <div>Cart</div>
                  <sup>
                    <small className="rounded-md bg-slate-600 text-white m-1 ml-0.5 px-1">
                      {itemTotal()}
                    </small>
                  </sup>
                </div>
              </Nav.Link>
            </LinkContainer>


            {user ? (
              <Nav.Link className="text-white">
                <div className="flex items-center space-x-1">
                  <div>
                    <FaUserCircle />
                  </div>
                  <div>{user.name}</div>
                </div>
              </Nav.Link>
            ) : (
              <LinkContainer to={"/login"}>
                <Nav.Link className="text-white">Login</Nav.Link>
              </LinkContainer>
            )}

            {!user ? (
              ""
            ) : (
              <NavDropdown>
                <LinkContainer to="/admin/listproducts">
                  <NavDropdown.Item>Admin</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={signOutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
