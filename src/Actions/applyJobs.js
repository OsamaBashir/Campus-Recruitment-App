import { APPLY_JOBS } from "./types";

const applyJobs = (message, index) => {
  console.log("message", message);
  console.log("index", index);
  return {
    type: APPLY_JOBS,
    payload: { message },
    index: index,
  };
};

export default applyJobs;
