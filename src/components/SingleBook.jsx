import { Card } from 'react-bootstrap'
import { useState } from 'react'
// import CommentArea from './CommentArea'

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // }

  const [selected, setSelected] = useState(false)

  const toggleSelected = () => {
    // this.setState({
    //   selected: !this.state.selected,
    // })

    setSelected(!selected)
  }

  return (
    // se viene selezionato il bordo diventa rosso
    <Card
      style={{
        border: props.book.asin === props.selectedAsin ? '3px solid red' : '',
      }}
      onClick={() => {
        setSelected(!selected)
        // this.setState({ selected: !this.state.selected })
        props.changeAsin(props.book.asin)
      }}
    >
      <Card.Img variant="top" src={props.book.img} onClick={toggleSelected} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        {/* {this.state.selected && <CommentArea bookId={this.props.book.asin} />} */}
      </Card.Body>
    </Card>
  )
}

export default SingleBook
