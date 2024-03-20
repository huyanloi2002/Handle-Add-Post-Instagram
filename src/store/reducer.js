import { ADD_POST, SET_POST } from "./constant";

const initState = {
  posts: [],
  post: {
    caption: "",
    photos: [],
    location: { name: "", loc: [] },
    number_likes: 0,
    isOpenLike: false,
    isComment: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_POST: {
      return {
        ...state,
        post: action.payload,
      };
    }
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }
    default:
      throw new Error("Invalid action");
  }
};

export { initState };

export default reducer;
