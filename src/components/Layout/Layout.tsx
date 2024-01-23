import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};
