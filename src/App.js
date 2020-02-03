// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';

import './Main.scss';

import { fetchTodosRequestedAction } from './actions';

type Props = {
  fetchTodos: any
};

class App extends Component<Props> {
  render() {
    return <Layout />;
  }
  componentDidMount() {
    this.props.fetchTodos();
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => {
    dispatch(fetchTodosRequestedAction());
  }
});
export default connect(null, mapDispatchToProps)(App);
