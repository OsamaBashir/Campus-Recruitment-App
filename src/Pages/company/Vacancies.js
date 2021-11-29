import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import postJobDelete from "../../Actions/postJobDelete";

const Vacancies = () => {
  const state = useSelector((state) => state);
  const postJobs = state.postJob;

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(postJobDelete(index));
  };

  return (
    <div className="App">
      <Header />
      <h1>VACANCIES HERE</h1>
      <div className="flex-container">
        {postJobs?.data.map((data, index) => (
          <Cards
            title={data?.messsage?.title}
            description={data?.messsage?.description}
            gpa={`Minimum GPA Required : ${data?.messsage?.gpa}`}
            salary={`Tentative Salary : ${data?.messsage?.salary}`}
            button={`Delete`}
            footer={`Last date to apply : ${data?.messsage?.date}`}
            onClick={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
