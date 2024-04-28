import {Link, useLoaderData } from "react-router-dom";
import Country from "../Components/Country";
import Slider from "../Components/Slider";
import { IoMdShareAlt } from "react-icons/io";
import { FaComments, FaRegBookmark } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const Home = () => {
  const sixSpot = useLoaderData();
  console.log(sixSpot, 'length ', sixSpot.length );
  return (
    <div>
      <Slider> </Slider>
      <div>

      <div className="mt-10" >
        <h1 className="md:text-5xl text-4xl md:font-bold font-semibold text-center">
          Find Your Next Adventure
        </h1>
        <h1 className="text-2xl mt-5 font-bold text-center">Tourists Spots</h1>
      </div>
      {/* Sorting */}
      <div className="text-center mt-10 ">
        <div className="md:join ">
          <select className="select select-bordered lg:w-72 md:w-56 w-52 join-item">
            <option defaultValue>Average Cost</option>
            <option>Assending</option>
            <option>Dissending</option>
          </select>
          <select className="select select-bordered md:w-72 w-52 join-item">
            <option defaultValue>Average Vistior</option>
            <option>Assending</option>
            <option>Dissending</option>
          </select>
          <select className="select select-bordered md:w-72 w-52 join-item">
            <option defaultValue>Seasonality</option>
            <option>Winter</option>
            <option>Summer</option>
            <option>Rainy</option>
          </select>
          <div className="">
            <button className="bg-green-500 btn join-item">
              Find Your Hope{" "}
            </button>
          </div>
        </div>
      </div>

      </div>
      {/* card */}
      <div className="lg:grid md:grid grid-cols-3 gap-8 my-16 lg:p-8 md:p-4 p-1 ">
      {sixSpot.slice(0,5).map((spot) => (
        <div key={spot?._id} >
        <div className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
          <div>
            <div className="relative">
              <img
                src={spot?.photoURL}
                alt={spot?.tourists_spot_name}
                // src="https://media.istockphoto.com/id/1137892510/photo/narrow-creeks-with-river-stream-flowing-into-deep-mangrove-jungle-consisting-of-mainly.jpg?s=612x612&w=0&k=20&c=U9ZLD01pt1ErYGUym1X9bQpG6Zsh1N2bKa5J17fufok="
                // alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
                {spot?.tourists_spot_name}
              </h2>
            </div>

            <div className="px-3">
              <h2 className="mb-1 text-xl font-semibold">
                {spot?.photoTitle}
              </h2>
              <p className="text-sm text-gray-600">
                {spot?.details}
              </p>
            </div>
            <div>
              <Link to={`/details/${spot?._id}`} className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group bg-secondary">
                <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className="relative">Explore More </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="space-x-2">
              <button
                aria-label="Share this post"
                type="button"
                className="p-2 text-center"
              >
                <IoMdShareAlt
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Share Now !"
                  data-tooltip-place="top"
                  className="text-2xl"
                ></IoMdShareAlt>
              </button>
              <button
                aria-label="Bookmark this post"
                type="button"
                className="p-2"
              >
                <FaRegBookmark
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Bookmarks !"
                  data-tooltip-place="top"
                  className="text-2xl"
                >
                  {" "}
                </FaRegBookmark>
              </button>
            </div>
            <div className="flex space-x-2 text-sm text-gray-600">
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5"
              >
                <FaComments
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Comment !"
                  data-tooltip-place="top"
                  className="text-2xl"
                >
                  {" "}
                </FaComments>
                <span>30</span>
              </button>
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5"
              >
                <AiOutlineLike
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="like !"
                  data-tooltip-place="top"
                  className="text-2xl"
                ></AiOutlineLike>
                <span>283</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      ))}

      </div>
      <Country> </Country>
    </div>
  );
};

export default Home;
