import React from 'react';
import Film from '../components/Film';

const StudioGhibliList = (props) => {
  if (props.films === null) {
    return "Loading";
  } else {
    return (
      <div className="film-list">
        {props.film.map((film, index) => {
          return <Film film={film} key={index} />
        })}
      </div>
    );
  }
}

export default StudioGhibliList;
