import { useContext } from "react";
import { FaUserCheck } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthCustomContext } from "../MainProvider/MainProvider";


const ViewDetails = () => {

  const spotDetails = useLoaderData();

  const { user } = useContext(AuthCustomContext);
  const name = user.displayName;

  const { id } = useParams();
  // console.log(id,typeof id,  'vise details page')

  const Spot = spotDetails.find((Spots) => Spots._id === id);
  // console.log(Spot, 'view trheke')


  const { tourists_spot_name, photoURL, details, photoTitle, average_cost,country_Name,seasonality,totaVisitorsPerYear } = Spot;

  return (
    <div>
      <div className="mt-10">
        <h1 className="md:text-5xl text-4xl md:font-bold font-semibold text-center">
          About the {tourists_spot_name}
        </h1>
        <h1 className="text-2xl mt-5 font-bold text-center">Tourists Spots</h1>
      </div>
      <div>
        <div className="bg-gray-100 text-gray-900">
          <div className="container grid grid-cols-12 mx-auto bg-gray-50">
    

          <div className="bg-no-repeat bg-cover col-span-full lg:col-span-4">
              <img className="w-full" src={photoURL} alt="" />
            </div>

          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
              <div className="flex justify-start">
                <span className="px-2 py-1 text-xs rounded-full bg-indigo-600 text-gray-50">
                  {tourists_spot_name}
                </span>
                <span className="px-2 mx-2 py-1 text-xs rounded-full bg-indigo-600 text-gray-50">
                  {country_Name}
                </span>
              </div>
              <h1 className="text-3xl font-semibold">{photoTitle}</h1>
              <p className="flex-1 pt-2">{details}</p>
              <div className="">
                <p> <span className="font-bold" >Cost : </span> {average_cost} </p>
                <p> <span className="font-bold" >Seasonality : </span> {seasonality} </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <FaUserCheck className="w-5 h-5 text-gray-600"> </FaUserCheck>
                  <span className="self-center text-sm">by {name} </span>
                </div>
                <span className="text-xs"> Per Year visitor : {totaVisitorsPerYear} </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
