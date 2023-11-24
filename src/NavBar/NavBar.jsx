import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <ul className="flex gap-6 ">
        <Link className="bg-gray-300 p-2 rounded-2xl px-3" to={"/"}>Home</Link>
        <Link className="bg-gray-300 p-2 rounded-2xl px-3" to={"dashboard"}>Dashboard</Link>
        <Link className="bg-gray-300 p-2 rounded-2xl px-3" to={"login"}>Login</Link>
      </ul>
      
    </div>
  );
};

export default NavBar;