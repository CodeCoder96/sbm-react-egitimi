import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/404Page";
import ProductDetailsPage from "./pages/products/ProductDetailsPage";
import LoginPage from "./pages/auth/LoginPage";
import AdminPage from "./pages/admin/AdminPage";
import AdminLayout from "./layouts/AdminLayout";
import CustomersPage from "./pages/admin/CustomersPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
          loader: async ()=>{
            try {
              const response = await fetch("https://fakestoreapi.com/products");
              const data = await response.json();
        
              if (response.ok) {
                return data;
              }
            } catch (error) {
              console.log(error);
            }
          }
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/products/:productId",
          element: <ProductDetailsPage />
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/admin",
          element: <AdminPage />
        }
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <AdminPage />
        },
        {
          path: "customers",
          element: <CustomersPage />
        }
      ],
    },
  ]);

  return (
    <div className="app container position-relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
