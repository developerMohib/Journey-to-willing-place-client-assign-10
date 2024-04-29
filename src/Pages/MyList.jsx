import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthCustomContext } from "../MainProvider/MainProvider";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";


const MyList = () => {
  const { user } = useContext(AuthCustomContext);

  const myspot = useLoaderData();
  // console.log(myspot, "slp");

  const filterSpot = myspot.filter((item) => item.email == user.email);

  // console.log(filterSpot, "filter");
  const hanleDelete = (_id) => {
    // console.log(_id , 'paice from my lish ')
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://journey-beck.vercel.app/touristSpot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  }

  return (
    <div>
      <div className=" mt-16 mb-8 relative">
        {filterSpot.map((spot) => (
          <div key={spot?._id} className=" bg-gray-100 text-gray-800">
            <div className="container mx-auto space-y-12">
              <div className="flex flex-col rounded-md shadow-sm lg:flex-row">
                <img
                  src={spot?.photoURL}
                  alt={spot?.tourists_spot_name}
                  className="h-80 bg-gray-500 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 px-6 md:relative " >
                  <span className="text-xs uppercase text-gray-600">
                    {spot?.seasonality}
                  </span>
                  <h3 className="text-xl my-3 font-bold">
                    {spot?.tourists_spot_name}
                  </h3>
                  <h3 className="text-3xl font-semibold">{spot?.photoTitle}</h3>
                  <p className="my-6 text-gray-600">{spot?.details}</p>

                  <div className="flex justify-between " >
                    <Link
                      to={`/viewDetails/${spot?._id}`}
                      className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group bg-green-500"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                      <span className="relative"> View Details </span>
                    </Link>

                    <Link
                      to={`/update`}
                      className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group bg-green-500 "
                    >
                      <span className="absolute w-0 h-0 transition-all duration-700 ease-out rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                      <span className="relative"> Update Details </span>
                    </Link>
                  </div>

                  <div onClick={() => hanleDelete(spot?._id) } className="absolute right-0 top-0" >
                  <Link className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group bg-secondary"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                      <span className="relative"> <MdOutlineDeleteForever 
                      data-tooltip-id="my-tooltip"
                                  data-tooltip-content="Delete !"
                                  data-tooltip-place="top"
                                  className="text-2xl"
                      > </MdOutlineDeleteForever> </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Tooltip> </Tooltip>
    </div>
  );
};

export default MyList;
