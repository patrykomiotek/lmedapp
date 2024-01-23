import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="pb-4 border-b-2 border-stone-900">
      <ul className="flex mt-2">
        <li className="mr-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            Products
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink
            to="/registration"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            Registration
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
