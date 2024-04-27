import { useState } from "react";
import { FaFaceFrown, FaFaceGrin, FaRegCircleUser } from "react-icons/fa6";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
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
            <form>
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
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;