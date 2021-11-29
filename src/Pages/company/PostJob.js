import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import postJobs from "../../Actions/postJobs";
import { useHistory } from "react-router";


const PostJob = ({open, toggleModal}) => {
  const [title, setTitle] = useState("");
  const [gpa, setGpa] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [description,setDescription] = useState("");
  const history = useHistory();



  const dispatch = useDispatch();



  const handlePostJob = (e) => {
      const data = { title, gpa, salary,date,description };

      dispatch(postJobs(data));
      history.push("/vacancy");
      toggleModal("");
    
  };


  return (
    <Modal
    show={open} onHide={toggleModal}
    >
      <Modal.Header >
        <Modal.Title>Add Vacancy</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Input
          label="Job Title"
          type={title}
          placeholder="Job Title Here"
          required={true}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Job Description</label>
        <textarea class="form-control" rows="4" id="Input"  value={description}
          onChange={(e) => setDescription(e.target.value)}/>
        <Input
          label="Minimum GPA Required"
          type="number"
          required={true}
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
        />
        <Input
          label="Minimum Salary Required"
          type="number"
          required={true}
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <Input
          label="Last Date to Apply"
          type="date"
          required={true}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handlePostJob}>Post</Button>
        <Button variant="secondary" onClick={toggleModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostJob;
