import React from 'react';
import Header from '../components/Header';
import FilmTable from '../components/FilmTable';
import Link from '../components/Link';
import Button from '../components/Button';

class OpeningsBox extends React.Component {
  handleClick(){
    console.log("handling click");
  }

  render(){
    return(
      <div className='openings-box'>
        <Header title="UK Opening This Week"/>
        <FilmTable films={this.props.films}/>
        <Link />
        <Button handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default OpeningsBox;
