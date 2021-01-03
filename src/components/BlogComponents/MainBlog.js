/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAction } from '../../actions/blogActions';
import Footer from '../Footer';
import NavBlog from './NavBlog';
import Post from './Post';
import Subscribe from './Subscribe';

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

const MainBlog = ({ isPending, posts, fetchPosts }) => {
  useEffect(() => fetchPosts(), []);

  return (
    <>
      <NavBlog />
      <Subscribe />

      <section class='posts-container'>
        {isPending ? (
          <h2 className='addedCenter'>Loading posts..</h2>
        ) : (
          <div>
            {posts.map((post) => {
              return <Post post={post} />;
            })}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBlog);
