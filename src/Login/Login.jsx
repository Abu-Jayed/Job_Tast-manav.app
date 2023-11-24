import { useContext, useState } from "react";
import delay from "delay";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const {setUser} = useContext(AuthContext)

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = formData.email
    const password = formData.password
    const login_info = {email,password}
    console.log(login_info);


    await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login_info),
    })
      .then((res) => res.json())
      .then(async (result) => {
          // console.log(result);
          await delay(900)
          setFormData({
            email: "",
            password: "",
          });
          await delay(1000);
          if(result.message == "can not find any email address"){
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "no email address found",
              showConfirmButton: false,
              timer: 1500,
            });
          } else if(result.message == "Wrong password"){
            console.log(result);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "wrong password",
              showConfirmButton: false,
              timer: 1500,
            });
          }else if(result.message != "Wrong password" && result.message != "can not find any email address"){
            setUser(true)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "login success",
              showConfirmButton: false,
              timer: 1500,
            });
            await delay(2500)
            navigate("/dashboard");
          }
      });

  };
  return (
    <div className="max-w-6xl">
      <img
        src="/src/assets/wave.png"
        className="fixed hidden lg:block inset-0 h-full"
        style={{ zIndex: -1 }}
      />
      <div className="max-w-6xl mx-auto h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
        <img
          src="/src/assets/unlock.svg"
          className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
        />
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center w-1/2"
        >
          <img src="/src/assets/avatar.svg" className="w-28" />
          <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">
            Welcome to you
          </h2>
          <div className="relative">
            <i className="fa fa-user absolute text-primarycolor text-xl"></i>
            <input
              name="email"
              type="email"
              onChange={handleInputChange}
              value={formData.email}
              required
              placeholder="email"
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
            />
          </div>
          <div className="relative mt-8">
            <i className="fa fa-lock absolute text-primarycolor text-xl"></i>
            <input
            onChange={handleInputChange}
            value={formData.password}
              required
              name="password"
              type="password"
              placeholder="password"
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-20 bg-[#F9A826] rounded-full text-black font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
          >
            Login
          </button>
          <div className="mt-5 flex gap-2">
            <p>Don&apos;t have any account</p>
            <Link className="underline" to={"/register"}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
