import React from 'react';
import NavAdmin from './NavAdmin';

const EditPost = () => {
  return (
    <>
      <NavAdmin />
      <section className='create-post'>
        <form className='create'>
          <h3 className='post-title'>Edit title of Post</h3>

          <input
            type='text'
            name='title'
            placeholder='Please enter post title'
          />
          <h3 className='post-title'>Edit Image</h3>
          <input type='file' className='fileBtn' />
          <div className='imgPreview'>
            <img className='preview' alt='' src='' />
          </div>
          <textarea name='body' placeholder='Body of your Post'></textarea>
          <button className='submit' type='submit '>
            Save
          </button>
          <button className='submit cancel' type='button '>
            Cancel
          </button>
        </form>
      </section>
    </>
  );
};

export default EditPost;
