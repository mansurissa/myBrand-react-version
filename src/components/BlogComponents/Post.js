/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const Post = (post) => {
  return (
    <div className='post-card'>
      <div className='left-blog-card'>
        <Link to={`/blog/read/?id=${post.post._id}`}>
          <h3 className='title-blog'>{post.post.title}</h3>
        </Link>

        <div className='para-blog'>{parse(post.post.body)}</div>

        <div className='bottom-icons'>
          <p className='time'>
            <em> {moment(post.post.time).fromNow()}</em>
          </p>
          <p className='each-icon'>
            <i className='fa fa-commenting-o' aria-hidden='true'></i>
            <span className='right-icon'>{post.post.commentsCount}</span>
          </p>
          <p className='each-icon'>
            <i className='fa fa-eye' aria-hidden='true'></i>
            <span className='right-icon'>{post.post.views}</span>
          </p>
          <p className='each-icon'>
            <i className='fa fa-heart' aria-hidden='true'></i>
            <span className='right-icon'>{post.post.likes}</span>
          </p>
        </div>
      </div>

      <div className='right-blog-card'>
        <a href='#'>
          <img
            src={post.post.imageUrl}
            alt='postImage'
            className='post-img blog-img'
          />
        </a>
      </div>
    </div>
  );
};

export default Post;
