import { FETCH_USERS_SUCCESS } from "./types";

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: { users: users },
  };
};

export default fetchUsersSuccess;
