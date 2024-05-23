import AdminLayout from "../layouts/AdminLayout";
import ErrorPage from "../pages/404Page";
import AdminPage from "../pages/admin/AdminPage";
import CustomersPage from "../pages/admin/CustomersPage";

export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
    ],
  },
];
