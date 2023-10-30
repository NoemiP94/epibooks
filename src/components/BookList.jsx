import SingleBook from './SingleBook'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Component } from 'react'
import { Form } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    searchValue: '',
    selectedAsin: null,
  }

  changeAsin = (newAsin) => {
    this.setState({
      selectedAsin: newAsin,
    })
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Cerca un libro..."
                value={this.state.searchValue}
                onChange={(e) => {
                  this.setState({ searchValue: e.target.value })
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              {this.props.manyBooks
                .filter((oneBook) =>
                  oneBook.title
                    .toLowerCase()
                    .includes(this.state.searchValue.toLowerCase())
                )
                .map((oneBook) => {
                  return (
                    <Col md={3} key={oneBook.asin}>
                      <SingleBook
                        book={oneBook}
                        changeAsin={this.changeAsin}
                        selectedAsin={this.state.selectedAsin}
                      />
                    </Col>
                  )
                })}
            </Row>
          </Col>
          <Col md={6}>
            <CommentArea bookId={this.state.selectedAsin} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookList
