import { APPLY_JOBS } from "../Actions/types";

const initialState = {
  jobs: [],
};
const applyJob = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_JOBS:
      // const applyList = state.jobs.map((val, ind) => ind === action.index);
      return {
        ...state,
        jobs: [
          ...state.jobs,
          {
            messsage: action.payload,
          },
        ],
      };
    default:
      return state;
  }
};
export default applyJob;
