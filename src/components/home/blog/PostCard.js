import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className='each-post'>
      <div className='post-img'>
        <img src={post.imageUrl} alt='blog' className='fill' />
      </div>
      <h3 className='post-title'>{post.title}</h3>

      <button className='button special-link shadow-btn'>
        <a href='./blog/readblog.html?id={post._id}'>Read More</a>
      </button>
    </div>
  );
};

export default PostCard;
