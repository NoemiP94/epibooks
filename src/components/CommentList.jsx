import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'
import AddComment from './AddComment'

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        <SingleComment />
        <AddComment />
      </ListGroup>
    )
  }
}

export default CommentList
