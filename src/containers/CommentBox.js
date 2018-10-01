import React, {Component} from 'react';
import CommentList from '../components/CommentList';


class CommentBox extends Component {

  constructor(props){
      super(props);
      this.state = {
        data: [
          {name: "Sousage party", text: "Showtimes"},
          {name: "Cafe Society", text: "Showtimes"}

        ]
      }
    }

    render(){
      return <CommentList data={this.state.data} />
    }

}

export default CommentBox;
