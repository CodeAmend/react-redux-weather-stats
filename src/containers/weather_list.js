import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

  renderCityList(weatherObj) {
    return (
      <tr key={cityData.city.id}>
        <td>{weatherObj.city.name}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    )
  }

  render() {

    if(this.props.weather.length < 1) {
      return (<div>Nope!</div>);
    }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCityList)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
