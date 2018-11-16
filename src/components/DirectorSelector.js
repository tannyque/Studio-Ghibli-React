import React from 'react';

const DirectorSelector = (props) => {
  if (!props.films) return null;

  const directors = props.films.map(film => film.director)

  const uniqueDirectors = directors.filter((director, index) => {
    return directors.indexOf(director) === index;
  })

  const options = uniqueDirectors.map((director, index) => {
    return (
      <option value={index} key={index}>{director}</option>
    );
  })
  // console.log(options[0].props.children);

  function handleChange(event) {
    console.log("event target value", event.target.value);
    props.onDirectorSelected(event.target.value);
  }

  return (
    <div id="director-dropdown">
      <select className="director-selector" id="director-selector" onChange={handleChange}>
        <option disabled selected>Choose a Director</option>
        {options}
      </select>
    </div>
  );
}

export default DirectorSelector;
