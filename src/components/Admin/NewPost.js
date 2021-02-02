/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import NavAdmin from './NavAdmin';
import Feedback from '../FeedBack';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [feedback, setFeedback] = useState('none');
  const [textMsg, setTextMsg] = useState('');
  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleChange = (e) => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  const checkValidation = () => {
    if (title.length < 4) {
      return 'Title is too shot';
    } else if (body.length < 10) {
      return 'Make sure you provide a valid contents';
    } else {
      return true;
    }
  };
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('image', image.raw);
    await fetch('https://issa-portfolio-brand.herokuapp.com/blogs', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjNAZ21haWwuY29tIiwiaWQiOiI1Zjg1NjJhODQ3ODMwMDBhZWQzNzlmOWMifQ.YWKnswM8LQXPY11jfQ8Mcg4g__XJ7lv56rZ1CG-UGjA',
      },
      body: formData,
    });
    setTitle('');
    setBody('');
    setImage('');
    location.reload();
  };

  const createPost = () => {
    if (checkValidation() === true) {
      console.log(checkValidation());
      handleUpload();
    } else {
      setFeedback('error');
      setTextMsg(checkValidation());
    }
  };

  return (
    <>
      <NavAdmin />
      <section className='create-post'>
        <Feedback text={textMsg} type={feedback} />
        <form className='create'>
          <h3 className='post-title'>Title of Post</h3>
          <input
            type='text'
            name='title'
            placeholder='Please enter post title'
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />
          <h3 className='post-title'>Post image</h3>
          <input type='file' className='fileBtn' onChange={handleChange} />
          <div className='imgPreview'>
            <img className='preview' alt='' src={image.preview} />
          </div>
          <div className='body'></div>
          <CKEditor
            editor={ClassicEditor}
            data='<p>Post content here.. </p>'
            onChange={(event, editor) => {
              const data = editor.getData();
              setBody(data);
            }}
          />
          <button
            className='submit'
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              createPost();
            }}
          >
            Create
          </button>
        </form>
      </section>
    </>
  );
};

export default NewPost;
