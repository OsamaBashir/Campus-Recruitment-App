import { POST_JOB } from "./types";

const postJobs = (message) => {
  return {
    type: POST_JOB,
    payload: { messsage: message },
  };
  };
  
  export default postJobs;