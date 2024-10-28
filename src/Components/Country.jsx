
import { Link } from "react-router-dom";
import Testominal from "./Testominal";
import TravelGuids from "./TravelGuids";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from 'prop-types'; 
import { useEffect, useState } from "react";

const Country = () => {
  const [coun, setCoun] =  useState([])
  const [spotLen, setSpotLen] = useState(6)
useEffect(()=> {
  fetch(`https://journey-beck.vercel.app/countries`)
  .then(res=>res.json())
  .then(data=>{
    setCoun(data)
  })
},[])
console.log(coun,'countttttr')
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
        

    {
      coun.map(data=>(
        <div key={data._id} className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
        
        <div>
            <div className="relative ">
              <span className="indicator-item absolute right-0 translate-x-4 -translate-y-1.5 rotate-45 badge badge-secondary">
                {" "}
                New{" "}
              </span>
              <img
                src="https://i.pinimg.com/736x/f5/1c/cf/f51ccfc2067f689150fb62512fd1b5a6.jpg"
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold absolute bottom-3 left-3 ">
              {data._country_Name}
              </h2>
            </div>

            <div className="px-3">
              <p className="text-sm text-gray-600">
                One Of the most beautiful country in the world , you can frest your mind
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center px-3 justify-between">
            <div className="flex space-x-2 text-sm text-gray-600">
              <Link to='/country' className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group ">
                <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className=" flex items-center justify-between gap-5 relative">
                View Details <FaArrowRightLong />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))
    }
    <div>
      <div className={`text-center mb-8 ${spotLen === coun.length && 'hidden' } `}>
        <div className="bg-green-500  relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter border rounded-lg group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span onClick={() => setSpotLen(coun.length)} className="relative">Load More </span>
        </div>
      </div>
    </div>

        <Link to='/country' >
        <div  className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
        
        <div>
            <div className="relative ">
              <span className="indicator-item absolute right-0 translate-x-4 -translate-y-1.5 rotate-45 badge badge-secondary">
                {" "}
                New{" "}
              </span>
              <img
                src="https://i.pinimg.com/736x/f5/1c/cf/f51ccfc2067f689150fb62512fd1b5a6.jpg"
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
              Bangladesh
              </h2>
            </div>

            <div className="px-3">
              <p className="text-sm text-gray-600">
                One Of the most beautiful country in the world , you can frest your mind
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center px-3 justify-between">
            <div className="flex space-x-2 text-sm text-gray-600">
              <Link to='/country' className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group ">
                <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className=" flex items-center justify-between gap-5 relative">
                View Details <FaArrowRightLong />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
        </Link>

        <Link to='/country' >
        <div  className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
        
        <div>
            <div className="relative ">
              <span className="indicator-item absolute right-0 translate-x-4 -translate-y-1.5 rotate-45 badge badge-secondary">
                {" "}
                New{" "}
              </span>
              <img
                src="https://live.staticflickr.com/1902/45184527901_124f4da7a6_b.jpg"
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
              indonesia
              </h2>
            </div>

            <div className="px-3">
              <p className="text-sm text-gray-600">
              Batu Caves is a sacred Hindu site featuring towering limestone caves,
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center px-3 justify-between">
            <div className="flex space-x-2 text-sm text-gray-600">
              <Link to='/country' className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group ">
                <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className=" flex items-center justify-between gap-5 relative">
                View Details <FaArrowRightLong />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
        </Link>

        <Link to='/country' >
        <div  className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
        
        <div>
            <div className="relative ">
              <span className="indicator-item absolute right-0 translate-x-4 -translate-y-1.5 rotate-45 badge badge-secondary">
                {" "}
                New{" "}
              </span>
              <img
                src="https://www.shutterstock.com/image-photo/st-martins-island-locally-known-600nw-1741698692.jpg"
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
              Thailand
              </h2>
            </div>

            <div className="px-3">
              <p className="text-sm text-gray-600">
              Wat Arun, also known as the Temple of Dawn, is one of Bangkok's most iconic landmarks
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center px-3 justify-between">
            <div className="flex space-x-2 text-sm text-gray-600">
              <Link to='/country' className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group ">
                <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className=" flex items-center justify-between gap-5 relative">
                View Details <FaArrowRightLong />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
        </Link>

        <Link to='/country' >
        <div  className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
        
        <div>
            <div className="relative ">
              <span className="indicator-item absolute right-0 translate-x-4 -translate-y-1.5 rotate-45 badge badge-secondary">
                {" "}
                New{" "}
              </span>
              <img
                src="https://live.staticflickr.com/1902/45184527901_124f4da7a6_b.jpg"
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
              Malayashia
              </h2>
            </div>

            <div className="px-3">
              <p className="text-sm text-gray-600">
              Batu Caves is a sacred Hindu site featuring towering limestone caves,
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center px-3 justify-between">
            <div className="flex space-x-2 text-sm text-gray-600">
              <Link to='/country' className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group ">
                <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className=" flex items-center justify-between gap-5 relative">
                View Details <FaArrowRightLong />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
        </Link>

        <Link to='/country' >
        <div  className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
        
        <div>
            <div className="relative ">
              <span className="indicator-item absolute right-0 translate-x-4 -translate-y-1.5 rotate-45 badge badge-secondary">
                {" "}
                New{" "}
              </span>
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a9/8b/44/sea-beach.jpg?w=1200&h=-1&s=1"
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
              vietnam
              </h2>
            </div>

            <div className="px-3">
              <p className="text-sm text-gray-600">
              Chiang Mai Old City is a cultural hub featuring ancient temples,
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center px-3 justify-between">
            <div className="flex space-x-2 text-sm text-gray-600">
              <Link to='/country' className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group ">
                <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className=" flex items-center justify-between gap-5 relative">
                View Details <FaArrowRightLong />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
        </Link>
        <Link to='/country' >
        <div  className="flex flex-col p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
        
        <div>
            <div className="relative ">
              <span className="indicator-item absolute right-0 translate-x-4 -translate-y-1.5 rotate-45 badge badge-secondary">
                {" "}
                New{" "}
              </span>
              <img
                src="https://i.pinimg.com/736x/f5/1c/cf/f51ccfc2067f689150fb62512fd1b5a6.jpg"
                alt=""
                className="object-cover w-full mb-4 bg-gray-500"
              />
              <h2 className="mb-1 text-4xl font-bold text-white absolute bottom-3 left-3 ">
              Combodia
              </h2>
            </div>

            <div className="px-3">
              <p className="text-sm text-gray-600">
              Chiang Mai Old City is a cultural hub featuring ancient temples,
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center px-3 justify-between">
            <div className="flex space-x-2 text-sm text-gray-600">
              <Link to='/country' className="relative mt-2 inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group ">
                <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className=" flex items-center justify-between gap-5 relative">
                View Details <FaArrowRightLong />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
        </Link>


      </div>
      <div>
      <TravelGuids> </TravelGuids>
      </div>
      <div>
        <Testominal> </Testominal>
      </div>
      
    </div>
  );
};
Country.propTypes = {
  spot:PropTypes.object,
}
export default Country;
