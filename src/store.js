import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const saveToLocalStorage = (state) => {
  try {
    const serilazedState = JSON.stringify(state);
    localStorage.setItem("state", serilazedState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serilazedState = localStorage.getItem("state");
    if (serilazedState === null) return undefined;
    return JSON.parse(serilazedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const presistedState = loadFromLocalStorage();
export const store = createStore(
  rootReducer,
  presistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
