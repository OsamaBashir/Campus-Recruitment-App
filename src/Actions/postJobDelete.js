import { POST_JOB_DELETE } from "./types";

const postJobDelete= (index) => {
  
  return {
    type: POST_JOB_DELETE,
    // payload: { messsage: message },
    index: index
  };
  };
  
  export default postJobDelete;