import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products",
      element: <ProductsPage />
    },
    {
      path: "/about",
      element: <AboutPage />
    },
    {
      path: "/cart",
      element: <CartPage />
    }
  ]);

  return (
    <div className="app container position-relative">
      <Header />
      <main className="pt-5">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
