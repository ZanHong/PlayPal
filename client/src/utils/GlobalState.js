import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_ACTIVITY,
  ADD_ACTIVITY,
  UPDATE_ACTIVITIES,
  LOADING,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE
} from "./actions";

const StoreContext = createContext([]);
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_ACTIVITY:
      return {
        ...state,
        currentActivity: action.activity,
        loading: false
      };

    case UPDATE_ACTIVITIES:
      return {
        ...state,
        activities: [...action.activities],
        loading: false
      };

    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [action.activity, ...state.activities],
        loading: false
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.activity, ...state.favourites],
        loading: false
      };

    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((activity) => {
          return activity._id !== action._id;
        })
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    activities: [],
    currentActivity: {
      _id: 0,
      title: "",
      author: "",
      category: "",
      description: "",
      preparation: ""
    },
    favourites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };