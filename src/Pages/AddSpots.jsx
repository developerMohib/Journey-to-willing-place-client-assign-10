const AddSpots = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl my-10 ">Add Tourists Spot</h1>
        <div className="bg-[#F4F3F0] p-10 ">
          <form>
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
            {/* form photo  and visitor row */}
            <div className="md:flex gap-8 ">
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
                  placeholder="About the place"
                  type="textarea"
                ></textarea>
              </label>
            </div>
            <input
              className=" btn border-none btn-block my-10 bg-success "
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSpots;
