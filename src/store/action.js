import { ADD_POST, SET_POST } from "./constant";

export const setPost = (payload) => {
  return {
    type: SET_POST,
    payload,
  };
};
export const addPost = (payload) => {
  console.log(payload);
  return {
    type: ADD_POST,
    payload,
  };
};
