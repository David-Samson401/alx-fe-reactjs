
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    "posts", // cache key
    fetchPosts,
    {
      staleTime: 5000, // data considered fresh for 5s
      cacheTime: 1000 * 60 * 5, // cache kept for 5 mins
      refetchOnWindowFocus: false, // disable auto refetch when switching tabs
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul style={{ marginTop: "20px" }}>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
