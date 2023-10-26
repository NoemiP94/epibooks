import { ListGroup } from 'react-bootstrap'

const SingleComment = (props) => {
  return (
    <ListGroup.Item>
      {props.singleReview.rate} | {props.singleReview.comment}{' '}
    </ListGroup.Item>
  )
}

export default SingleComment
