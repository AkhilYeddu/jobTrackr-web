
const JobCard = () => {
  return (
    <div className="card w-96 bg-base-300 card-sm shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-2  m-4 hover:border-white hover:border-1">
                <div className="card-body">
                    <h2 className="card-title font-bold text-xl">CRED</h2>
                    <p className="font-medium">Full stack intern</p>
                <div className="justify-end card-actions">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn m-1 btn-primary border rounded-xl cursor-pointer  hover:bg-white hover:text-black" onClick={()=>document.getElementById('my_modal_1').showModal()}>Actions</button>
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

  )
}

export default JobCard