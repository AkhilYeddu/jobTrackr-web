const Settings = () => {
  return (
    <>
    

    <div className="flex flex-col items-center py-10">

      <div>
      <h1 className="font-bold text-2xl text-center"> Settings</h1>
      <h3 className="text-center">Account and reminder preferences</h3>
    </div>
      
      <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box w-[550px] p-6 mb-6">
        <legend className="fieldset-legend text-lg font-bold">
          Account
        </legend>

        <div className="flex items-center gap-6 py-2">
          <label className="w-40 font-medium">Name</label>
          <input
            type="text"
            className="input input-bordered flex-1"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex items-center gap-6 py-2">
          <label className="w-40 font-medium">Email</label>
          <input
            type="email"
            className="input input-bordered flex-1"
            placeholder="Enter your email"
          />
        </div>
      </fieldset>

      <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box w-[550px] p-6">
        <legend className="fieldset-legend text-lg font-bold">
          Reminders
        </legend>

        <div className="flex items-center gap-6 py-2">
          <label className="w-40 font-medium">Follow up after</label>

          <div className="dropdown flex-1">
            <div tabIndex={0} role="button" className="btn w-full justify-between bg-black">
              Select
            </div>

            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box w-full p-2 shadow"
            >
              <li><a>1 Day</a></li>
              <li><a>3 Days</a></li>
              <li><a>7 Days</a></li>
              <li><a>14 Days</a></li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <label className="font-medium">
            Email notifications
          </label>

          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary"
          />
        </div>
      </fieldset>

      <div className="flex gap-4 mt-8  justify-end">
        <button className="btn btn-outline btn-error rounded-lg">
          Delete Account
        </button>

        <button className="btn btn-primary rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
    </>
    
    
  );
};

export default Settings;