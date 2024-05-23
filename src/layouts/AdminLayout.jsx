import { Outlet } from "react-router-dom";
import AdminSiderbar from "../components/Admin/Siderbar";

const AdminLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSiderbar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
