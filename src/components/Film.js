import React from 'react';

const Film = (props) => {
  return (
    <div className="film">
      <div className="card">
        <h2>{props.film.title}</h2>
        <p>{props.film.description}</p>
        <ul>
          <li>Release Date: {props.film.release_date}</li>
          <li>Rating: {props.film.rt_score}%</li>
        </ul>
      </div>
    </div>
  );
}

export default Film;
