import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user,setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setUser(false)
  }
  return (
    <div>
      <ul className="flex gap-6 ">
        <Link className="bg-gray-300 p-2 rounded-2xl px-3" to={"/"}>
          Home
        </Link>
        <Link className="bg-gray-300 p-2 rounded-2xl px-3" to={"dashboard"}>
          Dashboard
        </Link>
        {user ? (
          <p onClick={handleLogout} className="cursor-pointer bg-gray-300 p-2 rounded-2xl px-3">Logout</p>
        ) : (
          <Link className="bg-gray-300 p-2 rounded-2xl px-3" to={"login"}>
            Login
          </Link>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
