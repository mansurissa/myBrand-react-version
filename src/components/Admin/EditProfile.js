import React from 'react';
import NavAdmin from './NavAdmin';

const EditProfile = () => {
  return (
    <>
      <NavAdmin />
      <section class='create-post'>
        <form class='create-blog-post'>
          <input type='text' name='title' placeholder='Your Name' />
          <h3 class='post-title'>Profile Picture</h3>
          <input type='file' class='fileBtn' />
          <div class='imgPreview'></div>
          <button class='submit create-btn' type='submit '>
            Update
          </button>
        </form>
      </section>
    </>
  );
};

export default EditProfile;
