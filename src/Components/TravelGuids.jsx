import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const TravelGuids = () => {
  return (
    <div>
      {/* Travel Gueid */}
      <div>
        <div className="bg-gray-100 text-gray-900">
          <div className="container grid grid-cols-12 mx-auto bg-gray-50">
            <div
              className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4"
              style={{
                backgroundImage:
                  "url(https://live.staticflickr.com/1902/45184527901_124f4da7a6_b.jpg)",
                backgroundPosition: "bottom center",
              }}
            ></div>
            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
              <div className="flex justify-start">
                <span className="px-2 py-1 text-xs rounded-full bg-indigo-600 text-gray-50">
                  Label
                </span>
              </div>
              <h1 className="text-3xl font-semibold">
                Nilgiri Bandarban, A Wonderful Tourist Spot in Bangladesh.
              </h1>
              <p className="flex-1 pt-2">
                Nilgiri or Nil Giri is one of the tallest peaks and beautiful
                tourist spot in Bangladesh. Beside this spot you can see Mro
                villages. Their colorful culture and living style are surely an
                unexplored experience for the visitors.
              </p>
			<div className="my-5" >
			<Link to="/register"
              className="relative inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
              <span className=" flex items-center justify-between gap-5 relative">More Information <FaArrowRightLong/> </span>
            </Link>
			</div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="self-center text-sm">by Leroy Jenkins</span>
                </div>
                <span className="text-xs">3 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Travel Gueid */}
    </div>
  );
};

export default TravelGuids;
