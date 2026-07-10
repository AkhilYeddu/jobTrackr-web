const DashBoard = () => {
  return (
    <div className="dashboard flex">

        <div className="applied m-5">
            <h3 className="font-semibold m-3">Applied - 3</h3>
            <div className="card w-96 bg-base-300 card-sm shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-2 ">
                <div className="card-body">
                    <h2 className="card-title font-bold font-bold text-xl">Razorpay</h2>
                    <p>SDE intern</p>
                <div className="justify-end card-actions">
                    <details className="dropdown ">
                        <summary className="btn m-1 btn-primary border rounded-xl cursor-pointer  hover:bg-white hover:text-black">open or close</summary>
                        <ul className="menu dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>

            </div>
            </div>
        </div>

    </div>
    <div className="oa-screening m-5">
        <h3 className="font-semibold m-3">OA / Screening - 1</h3>
        <div className="card w-96 bg-base-300 card-sm shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-2 ">
        <div className="card-body">
            <h2 className="card-title font-bold text-xl">Swiggy</h2>
            <p>Backend intern</p>
            <div className="justify-end card-actions">
                    <details className="dropdown ">
                        <summary className="btn m-1 btn-primary border rounded-xl cursor-pointer  hover:bg-white hover:text-black">open or close</summary>
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
                <summary className="btn m-1 btn-primary border rounded-xl cursor-pointer hover:bg-white hover:text-black">open or close</summary>
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
                <summary className="btn m-1 btn-primar border rounded-xl btn-disabled cursor-pointer">open or close</summary>
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