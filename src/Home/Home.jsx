import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className='text-5xl text-center'>This is our home page</h1>
      <h1 className="text-3xl text-center mt-2">You can vist <Link className="underline text-blue-600" to={"/dashboard"} >DASHBOARD</Link> only if you LoggedIn</h1>
      <img className="mt-10 w-full" src="https://th.bing.com/th/id/OIP.dii-5X0EokR3W-YDZb7sxwHaMV" alt="" />
    </div>
  );
};

export default Home;