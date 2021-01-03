/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import moment from 'moment';
import { fetchCommentsAction } from '../../../actions/blogActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    comments: state.fetchComments.comments,
    loadingComments: state.fetchComments.loadingComments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (postId) => dispatch(fetchCommentsAction(postId)),
  };
};

const ReadComments = ({ postId, comments, fetchComments, loadingComments }) => {
  useEffect(() => fetchComments(postId), []);

  if (loadingComments) {
    return <h1>Loading Comments...</h1>;
  } else if (comments.data.length < 1) {
    return <h3 className='addedCenter'>No comments yet</h3>;
  } else {
    return (
      <section class='comments-container'>
        {comments.data.map((comment) => (
          <div class='each-comment'>
            <div class='comment-details'>
              <p class='author'>
                --<em>{comment.name}</em>--
              </p>
              <p class='comment-time'> {moment(comment.time).fromNow()}</p>
              {console.log('FUCK THIS', comment)}
            </div>
            <p class='commentPara'>{comment.message}</p>
          </div>
        ))}
      </section>
    );
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ReadComments);
