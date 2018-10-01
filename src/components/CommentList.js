import React, {Component} from 'react';


class CommentList extends Component {
  render() {

    const commentNodes = this.props.films.map((comment, index)=> {
      return <Comment
        name={comment.name}
        key={index}>{comment.text}</Comment>

      })


      return(
        <div>{commentNodes}</div>
      )

    }
  }

  export default CommentList;
