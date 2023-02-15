import React from "react";

function Container({ post }) {
  return (
    <div className="border-console mx-auto flex flex-wrap w-72 p-2 rounded-2xl">
      <div className="mx-auto w-1/4 p-1 font-bold">{post.userId}</div>
      <div className="w-3/4 text-sm p-1">
        <p>
          {post.id}
        </p>
        <p className="border-b-1 border-console-cub uppercase ">{post.title}</p>
        <p className="pt-3">{post.body}</p>
      </div>
      <button onClick={() => alert(post.userId)}>Button</button>
    </div>
  );
}

export default Container;
