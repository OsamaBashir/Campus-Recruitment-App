import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards";
import Header from "../../components/Header";

const AppliedJobs = () => {
  const state = useSelector((state) => state);
  const applyJobs = state.applyJob;

  return (
    <div className="App">
      <Header />
      <h1>APPLIED JOBS HERE</h1>
      <div className="flex-container">
        {applyJobs?.jobs.map((data, index) => (
          <Cards
            title={data?.messsage?.message?.title}
            description={data?.messsage?.message?.description}
            gpa={`Minimum GPA Required : ${data?.messsage?.message?.gpa}`}
            salary={`Tentative Salary : ${data?.messsage?.message?.salary}`}
            footer={`Last date to apply : ${data?.messsage?.message?.date}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
