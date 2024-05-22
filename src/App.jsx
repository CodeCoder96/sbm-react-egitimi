import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products",
      element: <ProductsPage />
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
