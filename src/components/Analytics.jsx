
const Analytics = () => {
  return (
    <div className="items-center flex flex-col">
          <div className="text-3xl font-bold mb-5 mt-10">Analytics</div>
      <div className="flex-col">

        <div className="flex p-2 items-center bg-base-300 rounded-lg p-4 m-2">
          <h1 className="w-40">Applied</h1>
            <progress className="progress rounded-lg w-56 h-4 mr-3" value="75" max="100"></progress>
            <span>42</span>
        </div>

        <div className="flex p-2 items-center bg-base-300 rounded-lg p-4 m-2">
          <h1 className="w-40">OA / screening</h1>
            <progress className="progress rounded-lg w-56 h-4 mr-3" value="50" max="100"></progress>
            <span>25</span>
        </div>


        <div className="flex p-2 items-center bg-base-300 rounded-lg p-4 m-2">
          <h1 className="w-40">Interview</h1>
            <progress className="progress rounded-lg w-56 h-4 mr-3" value="25" max="100"></progress>
            <span>11</span>
        </div>


        <div className="flex p-2 items-center bg-base-300 rounded-lg p-4 m-2">
          <h1 className="w-40">Offer</h1>
            <progress className="progress rounded-lg w-56 h-4 mr-3" value="25" max="100"></progress>
            <span>2</span>
        </div>

        
    
      </div>
      
    </div>
      
    
    
  )
}

export default Analytics