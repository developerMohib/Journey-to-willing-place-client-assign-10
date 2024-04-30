import { useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const Update = () => {
  const upSpot = useLoaderData();

  const {tourists_spot_name,  _id} = upSpot;
  console.log(upSpot, _id,'id')

  const handleAdd = (e) => {
    e.preventDefault();
        const form = e.target;
        const countryName = form.country_Name.value;
        const spotName = form.tourists_spot_name.value;
        const location = form.location.value;
        const cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const traveTime = form.travel_time.value;
        const photoTitle = form.photoTitle.value;
        const visitor = form.totaVisitorsPerYear.value;
        const photoUrl = form.url.value;
        const details = form.details.value;
    const updateSpot = {countryName, spotName, location, cost, seasonality, traveTime, photoTitle, visitor, photoUrl,details}

    
    fetch(`https://journey-beck.vercel.app/touristSpot/${_id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'You updated a Spot',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
  }

    return (
        <div>
          <div>
            <h1 className="text-center font-bold text-2xl my-10 ">Update Tourists Spot</h1>
            <h1 className="text-center font-bold text-2xl my-10 "> {tourists_spot_name} </h1>
            <div className="bg-base-200 p-10 ">
              <form onSubmit={handleAdd} >
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
                  value="Update Tourist Spot"
                />
              </form>
            </div>
          </div>
        </div>
    );
};

export default Update;