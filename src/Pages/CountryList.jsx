import { AiOutlineLike } from "react-icons/ai";
import { FaComments, FaRegBookmark } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const CountryList = () => {
  const countryList = useLoaderData();

  console.log(countryList, "country");
  const card = countryList.filter(
    (data) => data.country_Name == "Malaysia"
  );
  console.log(card, "coun");

  return (
    <div>
      <div>
              <h1 className="text-2xl text-center my-10 font-bold">Country Name</h1>
            </div>
      <div className="grid grid-cols-3 " >
        {
          card?.map(data => (
            <div key={data._id} className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
          <div>

            
            <div className="relative">
              <img
                src={data.photoURL}
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
                {data?.tourists_spot_name}
              </h2>
            </div>

            <div className="px-3">
              <p> <span>seasonality : </span> {data.seasonality} </p>
              <h2 className="mb-1 text-xl text-black font-semibold">{data?.country_Name}</h2>
              <p className="text-sm text-gray-600">{data?.details}</p>
            </div>
            <div className="flex justify-between ">
              <p> <span>location : </span> {data.location} </p>
              <p> <span>Cost : </span> {data.average_cost} </p>
            </div>
            <div>
              <Link
                to={`/viewDetails`}
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
          ))
        }
      </div>
    </div>
  );
};

export default CountryList;
