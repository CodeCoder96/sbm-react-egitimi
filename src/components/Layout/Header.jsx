import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className="position-fixed w-100 start-0 top-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-danger" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart
                </NavLink>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <strong className="text-info nav-link">
                      Hoşgeldin {user.username}
                    </strong>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => dispatch(logoutUser())}
                  >
                    <strong className="text-danger nav-link">Çıkış Yap!</strong>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
            <div
              className="d-flex align-items-center"
              onClick={() => navigate("/cart")}
            >
              <i className="bi bi-bag text-dark"></i>
              <span className="badge bg-danger ">{cartItems.length}</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
