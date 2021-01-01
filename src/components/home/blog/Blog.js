/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/blogActions';
import PostCard from './PostCard';

const mapStateToProps = (state) => {
  return {
    posts: state.fetchPosts.posts,
    isPending: state.fetchPosts.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: () => dispatch(fetchPosts()),
  };
};

const Blog = ({ onFetchPosts, posts, isPending }) => {
  useEffect(() => onFetchPosts(), []);

  const data = posts.data.posts;
  console.log(data);
  return (
    <>
      <h1 className='title-main' id='blog'>
        BLOG
      </h1>
      <p className='last-posts'>Latest posts from my blog</p>
      {isPending ? (
        <h2>Loading posts..</h2>
      ) : (
        <div className='blog-posts-container'>
          {data.map((post) => {
            return <PostCard post={post} />;
          })}
        </div>
      )}
      <button className='button special-link shadow-btn'>
        <a href='./blog/blogMain.html' target='#blank'>
          Visit Blog
        </a>
      </button>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
