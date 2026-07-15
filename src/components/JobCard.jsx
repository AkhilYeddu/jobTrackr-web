
const JobCard = (props) => {
    const{ jobData } = props;
    const { company, role, status} = jobData;
    console.log(jobData.status)
  return (
    <>
     
     <div className={`card w-full bg-base-300 card-sm shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-2  m-4  hover:border-1 ${
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
                    jobData.status === "Offer" ? <h1 className="text-green-400 font-bold">Offer received!</h1> : null
                   }
                <div className="justify-end card-actions">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className={`btn m-1 btn-primary border rounded-xl cursor-pointer  hover:bg-white hover:text-black ${
                            status === "Offer" ? "btn-disabled" : null
                        }`} onClick={()=>document.getElementById('my_modal_1').showModal()}>Actions</button>
                        <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
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