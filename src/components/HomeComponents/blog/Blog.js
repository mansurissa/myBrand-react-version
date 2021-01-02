/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAction } from '../../../actions/blogActions';
import PostCard from './PostCard';

const mapStateToProps = (state) => {
  return {
    posts: state.fetchPosts.posts,
    isPending: state.fetchPosts.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPostsAction()),
  };
};

const Blog = ({ fetchPosts, posts, isPending }) => {
  useEffect(() => fetchPosts(), []);

  return (
    <>
      <h1 className='title-main' id='blog'>
        BLOG
      </h1>
      <p className='last-posts'>Latest posts from my blog</p>
      {isPending ? (
        <h2 className='addedCenter'>Loading posts..</h2>
      ) : (
        <div className='blog-posts-container'>
          {posts.data.posts.map((post) => {
            return <PostCard post={post} />;
          })}
        </div>
      )}
      <div className='addedCenter'>
        <button className='button special-link shadow-btn'>
          <a href='./blog/blogMain.html' target='#blank'>
            Visit Blog
          </a>
        </button>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
