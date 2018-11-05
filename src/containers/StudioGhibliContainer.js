import React, {Component} from 'react';
import StudioGhibliList from './StudioGhibliList'

class StudioGhibliContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: null
    }
  }

  componentDidMount(){
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(films => this.setState({films: films}))
  }

  render(){
    return (
      <div className="film-container">
        <StudioGhibliList className="film-list" films={this.state.films}/>
      </div>
    );
  }
}

export default StudioGhibliContainer;
