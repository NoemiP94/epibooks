import SingleBook from './SingleBook'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState } from 'react'

const BookList = (props) => {
  // state = {
  //   searchValue: '',
  //   selectedAsin: null,
  // }

  const [searchValue, setSearchValue] = useState('')
  const [selectedAsin, setSelectedAsin] = useState(null)

  const changeAsin = (newAsin) => {
    // this.setState({
    //   selectedAsin: newAsin,
    // })
    setSelectedAsin(newAsin)
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Cerca un libro..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
                // this.setState({ searchValue: e.target.value })
              }}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row>
            {props.manyBooks
              .filter((oneBook) =>
                oneBook.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((oneBook) => {
                return (
                  <Col md={3} key={oneBook.asin}>
                    <SingleBook
                      book={oneBook}
                      changeAsin={changeAsin}
                      selectedAsin={selectedAsin}
                    />
                  </Col>
                )
              })}
          </Row>
        </Col>
        <Col md={6}>
          <CommentArea bookId={selectedAsin} />
        </Col>
      </Row>
    </Container>
  )
}

export default BookList
