import React from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

const PostContent = (post) => {
  return (
    <div>
      <h2 class='title onRead-title'>{post.post.title}</h2>
      <p class='time'>
        <em>{moment(post.post.time).fromNow()}</em>
      </p>
      <img src={post.post.imageUrl} alt='' class='post-img' />

      <div class='onRead-post'>{parse(post.post.body)}</div>
    </div>
  );
};

export default PostContent;
