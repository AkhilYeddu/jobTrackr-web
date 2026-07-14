import jobs from "../utils/mockData"
import JobCard from "./JobCard";

const DashBoard = () => {
    const jobList = jobs;
    const appliedJobs= jobList.filter((job)=> job.status === "Applied")
    const screeningJobs = jobList.filter((job)=> job.status === "OA / Screening")
    const interviewJobs = jobList.filter((job)=> job.status === "Interview")
    const offerJobs = jobList.filter((job)=> job.status === "Offer")

    

  return (
    <div className="dashboard grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    <div className="applied m-5">
        <h3 className="font-semibold m-3">Applied - {appliedJobs.length}</h3>
        {
           appliedJobs.map((job) => <JobCard key={job.id} jobData = {job}></JobCard>)
        }
    </div>

    <div className="oa-screening m-5">
        <h3 className="font-semibold m-3">OA / Screening - {screeningJobs.length}</h3>
         {
           
           screeningJobs.map((job) => <JobCard key={job.id} jobData = {job}></JobCard>)  
        }
    </div>

    <div className="interview m-5">
        <h3 className="font-semibold m-3">Interview - {interviewJobs.length}</h3>
         {
           
           interviewJobs.map((job) => <JobCard key={job.id} jobData = {job}></JobCard>)
        }
    </div>

    <div className="offer m-5">
        <h3 className="font-semibold m-3">Offer - {offerJobs.length}</h3>
        {
           
           offerJobs.map((job) => <JobCard key={job.id} jobData = {job}></JobCard>)
        }
    </div>

    </div>
     
  )
}

export default DashBoard