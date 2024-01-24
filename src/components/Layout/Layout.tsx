import { Link, Outlet } from "react-router-dom";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="container">
      <Menu />
      <Link to="/products/create">Create Product</Link>
      <Outlet />
      <Footer />
    </div>
  );
};
