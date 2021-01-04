/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import NavAdmin from './NavAdmin';
import firebase from '../firebase/firebase';
import { getQueriesAction } from '../../actions/queriesActions';
import { connect } from 'react-redux';
import moment from 'moment';

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

const Queries = ({ queries, loading }) => {
  return (
    <>
      <NavAdmin />
      <section className='queries-container'>
        {queries.map((doc) => (
          <div class='single-query'>
            <div class='disp-flex'>
              <h2 class='title commenter-name'>{doc.data().name}</h2>
              <p class='time'>{moment(doc.data().time).fromNow()}</p>
            </div>
            <p>{doc.data().message}</p>
            <div class='disp-flex'>
              <p class='sender-email'>
                <em>{doc.data().email}</em>
              </p>
              <i
                class='fa fa-trash-o delete-icon'
                aria-hidden='true'
                onClick={() => deleteQuery(doc.id)}
              ></i>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Queries);
