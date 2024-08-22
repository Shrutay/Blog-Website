import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  const post = {
    title: `Blog Post ${id}`,
    content: `This is the content of the blog post with ID ${id}.`
  };

  return (
    <div className="container mt-5">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
