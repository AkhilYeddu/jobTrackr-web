

const SourceCard = () => {
  return (
    <div className="items-center flex flex-col"> 

        <div>
        <h1 className="font-bold text-2xl mb-10 mt-10">Applications by source</h1>
    </div>
        <div className="flex gap-2">
            
            <div className="card w-50 rounded-lg card-xs shadow-sm bg-base-300 p-2">
                <div className="card-body">
                    <h2 className="card-title text-xl">Linkedin</h2>
                    <p className="font-bold text-lg">21</p>
                
                </div>
            </div>

            <div className="card w-50 rounded-lg card-xs shadow-sm bg-base-300 p-2">
                <div className="card-body">
                    <h2 className="card-title text-xl">Internshala</h2>
                    <p className="font-bold text-lg">14</p>
                
                </div>
            </div>


            <div className="card w-50 rounded-lg card-xs shadow-sm bg-base-300 p-2">
                <div className="card-body">
                    <h2 className="card-title text-xl">Referral</h2>
                    <p className="font-bold text-lg">7</p>
                
                </div>
            </div>


            
   
    </div>

    </div>
    
  )
}

export default SourceCard