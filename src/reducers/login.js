import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from "../Actions/types"

const initialState ={
    loading: false,
    users:[],
    error:""
}
const login = (state = initialState,action) => {
   switch(action.type){

    case FETCH_USERS_REQUEST:
    return{
     ...state,
     loading:true
    }   

    case FETCH_USERS_SUCCESS:
        return{
         ...state,
         loading:false,
         users:action.payload.users
        }   

    case FETCH_USERS_FAILURE:
            return{
             ...state,
             loading:false,
             users:[],
             error:action.payload.error
            }   
            default:
            return state;

   }
}
export default login;