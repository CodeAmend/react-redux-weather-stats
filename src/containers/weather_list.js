import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {

  renderWeather(weatherObj) {
    const temps = weatherObj.list.map((weather) => weather.main.temp);
    const name = weatherObj.city.name;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={100} width={120} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
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
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
