/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import NavAdmin from './NavAdmin';
import firebase from '../firebase/firebase';
import { connect } from 'react-redux';
import moment from 'moment';
import { getQueriesAction } from '../../actions/queriesActions';

const mapStateToProps = (state) => {
  return {
    queries: state.queries.queries,
    loading: state.queries.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchQueries: () => dispatch(getQueriesAction()),
  };
};

const db = firebase.firestore();

const deleteQuery = (id) => {
  db.collection('Queries')
    .doc(id)
    .delete()
    .then(() => {
      location.reload();
    })
    .catch(console.log);
};

const Queries = ({ queries, loading, fetchQueries }) => {
  useEffect(() => fetchQueries(), []);

  return (
    <>
      <NavAdmin />
      <section classNameName='queries-container'>
        <h2 className='title-main queries-h2'>
          This is what you got from vistors
        </h2>
        <hr />

        {queries.length ? (
          queries.map((query) => (
            <div className='single-query'>
              <div className='disp-flex'>
                <h2 className='title commenter-name'>{query.name}</h2>
                <p className='time'>{moment(query.time).fromNow()}</p>
              </div>
              <p>{query.message}</p>
              <div className='disp-flex'>
                <p className='sender-email'>
                  <em>{query.email}</em>
                </p>
                <i
                  className='fa fa-trash-o delete-icon'
                  aria-hidden='true'
                  onClick={() => deleteQuery()}
                ></i>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Queries);
