import React from "react";
import Container from "./containers/container";

function ListPosts({ posts }) {
  const filteredPosts = posts.filter((item) => !item.fork);
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 sm:grid-cols-2">
        {
          filteredPosts.map((item, index) => (
            item.userId && <Container post={item} key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default ListPosts;