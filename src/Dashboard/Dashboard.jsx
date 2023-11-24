import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import delay from "delay";


const Dashboard =  () => {
  const { user,isLoggedIn } = useContext(AuthContext);

  isLoggedIn()
  

  
  return (
    <>
      <h1>This is our Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis enim
        repudiandae quas voluptate deleniti odio facilis. Expedita sapiente
        architecto sit voluptates iure. Cum nesciunt inventore beatae velit
        voluptatibus aut aspernatur.
      </p>
    </>
  );
};

export default Dashboard;
