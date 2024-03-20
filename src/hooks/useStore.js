import { useReducer } from "react";
import reducer, { initState } from "../store/reducer";

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return [state, dispatch];
};
