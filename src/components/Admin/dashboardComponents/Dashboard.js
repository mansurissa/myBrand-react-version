/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NavAdmin from '../NavAdmin';
import BlogManagement from './BlogManagement';
import Sidebar from './Sidebar';
import { getQueriesAction } from '../../../actions/queriesActions';
import {
  fetchPostsAction,
  fetchSubscribersAction,
} from '../../../actions/blogActions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQueries: () => dispatch(getQueriesAction()),
    fetchPosts: () => dispatch(fetchPostsAction()),
    fetchSubs: () => dispatch(fetchSubscribersAction()),
  };
};

const Dashboard = ({ fetchQueries, fetchPosts, fetchSubs }) => {
  useEffect(() => {
    fetchQueries();
    fetchPosts();
    fetchSubs();
  }, []);

  return (
    <>
      <NavAdmin />
      <Sidebar />
      <BlogManagement />
    </>
  );
};

export default connect('', mapDispatchToProps)(Dashboard);
