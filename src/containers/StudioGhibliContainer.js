import React, {Component} from 'react';
import StudioGhibliList from './StudioGhibliList'
import DirectorSelector from '../components/DirectorSelector'

class StudioGhibliContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: null,
      directors: null,
      currentDirector: null
    }
    this.handleDirectorSelected = this.handleDirectorSelected.bind(this);
  }

  componentDidMount(){
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(films => this.setState({films: films, directors: this.uniqueDirectorList}))
  }

  directorFilmsList() {
    const fullList = this.state.films.map(film => film.director);
    return fullList;
  }

  uniqueDirectorList() {
    const uniqueDirectors = this.directorFilmsList().filter((film, index, array) => {
      return array.indexOf(film) === index;
    });
    this.setState({directors: uniqueDirectors})
    console.log(this.state.directors);
  }

  // uniqueDirectorList is not setting the state straight away due to asynchronicity
  // Will a callback solve this issue?


  handleDirectorSelected(index){
    console.log(this.uniqueDirectorList());
    // console.log(this.uniqueDirectorList());
    console.log(this.state.directors);
    const selectedDirector = null;
    // const selectedDirector = this.state.directors[index].props.children;
    this.setState({currentDirector: selectedDirector})
  }

  render(){
    return (
      <div className="film-container">
        <img src="images/logo.png" className="logo" alt="Studio Ghibli Logo"/>
        <DirectorSelector films={this.state.films} onDirectorSelected={this.handleDirectorSelected}/>
        <StudioGhibliList className="film-list" films={this.state.films}/>
      </div>
    );
  }
}

export default StudioGhibliContainer;
