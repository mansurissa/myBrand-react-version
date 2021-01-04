import React from 'react';
import NavAdmin from './NavAdmin';

const NewPost = () => {
  return (
    <>
      <NavAdmin />
      <section className='create-post'>
        <form className='create'>
          <h3 className='post-title'>Title of Post</h3>
          <input
            type='text'
            name='title'
            placeholder='Please enter post title'
          />
          <h3 className='post-title'>Post image</h3>
          <input type='file' className='fileBtn' />
          <div className='imgPreview'>
            <img className='preview' alt='' src='' />
          </div>
          <div className='body'></div>

          <button className='submit' type='submit '>
            Create
          </button>
        </form>
      </section>
    </>
  );
};

export default NewPost;
