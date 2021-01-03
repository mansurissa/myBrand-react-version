/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import { useEffect } from 'react';
import NavBlog from '../NavBlog';
import Subscribe from '../Subscribe';
import PostContent from './PostContent';
import Footer from '../../Footer';
import Comment from './Comment';
import ReadComments from './ReadComments';
import { connect } from 'react-redux';
import { fetchOnePostAction } from '../../../actions/blogActions';

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

        <Comment postId={post._id} />
        <h2 class='title-main comments-title'>Comments from vistors</h2>

        <ReadComments postId={post._id} />
      </section>
      <Footer />
    </>
  ) : (
    <h2>Loading...</h2>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadPost);
