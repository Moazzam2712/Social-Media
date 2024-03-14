import React, {  useReducer, createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const uuid = uuidv4();

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts  ;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, []);



  const addPost = (post) => {
    dispatch({
      type: "ADD_POST",
      payload: post
    });
  };
  const addInitialPosts = (posts) => {
    dispatch({
      type: "ADD_INITIAL_POST",
      payload: {
        posts: posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

  


  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
