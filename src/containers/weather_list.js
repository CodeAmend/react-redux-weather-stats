import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChartMaker from '../components/chart_maker';

class WeatherList extends Component {

  renderWeather(weatherObj) {
    console.log(weatherObj);
    const temps = weatherObj.list.map((weather) => weather.main.temp);
    const humiditys = weatherObj.list.map((weather) => weather.main.humidity);
    const pressures = weatherObj.list.map((weather) => weather.main.pressure);
    const name = weatherObj.city.name;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <ChartMaker data={temps} color="red" />
        </td>
        <td>
          <ChartMaker data={humiditys} color="orange" />
        </td>
        <td>
          <ChartMaker data={pressures} color="blue" />
        </td>
      </tr>
    );
  }

  render() {
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
          {this.props.weather.map(this.renderWeather.bind(this))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
