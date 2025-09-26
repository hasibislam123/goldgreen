import React, { useEffect, useState } from "react";

const PostCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/public/perfume.json") // public ফোল্ডার থেকে json আনছে
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className=" sm:pr-4 lg:px-40">
    <div className=" gap-3 sm:grid grid-cols-1 pl-3 lg:grid-cols-3  p-6">
      {posts.map(post => (
        <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{post.name}</h2>
    <p>{post.description}</p>
    <div className="flex justify-between">
      <h1>{post.price}$</h1>
      <button className="btn btn-soft btn-success">Buy now</button>
    </div>
    
  </div>
  <figure>
    <img
    className="w-full h-80 object-cover"
      src={post.image}
      alt="Shoes" />
  </figure>
</div>
      ))}
    </div>
    </div>
  );
};

export default PostCard;
