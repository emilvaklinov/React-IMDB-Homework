import React, {Component} from 'react';
import CommentList from '../components/CommentList';


class CommentBox extends Component {

  constructor(props){
      super(props);
      this.state = {
        films: [
          {name: "Sousage party", text: "Showtimes"},
          {name: "Cafe Society", text: "Showtimes"}

        ]
      }
    }

    render(){
      return <CommentList data={this.state.films} />
    }

}

export default CommentBox;
