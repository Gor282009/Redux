import { createStore } from "redux";

const store = createStore(
  function (state, action) {
    if (action.type === "INCREMENT") {
      return {
        count: state.count + 1
      }
    }
    if (action.type === "DECREMENT") {
      return {
        count: state.count - 1
      }
    }
    if(action.type === "DELETE") {
      return {
        count: 0
      }
    }
    return state;
  },
  {
    count: 0,
  }
);

export default store;
