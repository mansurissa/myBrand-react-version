/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchOnePostAction } from '../../../actions/blogActions';
import NavBlog from '../NavBlog';
import Subscribe from '../Subscribe';
import PostContent from './PostContent';

const mapStateToProps = (state) => {
  return {
    post: state.fetchOnePost.post,
    isPending: state.fetchOnePost.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOnePost: (postId) => dispatch(fetchOnePostAction(postId)),
  };
};

const ReadPost = ({ fetchOnePost, post, isPending }) => {
  const postId = location.href.split('?id=')[1];
  useEffect(() => fetchOnePost(postId), []);

  const like = async () => {
    await fetch(`https://issa-portfolio-brand.herokuapp.com/blogs/${postId}`, {
      method: 'put',
      headers: { 'content-Type': 'application/json' },
    });
    location.reload();
  };

  return !isPending ? (
    <>
      <NavBlog />
      <section class='page-container'>
        <div class='post-read'>
          <PostContent post={post} />
        </div>
        <p
          class='like-btn'
          onClick={(e) => {
            e.preventDefault();
            like();
          }}
        >
          <i class='fa fa-thumbs-o-up' aria-hidden='true'></i>
          <span class='right-num'>{post.likes}</span>
        </p>
        <Subscribe />

        <h2 class='title-main comments-title'>Please leave a Comment</h2>

        <section class='comments-section'>
          <div class='commentsForm'>
            <textarea
              type='text'
              class='comment-input'
              placeholder='Your Comment here..'
            ></textarea>

            <button class='submit' onclick="addComment('${post._id}')">
              Comment
            </button>
          </div>
        </section>

        <h2 class='title-main comments-title'>Comments from vistors</h2>
        <section class='comments-container'></section>
      </section>
    </>
  ) : (
    <h2>Loading...</h2>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadPost);
