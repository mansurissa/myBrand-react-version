/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import FeedBack from '../../FeedBack';

const Comment = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [textMsg, setTextMsg] = useState('');
  const [feedback, setFeedback] = useState('none');

  const checkValidation = () => {
    if (comment.length < 2) {
      return 'Please..., Your comment must be atleast 2 Characters';
    } else {
      return true;
    }
  };

  const sendComment = async () => {
    if (checkValidation() === true) {
      await fetch(
        `https://issa-portfolio-brand.herokuapp.com/blogs/${postId}/comment`,
        {
          method: 'post',
          headers: { 'content-Type': 'application/json' },
          body: JSON.stringify({
            message: comment,
            name: 'Anonymous',
          }),
        },
      );
      location.reload();
    } else {
      setTextMsg(checkValidation());
      setFeedback('error');
    }
    setTimeout(() => {
      setFeedback('none');
    }, 3000);
  };

  return (
    <>
      <section class='comments-section'>
        <div class='commentsForm'>
          <textarea
            type='text'
            class='comment-input'
            placeholder='Your Comment here..'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <FeedBack type={feedback} text={textMsg} />

          <button
            class='submit'
            onClick={(e) => {
              e.preventDefault();
              sendComment();
            }}
          >
            Comment
          </button>
        </div>
      </section>
    </>
  );
};

export default Comment;
