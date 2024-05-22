import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="py-5">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
