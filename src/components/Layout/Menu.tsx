import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="mb-4 border-b-2 border-stone-900">
      <ul className="flex mt-2">
        <li className="mr-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-4">
          <Link to="/registration">Registration</Link>
        </li>
        <li className="mr-4">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
