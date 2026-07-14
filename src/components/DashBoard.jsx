
const DashBoard = () => {
   
  return (
    <div className="dashboard grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="applied m-5">
            <h3 className="font-semibold m-3">Applied - 3</h3>
            <div className="card w-96 bg-base-300 card-sm shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-2 m-4 hover:border-white hover:border-1">
                <div className="card-body">
                    <h2 className="card-title font-bold font-bold text-xl">Razorpay</h2>
                    <p className="font-medium">SDE intern</p>
                <div className="justify-end card-actions">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn m-1 btn-primary border rounded-xl cursor-pointer  hover:bg-white hover:text-black" onClick={()=>document.getElementById('my_modal_1').showModal()}>Actions</button>
                        <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Razorpay</h3>
                            <p className="py-4">SDE intern</p>


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

        <div className="card w-96 bg-base-300 card-sm shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-2  m-4 hover:border-white hover:border-1">
                <div className="card-body">
                    <h2 className="card-title font-bold font-bold text-xl">Zomato</h2>
                    <p className="font-medium">Front end intern</p>
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

        

    </div>
    <div className="oa-screening m-5">
        <h3 className="font-semibold m-3">OA / Screening - 1</h3>
        <div className="card w-96 bg-base-300 card-sm shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-2 m-4 hover:border-white hover:border-1">
        <div className="card-body">
            <h2 className="card-title font-bold text-xl">Swiggy</h2>
            <p className="font-medium">Backend intern</p>
            <div className="justify-end card-actions">
                    <details className="dropdown ">
                        <summary className="btn m-1 btn-primary border rounded-xl cursor-pointer  hover:bg-white hover:text-black">Actions</summary>
                        <ul className="menu dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
            </div>
        </div>
        </div>

        <div className="card w-96 bg-base-300 card-sm shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-2 m-4 hover:border-white hover:border-1">
        <div className="card-body">
            <h2 className="card-title font-bold text-xl">Groww</h2>
            <p className="font-medium">SDE intern</p>
            <div className="justify-end card-actions">
                    <details className="dropdown ">
                        <summary className="btn m-1 btn-primary border rounded-xl cursor-pointer  hover:bg-white hover:text-black">Actions</summary>
                        <ul className="menu dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
            </div>
        </div>
        </div>
    </div>

    <div className="interview m-5">
        <h3 className="font-semibold m-3">Interview - 2</h3>
        <div className="card w-96 bg-base-300 card-sm shadow-sm rounded-xl border-1 border-blue-400 transition-all duration-300 hover:-translate-y-2 ">
        <div className="card-body">
            <h2 className="card-title text-xl">Dunzo</h2>
            <p className="text-blue-400 font-bold">Tomorrow, 4pm</p>
            <div className="justify-end card-actions">
                    <details className="dropdown ">
                <summary className="btn m-1 btn-primary border rounded-xl cursor-pointer hover:bg-white hover:text-black">Actions</summary>
                <ul className="menu dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            </div>
        </div>
        </div>
    </div>

    <div className="offer m-5">
        <h3 className="font-semibold m-3">Offer - 1</h3>
        <div className="card w-96 bg-base-300 card-sm shadow-sm rounded-xl rounded-xl border-1 border-green-400 bg-green-900 transition-all duration-300 hover:-translate-y-2">
        <div className="card-body">
            <h2 className="card-title text-green-400 font-bold text-xl">Meesho!</h2>
            <p className="text-green-400 font-bold ">Offer Received</p>
            <div className="justify-end card-actions">
                    <details className="dropdown ">
                <summary className="btn m-1 btn-primar border rounded-xl btn-disabled cursor-pointer">Actions</summary>
                <ul className="menu dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            </div>
        </div>
        </div>
    </div>
    </div>

   

        
  )
}

export default DashBoard