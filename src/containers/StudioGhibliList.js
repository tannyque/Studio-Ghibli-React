import React from 'react';
import Film from '../components/Film';

const StudioGhibliList = (props) => {
  if (!props.films) return null;
    return (
      <div className="film-list">
        {props.films.map((film, index) => {
          return <Film film={film} key={index} />
        })}
      </div>
    );
}

export default StudioGhibliList;
