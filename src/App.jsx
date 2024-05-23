import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { mainRoutes } from "./routes/MainRoutes";
import { adminRoutes } from "./routes/AdminRoutes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([...mainRoutes, ...adminRoutes]);

  return (
    <div className="app container position-relative">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
