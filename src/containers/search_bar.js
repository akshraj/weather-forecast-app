import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term:''
    }

    this.inputChange = this.inputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  inputChange(event){
    this.setState({term:event.target.value});
  }

  submitForm(event){
    event.preventDefault();
    if(this.state.term === ''){
      alert('please enter city name first')
    }else{
      this.props.fetchWeather(this.state.term);
      this.setState({term:''});
    }

  }

  render(){
    return(
      <form onSubmit={this.submitForm} className="input-group">
        <input
        placeholder="Get a five-day forecast of your faviourate city"
        className="form-control"
        value={this.state.term}
        onChange={this.inputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators ({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
