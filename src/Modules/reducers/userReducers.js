import { LOGIN } from "../constants/constants";

export const userLoginReducer = (state = {}, action) => {
  console.log(action.payload)
  switch (action.type) {
    case LOGIN:
      return { loading: false, userInfo: action.payload };

    default:
      return state;
  }
};
