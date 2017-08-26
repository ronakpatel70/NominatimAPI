import React, { Component, PropTypes } from 'react';
import styles from './NominatimApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as NominatimsActions from '../actions/NominatimsActions';
import { SearchList, SearchInput } from '../components';

@connect(state => ({
  // friendlist: state.friendlist
}))
export default class NominatimApp extends Component {

  static propTypes = {
    // friendsById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { dispatch } = this.props;
    const actions = bindActionCreators(NominatimsActions, dispatch);

    return (
      <div className={styles.searchListApp}>
        <h1>Search Address</h1>
        <SearchInput />
      </div>
    );
  }
}
