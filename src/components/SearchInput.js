import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './SearchInput.css';

export default class SearchInput extends Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired
  }

    constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      search_list: []  
    };
  }

  render () {
    return (
      <div>
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.searchInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)} /> 
        <button type="button" onClick={this.handleClick.bind(this)} value={this.state.name}>Search</button>
        <ul className={styles.searchList}>
          {this.state.search_list.map(d => <li className={styles.searchListItem}> <div className={styles.searchInfos}> <div><span>{d.name}</span></div> </div> </li>)}
        </ul>
      </div>
    );
  }



  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      return fetch('http://nominatim.openstreetmap.org/search/'+ name +'?format=json').then(response => {
        return response.json();
      }).then(data =>{
        if( data.length > 0){
          var name_array = []
          for (var i = 0; i < data.length; i++) {
            name_array.push({"name": data[i]["display_name"]})
          }
          this.setState({ search_list : name_array });
        }else{
          name_array.push({"name": "No data found"})
          this.setState({ search_list : name_array });
        }
      }).catch(error => {
        return error;
      });
    }
  }

  handleClick (e) {
    // this.setState(this.props.name);
    // this.props.name = "";
    const name = e.target.value.trim();
    return fetch('http://nominatim.openstreetmap.org/search/'+ name +'?format=json').then(response => {
      return response.json();
    }).then(data =>{
      var name_array = []
      if( data.length > 0){
        for (var i = 0; i < data.length; i++) {
          name_array.push({"name": data[i]["display_name"]})
        }
        this.setState({ search_list : name_array });
      }else{
         name_array.push({"name": "No data found"})
         this.setState({ search_list : name_array });
      }
    }).catch(error => {
      return error;
    });
  }
}
