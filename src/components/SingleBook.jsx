import { Card } from 'react-bootstrap'
import { Component } from 'react'
// import CommentArea from './CommentArea'

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
      <Card
        style={{
          border:
            this.props.book.asin === this.props.selectedAsin
              ? '3px solid red'
              : '',
        }}
        onClick={() => {
          this.setState({ selected: !this.state.selected })
          this.props.changeAsin(this.props.book.asin)
        }}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={this.toggleSelected}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          {/* {this.state.selected && <CommentArea bookId={this.props.book.asin} />} */}
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
