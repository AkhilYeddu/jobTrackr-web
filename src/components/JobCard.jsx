
const JobCard = (props) => {
    const{ jobData } = props;
    const { company, role, status, interviewDate, interviewTime, appliedDate} = jobData;
    console.log(jobData.status)
  return (
    <>
     
     <div className={`card w-full bg-base-300 card-sm shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-2  m-4  hover:border ${
        status === "Interview" ?
         "border border-blue-400"
          : status === "Offer" 
          ? "border border-green-400 bg-green-900" 
          : null
     }`}>
                <div className="card-body">
                    <h2 className={`card-title font-bold text-xl ${
                        status === "Offer" ? "text-green-400" : null
                    }`}>{company}</h2>
                    <p className={`font-medium ${
                        status === "Offer" ? "text-green-400" : null
                    }`}>{role}</p>
                   {
                    status === "Offer" ?
                     <h1 className="text-green-400 font-bold">Offer received!</h1> 
                     : status === "Interview" ? <h1 className="text-blue-500 font-bold">On {interviewDate}, {interviewTime}</h1> : null 
                   }
                <div className="justify-end card-actions">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className={`btn m-1 btn-primary border rounded-xl cursor-pointer  hover:bg-white hover:text-black ${
                            status === "Offer" ? "btn-disabled" : null
                        }`} onClick={()=>document.getElementById('my_modal_1').showModal()}>Actions</button>
                        <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">{company}</h3>
                            <p className="py-1">{role}</p>
                            <hr className="mb-5"></hr>
                            <div className="flex items-center justify-end">
                                        
                                <p className="font-bold">Status: </p>
                               <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">
    {status}
  </div>

  <ul
    tabIndex={0}
    className="dropdown-content menu bg-base-300 rounded-box z-[1] w-52 p-2 shadow"
  >
    <li><a>OA / Screening</a></li>
    <li><a>Interview</a></li>
    <li><a>Offer</a></li>
  </ul>
</div>
                                            
                            </div>
                            
                            <div className="flex items-center justify-end">
                                <p className="font-bold">Applied On: </p>
                                <p className="py-4 font-bold">{appliedDate}</p>
                            </div>
                            
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Save Changes</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
            </div>
            </div>
        </div>
    </>
    

  )
}

export default JobCard