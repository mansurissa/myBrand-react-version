/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { fetchPostsAction } from '../../../actions/blogActions';

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

const deletePost = (id) => {
  console.log(id);
  const confirmation = confirm('Are you sure deleting this post?');
  confirmation &&
    (async () => {
      await fetch(`https://issa-portfolio-brand.herokuapp.com/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'content-Type': 'application/json' },
      });
      location.reload();
    })();
};

const BlogManagement = ({ fetchPosts, posts, isPending }) => {
  useEffect(() => fetchPosts(), []);

  return (
    <section className='right'>
      {isPending ? (
        <h1>Loading..</h1>
      ) : (
        <div className='blog-posts-container'>
          {posts.map((post) => {
            return (
              <div className='each-post'>
                <div>
                  <Link to={`/blog/read/?id=${post._id}`}>
                    <img
                      src={post.imageUrl}
                      alt='blog'
                      className='post-img img-dash'
                    />
                  </Link>
                </div>
                <div className='bottom-post'>
                  <Link to={`/blog/read/?id=${post._id}`}>
                    <h3 className='title-main dash-title'>{post.title}</h3>
                  </Link>

                  <div className='bottom-icons'>
                    <p className='time'>
                      <em> {moment(post.time).fromNow()}</em>
                    </p>
                    <p className='each-icon'>
                      <i className='fa fa-commenting-o' aria-hidden='true'></i>
                      <span className='right-icon'>{post.commentsCount}</span>
                    </p>
                    <p className='each-icon'>
                      <i className='fa fa-eye' aria-hidden='true'></i>
                      <span className='right-icon'>{post.views}</span>
                    </p>
                    <p className='each-icon'>
                      <i className='fa fa-heart' aria-hidden='true'></i>
                      <span className='right-icon'>{post.likes}</span>
                    </p>
                  </div>
                  <div className='post-options'>
                    <Link to={`/dashboard/editPost/?${post._id}`}>
                      <button className='edit button special-link shadow-btn'>
                        Edit
                      </button>
                    </Link>
                    <button
                      className='delete button special-link shadow-btn'
                      onClick={(e) => {
                        e.preventDefault();
                        deletePost(post._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogManagement);
