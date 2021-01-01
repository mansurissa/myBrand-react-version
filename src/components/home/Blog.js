import React from 'react';

const Blog = () => {
  return (
    <>
      <h1 class='title-main' id='blog'>
        BLOG
      </h1>
      <p class='last-posts'>Latest posts from my blog</p>
      <div class='blog-posts-container'></div>
      <button class='button special-link shadow-btn'>
        <a href='./blog/blogMain.html' target='#blank'>
          Visit Blog
        </a>
      </button>
    </>
  );
};

export default Blog;
