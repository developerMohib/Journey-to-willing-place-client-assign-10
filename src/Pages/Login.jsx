import { useContext, useState } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaFaceFrown, FaFaceGrin } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthCustomContext } from "../MainProvider/MainProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const {user, signInGoogle,logInUser, signInGithub} = useContext(AuthCustomContext);
  const location = useLocation() ;
  const Navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault(); 
    const formV = e.target ;
    const name = formV.name.value;
    const email = formV.email.value;
    const password = formV.password.value;
    console.log(password, email,name, 'login page')

     // send email and password in database
     logInUser(email, password)
     .then((result) => {
       // Successfully logged in
       const user = result.user;
       if (user) {
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "You have logged in successfully!",
           showConfirmButton: false,
           timer: 1500
         });
       }
       Navigate(location?.pathname ? location.state : '/' );
     })
     .catch((error) => {
       console.error(error.message, 'login page');
       Swal.fire({
         icon: 'error',
         title: "Ooop...!",
         text: 'This Email already used!.'
       });
     });
  }
  const hanldeGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: 'success',
          title: "success!",
          text: 'You have logged in successfully!.'
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithub = () => {
    signInGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: 'success',
          title: "success!",
          text: 'You have logged in successfully!.'
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(user,'user from login ')
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="md:text-5xl text-3xl font-bold ">Log In</h1>
      </div>
      <div className="md:grid grid-cols-2 items-center my-10 px-10 justify-between">
        <div>
          <img
            className="min-h-screen"
            src="https://i.ibb.co/cNjr28B/loginpage.png"
            alt=""
          />
        </div>
        {/* my form */}
        <div className="w-full m-auto space-y-3 rounded-xl bg-gray-50 text-gray-800">
          <div className="bg-[#F4F3F0] p-10 ">
            <form onSubmit={handleSignIn} >
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* pass */}
              <div>
                <label className="form-control relative w-full">
                  <div className="label">
                    <span className="label-text">Password</span>
                  </div>
                  <input
                    required
                    type={showPass ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                  />
                  <span onClick={() => setShowPass(!showPass)}>
                    {showPass ? (
                      <FaFaceGrin className="text-2xl text-secondary absolute right-3 bottom-3 " />
                    ) : (
                      <FaFaceFrown className="text-2xl text-secondary absolute right-3 bottom-3 " />
                    )}
                  </span>
                </label>
              </div>
              <input
                className=" btn border-none btn-block my-10 bg-success "
                type="submit"
                value="Log In"
              />
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
              onClick={hanldeGoogle}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <FaGoogle />
              </button>
              <button
                aria-label="Log in with Twitter"
                className="p-3 rounded-sm"
              >
                <FaTwitter />
              </button>
              <button
              onClick={handleGithub}
                aria-label="Log in with GitHub"
                className="p-3 rounded-sm"
              >
                <FaGithub />
              </button>
              {/* <ToastContainer /> */}
            </div>
            <p className="text-xl text-center sm:px-6 text-gray-600">
              Dont have an account?
              <Link className="underline mx-1 ml-2 text-gray-800"  to="/register">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
