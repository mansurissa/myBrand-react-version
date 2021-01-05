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
  useEffect(fetchQueries(), []);
  const data = [];
  !loading &&
    queries.forEach((doc) => {
      data.push(doc.data());
    });
  console.log('OOOOOO', data);

  return (
    <>
      <NavAdmin />
      <section className='queries-container'>
        <h2 class='title-main queries-h2'>This is what you got from vistors</h2>
        <hr />
        {
          (data.map = (query) => (
            <div class='single-query'>
              <div class='disp-flex'>
                <h2 class='title commenter-name'>{query.name}</h2>
                <p class='time'>{moment(query.time).fromNow()}</p>
              </div>
              <p>{query.message}</p>
              <div class='disp-flex'>
                <p class='sender-email'>
                  <em>{query.email}</em>
                </p>
                <i
                  class='fa fa-trash-o delete-icon'
                  aria-hidden='true'
                  onclick="deleteQuery('${
            doc.id
          }')"
                ></i>
              </div>
            </div>
          ))
        }
      </section>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Queries);
