import { IoMdShareAlt } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { FaRegBookmark } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
const Country = () => {
  return (
    <div className="p-10 bg-base-300 ">
      <div>
        <h1 className="text-5xl font-bold text-center">
          Find Your Next Adventure
        </h1>
      </div>
      {/* Sorting */}
      <div className="text-center mt-10 ">
        <div className="join ">
          <select className="select select-bordered w-72 join-item">
            <option selected>Average Cost</option>
            <option>Assending</option>
            <option>Dissending</option>
          </select>
          <select className="select select-bordered w-72 join-item">
            <option selected>Average Vistior</option>
            <option>Assending</option>
            <option>Dissending</option>
          </select>
          <select className="select select-bordered w-72 join-item">
            <option selected>Seasonality</option>
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
      {/* Card */}
      <div className="lg:grid md:grid grid-cols-3 gap-8 my-16 " >
      <div className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
          <div>
            <div className="relative">
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
              Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
              pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad
              illud atqui apeirian...
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
                  > </FaRegBookmark>
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
                  > </FaComments>
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
              Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
              pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad
              illud atqui apeirian...
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
                  > </FaRegBookmark>
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
                  > </FaComments>
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
              Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
              pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad
              illud atqui apeirian...
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
                  > </FaRegBookmark>
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
                  > </FaComments>
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
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Country;
