import { Card } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }
  render() {
    return (
      // se viene selezionato il bordo diventa rosso
      <Card className={this.state.selected ? 'red-border' : ''}>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={this.toggleSelected}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <CommentArea />
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
