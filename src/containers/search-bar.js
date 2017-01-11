import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }
  //takes the existing function, take th eupdated one (onInputChante), and
  //set it equal to current

  onInputChange(event){
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event){
    event.preventDefault();

    //go get some weather data
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Get a 5-day forecast in your favorite cities"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
