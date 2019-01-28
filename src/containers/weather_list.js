import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import MyGoogleMap from '../components/google_map';

class WeatherList extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  renderWeather(cityData){
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather=>weather.main.temp);
    const humidity = cityData.list.map(weather=>weather.main.humidity);
    const pressure = cityData.list.map(weather=>weather.main.pressure);
    const { lat, lon} = cityData.city.coord

    return(
      <tr key={cityName}>
        <td>
          <MyGoogleMap isMarkerShown = {true} lat={lat} lon={lon}/>
        </td>
        <td><Chart data={humidity} colour='blue' units='%'/></td>
        <td><Chart data={pressure} colour='green' units='hPa'/></td>
        <td><Chart data={temps} colour='black' units='K'/></td>
      </tr>
    );
  }
  render(){
    return(
      <table className = "table table-borderless table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>humidity (%)</th>
            <th>pressure (hPa)</th>
            <th>temperature (K)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return {
    weather
  }
}
export default connect(mapStateToProps)(WeatherList);
