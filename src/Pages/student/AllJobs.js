import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import applyJobs from "../../Actions/applyJobs";
import Cards from "../../components/Cards";
import Header from "../../components/Header";

const AllJobs = () => {
  const state = useSelector((state) => state);
  const postJobs = state.postJob;

  const history = useHistory();
  const dispatch = useDispatch();
  const handleApply = (data, index) => {
    dispatch(applyJobs(data.messsage, index));

    history.push("./appliedjobs");
  };

  return (
    <div className="App">
      <Header />
      <h1>ALL JOBS HERE</h1>
      <div className="flex-container">
        {postJobs?.data.map((data, index) => (
          <Cards
            title={data?.messsage?.title}
            description={data?.messsage?.description}
            gpa={`Minimum GPA Required : ${data?.messsage?.gpa}`}
            salary={`Tentative Salary : ${data?.messsage?.salary}`}
            button={"Apply now"}
            footer={`Last date to apply : ${data?.messsage?.date}`}
            onClick={() => handleApply(data, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
