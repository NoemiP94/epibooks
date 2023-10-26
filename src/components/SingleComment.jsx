import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class SingleComment extends Component {
  render() {
    return this.state.reviews.map((review) => {
      return (
        <ListGroup.Item key={review.elementId}>
          <p>{review.comment}</p>
          <p>{review.rate}</p>
        </ListGroup.Item>
      )
    })
  }
}

export default SingleComment
