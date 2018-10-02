import React from 'react';

const FilmRow = (props) => {
  return (
    <div className='film-row'>
      <a href={props.film.url}>{props.film.name}</a>
    </div>
  );
};

export default FilmRow;
