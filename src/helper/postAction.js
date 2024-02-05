export const ActionTypes = {
  SET_POSTS: "SET_POSTS",
};

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};
