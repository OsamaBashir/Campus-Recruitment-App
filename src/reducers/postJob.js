import { POST_JOB, POST_JOB_DELETE } from "../Actions/types";
const initialState = {
  data: [],
};
const postJob = (state = initialState, action) => {
  switch (action.type) {
    case POST_JOB:
      return {
        ...state,
        data: [
          ...state.data,
          {
            messsage: action.payload.messsage,
          },
        ],
      };
    case POST_JOB_DELETE:
      const newList = state.data.filter((val, ind) => ind !== action.index);
      return {
        ...state,
        data: newList,
      };
    default:
      return state;
  }
};
export default postJob;
