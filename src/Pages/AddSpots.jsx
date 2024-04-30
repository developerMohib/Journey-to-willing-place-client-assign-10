import { useContext } from "react";
import { AuthCustomContext } from "../MainProvider/MainProvider";
import Swal from "sweetalert2";

const AddSpots = () => {
  const {user} = useContext(AuthCustomContext);
  const name = user?.displayName ;
  const email = user?.email ;
  const handleAddSpot = (e) => {
    e.preventDefault();
    const fromV = e.target ;
    const country_Name = fromV.country_Name.value;
    const tourists_spot_name =fromV.tourists_spot_name.value;
    const location = fromV.location.value;
    const average_cost = fromV.average_cost.value;
    const seasonality = fromV.seasonality.value;
    const travel_time = fromV.travel_time.value;
    const photoTitle = fromV.photoTitle.value;
    const photoURL = fromV.url.value;
    const totaVisitorsPerYear = fromV.totaVisitorsPerYear.value;
    const details = fromV.details.value;
    fromV.reset()

    const spotInfo = {country_Name,tourists_spot_name,location,average_cost,seasonality,travel_time,photoURL,totaVisitorsPerYear,details,photoTitle, email};
    
    console.log(spotInfo );
    // data send to server 
    fetch(`http://localhost:5000/touristSpot`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(spotInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                // alert('spot added');
                Swal.fire({
                    title: 'Success!',
                    text: 'You added a New Spot',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
  }
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl my-10 ">Add Tourists Spot</h1>
        <div className="bg-base-200 p-10 ">
          <form onSubmit={handleAddSpot} >
            {/* form coutry name and spot name row */}
            <div className="md:flex gap-8 ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl ">User Name</span>
                </div>
                <input
                  type="text"
                  defaultValue={name}
                  placeholder="User Name"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl "> User Email </span>
                </div>
                <input
                  type="text"
                  defaultValue={email}
                  placeholder="User email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form coutry name and spot name row */}
            <div className="md:flex gap-8 ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl ">Country Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Country Name"
                  name="country_Name"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl "> Tourists Spot Name </span>
                </div>
                <input
                  type="text"
                  placeholder="Tourists Spot Name"
                  name="tourists_spot_name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form location and cost row */}
            <div className="md:flex gap-8 ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl "> Location </span>
                </div>
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl "> Average Cost </span>
                </div>
                <input
                  type="number"
                  placeholder="Average Cost "
                  name="average_cost"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form Category and travel time row */}
            <div className="md:flex gap-8 ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl ">Seasonality</span>
                </div>
                <input
                  type="text"
                  placeholder=" Summer / Winter / Rainy"
                  name="seasonality"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl "> Travel Time </span>
                </div>
                <input
                  type="number"
                  placeholder="5 Days"
                  name="travel_time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form photo title  and visitor row */}
            <div className="md:flex gap-8 ">
            <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl ">Photo Title</span>
                </div>
                <input
                  type="text"
                  placeholder="Photo Title"
                  name="photoTitle"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl "> Total Visitors Per Year </span>
                </div>
                <input
                  type="number"
                  placeholder="100000 travllers"
                  name="totaVisitorsPerYear"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* photo url */}
            <div>
            <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl ">Photo URL</span>
                </div>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* Text area */}
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl ">Short Description</span>
                </div>
                <textarea
                  className="textarea textarea-bordered w-full"
                  name="details"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Short Description about the place"
                  type="textarea"
                ></textarea>
              </label>
            </div>
            <input
              className=" btn border-none btn-block my-10 bg-success "
              type="submit"
              value="Add Tourist Spot"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSpots;
