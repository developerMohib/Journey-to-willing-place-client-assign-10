import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaComments, FaRegBookmark } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const TouristSpot = () => {
  const allSpots = useLoaderData();
  // const [spotLen, setSpotLen] = useState(6)

  // const sixSpot = useLoaderData();
  const [sortBy, setSortBy] = useState(null);
const handleSortChange = (event) => {
  setSortBy(event.target.value);
}

const sortedData = [...allSpots].sort((p1, p2) => {
  
  const cost1 = parseInt(p1.average_cost);
  const cost2 = parseInt(p2.average_cost);

  if (sortBy === "ascending") {
      return cost1 - cost2;
  } else if (sortBy === "descending") {
      return cost2 - cost1;
  } else {
      return 0;
  }
});




  return (
    <div>
      <div>
        <div className="mt-10">
          <h1 className="md:text-5xl text-4xl md:font-bold font-semibold text-center">
            Find Your Next Adventure
          </h1>
          <h1 className="text-2xl mt-5 font-bold text-center">
            Tourists Spots
          </h1>
        </div>
        {/* Sorting */}
        <div className="text-center mt-10 ">
          <div className="md:join w-[90%] ">
            <select
              onChange={handleSortChange}
              className="select select-bordered w-[90%] block mx-auto join-item"
            >
              <option defaultValue>Average Cost</option>
                <option value="descending">Ascending</option>
              <option value="ascending">Descending </option>
            </select>

            <select
            onChange={handleSortChange} className="select select-bordered w-[90%] block mx-auto my-3 join-item">
              <option defaultValue>Average Vistior</option>
                <option value="descending">Ascending</option>
              <option value="ascending">Descending </option>
            </select>

            <select className="select select-bordered w-[90%] block mx-auto join-item">
              <option value="seasonality" defaultValue>
                Seasonality
              </option>
              <option>Winter</option>
              <option>Summer</option>
              <option>Rainy</option>
            </select>
            <div className="">
              <button
                className="bg-green-500 btn md:w-36 join-item"
              >
                Find Your Hope{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="lg:grid md:grid grid-cols-3 gap-8 mt-16 mb-8 lg:p-8 md:p-4 p-1 ">
        {allSpots.map((spot) => (
          <div key={spot?._id}>
            <div className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
              <div>
                <div className="relative ">
              <span className="indicator-item absolute right-3 translate-x-8 translate-y-3 rotate-45 badge badge-secondary">
              {spot?.seasonality}
              </span>
              <img
                src={spot?.photoUrl}
                alt={spot?.tourists_spot_name}
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
              {spot?.tourists_spot_name}
              </h2>
            </div>



                <div className="px-3">
                  <div className="flex my-2 justify-between" >
                  <p> <span className="font-semibold my-1 " >Average Cost : </span> {spot?.average_cost} </p>
                  <p> <span className="font-semibold my-1 " > Visitors : </span> {spot?.totaVisitorsPerYear} </p>
                  </div>
                  <h2 className="mb-1 text-xl font-semibold">
                    {spot?.photoTitle}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {spot?.details.slice(0, 200)}
                  </p>
                  <div className="flex my-2 justify-between" >
                  <p className="text-sm text-gray-600"> <span className="font-semibold my-1 " > Travel Time : </span>
                    {spot?.travel_time}
                  </p>
                  <p> <span className="font-semibold my-1 " > Seasonality : </span> {spot?.seasonality}</p>
                  </div>
                </div>

                <div>
                  <Link
                    to={`/viewDetails/${spot?._id}`}
                    className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group bg-secondary"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative"> View Details </span>
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
      
{/* <div className={`text-center mb-8 ${spotLen === allSpots.length && 'hidden' } `}>
        <div className="bg-green-500  relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter border rounded-lg group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span onClick={() => setSpotLen(sortedData.length)} className="relative">Load More </span>
        </div>
      </div> */}
    </div>
  );
};

export default TouristSpot;
