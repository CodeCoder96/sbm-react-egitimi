import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/404Page";

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
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
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
