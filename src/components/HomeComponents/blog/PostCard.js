import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className='each-post'>
      <div className='post-img'>
        <img src={post.imageUrl} alt='blog' className='fill' />
      </div>
      <h3 className='post-title'>{post.title}</h3>

      <Link to={`/blog/read/?id=${post._id}`}>
        <button className='button special-link shadow-btn'>
          <a href='./blog/readblog.html?id={post._id}'>Read More</a>
        </button>
      </Link>
    </div>
  );
};

export default PostCard;
