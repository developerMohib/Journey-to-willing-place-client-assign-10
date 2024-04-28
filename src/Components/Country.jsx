import { IoMdShareAlt } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { FaRegBookmark } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import Testominal from "./Testominal";
import TravelGuids from "./TravelGuids";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from 'prop-types'; 

const Country = () => {

  // {country_Name,tourists_spot_name,location,average_cost,seasonality,travel_time,photoURL,totaVisitorsPerYear,details,photoTitle, email};

  return (
    <div className="p-10 bg-base-300 ">
      {/* country Section */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Find Your Next Adventure is Here
        </h1>
        <h1 className="text-2xl mt-5 font-bold text-center">
          Countries Section
        </h1>
      </div>

      <div className="lg:grid md:grid grid-cols-3 gap-8 my-16 ">
        <div className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
          <div>
            <div className="relative ">
              <span className="indicator-item absolute right-0 translate-x-4 -translate-y-1.5 rotate-45 badge badge-secondary">
                {" "}
                New{" "}
              </span>
              <img
                src="https://source.unsplash.com/random/100x100/?5"
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
                Nam platonem
              </h2>
            </div>

            <div className="px-3">
              <h2 className="mb-1 text-xl font-semibold">
                Nam cu platonem posidonium sanctus debitis te
              </h2>
              <p className="text-sm text-gray-600">
                Eu qualisque aliquando mel, id lorem detraxit nec, ad elit
                minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius,
                vim ad illud atqui apeirian...
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center px-3 justify-between">
            <div className="space-x-2">
              <p> From : $500 </p>
            </div>
            <div className="flex space-x-2 text-sm text-gray-600">
              <Link className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group ">
                <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className=" flex items-center justify-between gap-5 relative">
                  More Information <FaArrowRightLong />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
          <div>
            <div className="relative">
              <span className="indicator-item absolute right-0 translate-x-4 -translate-y-1.5 rotate-45 badge badge-secondary">
                {" "}
                New{" "}
              </span>
              <img
                src="https://source.unsplash.com/random/100x100/?5"
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
                Nam platonem
              </h2>
            </div>

            <div className="px-3">
              <h2 className="mb-1 text-xl font-semibold">
                Nam cu platonem posidonium sanctus debitis te
              </h2>
              <p className="text-sm text-gray-600">
                Eu qualisque aliquando mel, id lorem detraxit nec, ad elit
                minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius,
                vim ad illud atqui apeirian...
              </p>
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

        <div className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
          <div>
            <div className="relative">
              <span className="indicator-item absolute right-0 translate-x-4 -translate-y-1.5 rotate-45 badge badge-secondary">
                {" "}
                New{" "}
              </span>
              <img
                src="https://source.unsplash.com/random/100x100/?5"
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
                Nam platonem
              </h2>
            </div>

            <div className="px-3">
              <h2 className="mb-1 text-xl font-semibold">
                Nam cu platonem posidonium sanctus debitis te
              </h2>
              <p className="text-sm text-gray-600">
                Eu qualisque aliquando mel, id lorem detraxit nec, ad elit
                minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius,
                vim ad illud atqui apeirian...
              </p>
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
      <div>
      <TravelGuids> </TravelGuids>
      </div>
      <div>
        <Testominal> </Testominal>
      </div>
      
      <Tooltip id="my-tooltip" />
    </div>
  );
};
Country.propTypes = {
  spot:PropTypes.object,
}
export default Country;
