
import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Blog Post" },
  { id: 2, title: "Second Blog Post" },
];

export default function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
