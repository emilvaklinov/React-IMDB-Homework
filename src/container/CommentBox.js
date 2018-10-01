import React, {Component} from 'react';
import CommentList from '../components/CommentList';


class CommentBox extends Component {

  constructor(props){
      super(props);
      this.state = {
        data: [
          {author: "Rick Henry", text: "This lesson is great!"},
          {author: "Val Gibson", text: "I love React."}

        ]
      }
    }

    render(){
      return <CommentList data={this.state.data} />
    }

}

export default CommentBox;
