import ProtectedRoute from "../components/ProtectedRoute";
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
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
    ],
  },
];
