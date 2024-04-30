import { useContext, useState } from "react";
import { FaFaceFrown, FaFaceGrin, FaRegCircleUser } from "react-icons/fa6";
import { AuthCustomContext } from "../MainProvider/MainProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { registerUser,updateProfileFromUser } = useContext(AuthCustomContext);
  const location = useLocation() ;
  const Navigate = useNavigate(); 
  

  const handleRegister = (e) => {
    e.preventDefault();
    const formV = e.target;
    const name = formV.name.value;
    const email = formV.email.value;
    const photoUrl = formV.url.value;
    const password = formV.password.value;

    console.log(name, email, photoUrl);

    
  if (password.length < 6) {
    return Swal.fire("Password should be at least 6 characters long!");
}

else if (!/[A-Z]/.test(password)) {
    return Swal.fire("Your password must contain at least one capital letter.!"); 
}

else if (!/[a-z]/.test(password)) {
    return Swal.fire("Your password must contain at least one lowercase letter.!"); 
}

else if(!/\d/.test(password)) {
    return Swal.fire("our password must contain at least one digit.!"); 
}

  Navigate("/");
  


    // Register User
    registerUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        updateProfileFromUser(name, photoUrl)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account create successfully !",
            showConfirmButton: false,
            timer: 1500,
          });
          return ;
        })
        Navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "This Email already use",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="md:text-5xl text-3xl font-bold ">Register</h1>
        <FaRegCircleUser className="md:text-8xl text-5xl mt-5 font-bold mx-auto">
          {" "}
        </FaRegCircleUser>
      </div>
      <div className="md:grid grid-cols-2 items-center my-10 px-10 justify-between">
        <div>
          <img
            className=" min-h-screen"
            src="https://i.ibb.co/cNjr28B/loginpage.png"
            alt=""
          />
        </div>
        {/* my form */}
        <div className="w-full m-auto space-y-3 rounded-xl bg-gray-50 text-gray-800">
          <div className="bg-[#F4F3F0] p-10 ">
            <form onSubmit={handleRegister}>
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    required
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* email */}
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
              {/* form photo url row */}
              <div className="">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Photo URL</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="url"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <input
                className=" btn border-none btn-block my-10 bg-success "
                type="submit"
                value="Register"
              />
            </form>
            <p className="text-xl text-center sm:px-6 text-gray-600">
              Have already an account?
              <Link className="underline mx-1 ml-2 text-gray-800" to="/login">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
