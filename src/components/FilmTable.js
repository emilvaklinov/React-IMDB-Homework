import React from 'react';
import FilmRow from './FilmRow';

const FilmTable = (props) => {
  const filmNodes = props.films.map((film, index) => {
    return (
      <li key={index}>
        <FilmRow film={film} key={index}/>
      </li>
    );
  });

  return(
    <div className='film-table'>
      <ul>
        {filmNodes}
      </ul>
    </div>
  );
};

export default FilmTable;
