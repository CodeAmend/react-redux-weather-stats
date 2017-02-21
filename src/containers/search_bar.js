import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <form className="input-group">
        <input
          className="form-control"
          placeholder="Enter city to add to your custom list"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
