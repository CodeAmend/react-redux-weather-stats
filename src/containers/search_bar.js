import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };

    // this can be used instead of
    // this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    // to stop post request to server from form submit
    event.preventDefault();

    this.props.fetchWeather(this.state.term);

  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          className="form-control"
          placeholder="Enter city to add to your custom list"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
