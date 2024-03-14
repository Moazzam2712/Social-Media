import React, { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { PostListContext } from "../store/ItemStore";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList=useLoaderData()


  return (
    <>
    {/* {<LoadingSpinner/>} */}
      {postList.length === 0 && <WelcomeMsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};



export const postLoader=()=>{
 return fetch("https://dummyjson.com/posts",)
      .then((res) => res.json())
      .then((data) => {
        return data.posts
      });
}

export default PostList;
