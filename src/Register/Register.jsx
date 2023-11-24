import { Link } from "react-router-dom";

const Register = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
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
          {/* name */}
          <div className="relative">
            <i className="fa fa-user absolute text-primarycolor text-xl"></i>
            <input
              name="name"
              type="text"
              required
              placeholder="name"
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
            />
          </div>
          {/* email */}
          <div className="relative mt-4">
            <i className="fa fa-user absolute text-primarycolor text-xl"></i>
            <input
              name="email"
              type="email"
              required
              placeholder="email"
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
            />
          </div>
          {/* password */}
          <div className="relative mt-4">
            <i className="fa fa-lock absolute text-primarycolor text-xl"></i>
            <input
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
            Register
          </button>
          <div className="mt-5 flex gap-2">
            <p>Already Have an account?</p>
            <Link className="underline" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;