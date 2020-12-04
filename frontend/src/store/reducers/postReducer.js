const initialState = {
  posts: null,
  myposts: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POST_LIST": {
      return { ...state, posts: action.posts };
    }
    case "SET_MY_POST_LIST": {
      return { ...state, myposts: action.posts };
    }
    case "ADD_POST": {
      const newPost = action.post;

      let newState = { ...state };
      let newPosts = [...state.posts];
      newPosts.unshift(newPost);
      newState.posts = newPosts;

      return newState;
    }
    case "TOGGLE_LIKE": {
      const newPost = action.toggledPost;
      const newPosts = state.posts.map((post) => {
        if (post.id === newPost.id) {
          return newPost;
        }
        return post;
      });

      return { ...state, posts: newPosts };
    }
    case "LOGOUT": {
      let state = { ...initialState };
      return state;
    }
    default:
      return state;
  }
};
