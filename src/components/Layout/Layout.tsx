import { Link, Outlet } from "react-router-dom";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="container mx-auto">
      <Menu />
      <div className="my-4">
        <Link to="/products/create" className="dark:text-slate-300">
          Create Product
        </Link>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};
