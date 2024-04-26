import { useState } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaFaceFrown, FaFaceGrin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    return (
        <div>
      <div
        data-aos="fade-up"
        className="w-full m-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input required
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <div className="flex relative ">
              <input required
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
              />
              <span onClick={() => setShowPass(!showPass)}>
                {showPass ? (
                  <FaFaceGrin className="text-2xl text-secondary absolute right-0 top-2 " />
                ) : (
                  <FaFaceFrown className="text-2xl text-secondary absolute right-0 top-2 " />
                )}
              </span>
            </div>
            <div className="flex justify-end text-xs text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-indigo-600">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FaGoogle />
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <FaTwitter />
          </button>
          <button
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
          >
            <FaGithub />
          </button>
          {/* <ToastContainer /> */}
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Dont have an account?
          <Link className="underline text-gray-800" to="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Login;