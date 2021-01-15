/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchOnePostAction } from '../../actions/blogActions';
import NavAdmin from './NavAdmin';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from 'react-router-dom';

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

const EditPost = ({ post, fetchOnePost, isPending }) => {
  const postId = useLocation().search.split('?')[1];

  useEffect(() => fetchOnePost(postId), []);

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [image, setImage] = useState({ preview: '', raw: '' });
  const [src, setSrc] = useState(post.imageUrl);

  const handleChange = (e) => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
    setSrc(image.preview);
  };

  return (
    <>
      <NavAdmin />
      {isPending ? (
        <h1>Loading</h1>
      ) : (
        <section className='create-post'>
          <form className='create'>
            <h3 className='post-title'>Edit title of Post</h3>

            <input
              type='text'
              value={title}
              name='title'
              placeholder='Please enter post title'
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <h3 className='post-title'>Edit Image</h3>
            <input type='file' className='fileBtn' onChange={handleChange} />
            <div className='imgPreview'>
              <img className='preview' alt='' src={src} />
            </div>
            <CKEditor
              editor={ClassicEditor}
              data={body}
              onChange={(event, editor) => {
                const data = editor.getData();
                setBody(data);
              }}
            />
            <button className='submit' type='submit '>
              Save
            </button>
            <button className='submit cancel' type='button '>
              Cancel
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
