const AdminPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
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

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <i className="bi bi-calendar3"></i>
                This week
              </button>
            </div>
          </div>

          <h2>Section title</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>amet</td>
                  <td>consectetur</td>
                  <td>adipiscing</td>
                  <td>elit</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>Integer</td>
                  <td>nec</td>
                  <td>odio</td>
                  <td>Praesent</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>libero</td>
                  <td>Sed</td>
                  <td>cursus</td>
                  <td>ante</td>
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>dapibus</td>
                  <td>diam</td>
                  <td>Sed</td>
                  <td>nisi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
