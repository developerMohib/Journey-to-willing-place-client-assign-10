import { IoSadOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="checka flex bg-base-300 justify-center h-screen items-center">
      <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <IoSadOutline className="text-8xl" />
          <p className="text-3xl">Looks like You are currently Wrong Path</p>
          <NavLink
            to="/"
            className="bg-green-500  relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter border rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Back to Homepage </span>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
