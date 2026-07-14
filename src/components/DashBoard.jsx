import jobs from "../utils/mockData"
import JobCard from "./JobCard";

const DashBoard = () => {
    const jobList = jobs;

  return (
    <div className="dashboard grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    <div className="applied m-5">
        <h3 className="font-semibold m-3">Applied</h3>
        {
            jobList.filter((job)=> job.status === "Applied")
           .map((job) => <JobCard key={job.id} jobData = {job}></JobCard>)
        }
    </div>

    <div className="oa-screening m-5">
        <h3 className="font-semibold m-3">OA / Screening</h3>
         {
           jobList.filter((job)=> job.status === "OA / Screening")
           .map((job) => <JobCard key={job.id} jobData = {job}></JobCard>)  
        }
    </div>

    <div className="interview m-5">
        <h3 className="font-semibold m-3">Interview</h3>
         {
           jobList.filter((job)=> job.status === "Interview")
           .map((job) => <JobCard key={job.id} jobData = {job}></JobCard>)
        }
    </div>

    <div className="offer m-5">
        <h3 className="font-semibold m-3">Offer</h3>
        {
           jobList.filter((job)=> job.status === "Offer")
           .map((job) => <JobCard key={job.id} jobData = {job}></JobCard>)
        }
    </div>

    </div>
     
  )
}

export default DashBoard