import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import delay from "delay";


const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if(!user) return <Navigate to={"/login"}></Navigate>
  
  return (
    <>
      <h1 className="text-5xl text-center">This is our Dashboard</h1>
      <img className="" src="https://www.bootstrapdash.com/wp-content/uploads/2019/05/Screenshot_2019-05-21-Fily-Admin1.png" alt="" />
    </>
  );
};

export default Dashboard;
