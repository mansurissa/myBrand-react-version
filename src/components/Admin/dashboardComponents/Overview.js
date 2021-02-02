import React from 'react';

const Overview = () => {
  return (
    <div className='over-view'>
      <div className='card-over-view posts'>
        <i className='fa fa-list' aria-hidden='true'></i>
        <div className='left-overview'>
          <p className='overview-item posts'>Posts</p>
          <p className='right-nbr' id='posts'></p>
        </div>
      </div>
      <div className='card-over-view likes'>
        <i className='fa fa-thumbs-up' aria-hidden='true'></i>
        <div className='left-overview'>
          <p className='overview-item likes'>Likes</p>
          <p className='right-nbr' id='likes'></p>
        </div>
      </div>
      <div className='card-over-view views'>
        <i className='fa fa-eye' aria-hidden='true'></i>
        <div className='left-overview'>
          <p className='overview-item views'>Views</p>
          <p className='right-nbr' id='views'></p>
        </div>
      </div>

      <div className='card-over-view queries'>
        <i className='fa fa-feed' aria-hidden='true'></i>
        <div className='left-overview'>
          <p className='overview-item queries'>Queries</p>
          <p className='right-nbr' id='queries'></p>
        </div>
      </div>
      <div className='card-over-view comment'>
        <i className='fa fa-comment-o' aria-hidden='true'></i>
        <div className='left-overview'>
          <p className='overview-item comments'>Comments</p>
          <p className='right-nbr' id='comments'></p>
        </div>
      </div>
      <div className='card-over-view subs'>
        <i className='fa fa-envelope' aria-hidden='true'></i>
        <div className='left-overview'>
          <p className='overview-item subs'>Subscribers</p>
          <p className='right-nbr' id='subscribers'></p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
