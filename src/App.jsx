import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./routes/MainRoutes";
import { adminRoutes } from "./routes/AdminRoutes";

function App() {
  const router = createBrowserRouter([...mainRoutes, ...adminRoutes]);

  return (
    <div className="app container position-relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
