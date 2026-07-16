import { Clock } from "lucide-react"
import { AlertCircle } from "lucide-react"
const ReminderCard = () => {
  return (
    <div>
            <div>
            <div className="text-2xl font-bold mt-2 ml-2">Reminders</div>
        <div className="text-base ml-2 mb-10">Upcoming follow-ups, soonest first</div>
        </div>
        <div>
                <div role="alert" className="alert bg-error-content alert-vertical sm:alert-horizontal m-3">
        <div>
            <AlertCircle/>
        </div>
        <div>
            <h3 className="font-bold">Swiggy</h3>
            <div className="text-xs">Overdue - followup today</div>
        </div>
        <button className="btn btn-sm border-white rounded-lg hover:bg-white hover:text-black">Mark done</button>
        </div>

        <div role="alert" className="alert alert-vertical sm:alert-horizontal m-3">
            <div>
                <Clock/>
            </div>
        <div>
            <h3 className="font-bold">Zomato</h3>
            <div className="text-xs">Follow up in 5 days</div>
        </div>
        <button className="btn btn-sm border-white rounded-lg hover:bg-white hover:text-black">Mark done</button>
        </div>

        <div role="alert" className="alert alert-vertical sm:alert-horizontal m-3">
        <div>
                <Clock/>
            </div>
        <div>
            <h3 className="font-bold">Razorpay</h3>
            <div className="text-xs">Follow up in 7 days</div>
        </div>
        <button className="btn btn-sm border-white rounded-lg hover:bg-white hover:text-black">Mark done</button>
        </div>
        </div>
    </div>
    
        
  )
}

export default ReminderCard