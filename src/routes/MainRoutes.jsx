import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/404Page";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import ProductDetailsPage from "../pages/products/ProductDetailsPage";
import ProductsPage from "../pages/products/ProductsPage";

export const mainRoutes = [
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
        loader: async () => {
          try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();

            if (response.ok) {
              return data;
            }
          } catch (error) {
            console.log(error);
          }
        },
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
        element: <ProductDetailsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];
