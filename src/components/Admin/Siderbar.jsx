const AdminSiderbar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <i className="bi bi-house-door-fill me-2"></i>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-file-earmark-text-fill me-2"></i>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-people-fill me-2"></i>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-bar-chart-fill me-2"></i>
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-layers-fill me-2"></i>
              Integrations
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminSiderbar;
