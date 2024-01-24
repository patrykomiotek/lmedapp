import { NavLink } from "react-router-dom";
import { ThemeSwitcher } from "../Theme/ThemeSwitcher";

export const Menu = () => {
  return (
    <div className="pb-4 border-b-2 border-stone-900">
      <ul className="flex mt-2">
        <li className="mr-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-400 dark:text-white" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-red-400 " : "dark:text-white"
            }
          >
            Products
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink
            to="/registration"
            className={({ isActive }) =>
              isActive ? "text-red-400" : "dark:text-white"
            }
          >
            Registration
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              isActive ? "text-red-400" : "dark:text-white"
            }
          >
            Auth
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-400" : "dark:text-white"
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="mr-4">
          <ThemeSwitcher />
        </li>
      </ul>
    </div>
  );
};
