import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-200 text-black px-6 py-4 flex justify-between items-center w-full">
      <div className="text-2xl font-bold">
        <NavLink to="/">
          <h3 className="hover:text-yellow-400 transition">Store</h3>
        </NavLink>
      </div>
      <ul className="flex justify-between gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400" : ""
              }`
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
