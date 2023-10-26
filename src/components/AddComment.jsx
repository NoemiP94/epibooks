import { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    reviews: {
      comment: '',
      rate: '',
      elementId: '',
    },
  }

  handleInputChange = (property, value) => {
    this.setState({
      review: {
        ...this.state.reviews,
        [property]: value,
      },
    })
  }

  handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log('Invio commento')
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/:elementId',
        {
          method: 'POST',
          body: JSON.stringify(this.state.reviews),
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWExM2Y2ZTNkZDAwMTQ5NWU0NDEiLCJpYXQiOjE2OTgzMjI5NjMsImV4cCI6MTY5OTUzMjU2M30.UxVl_zD5o_v0P0FCDeKYHfPpf2tuoFFsdv1ci0LGLVU',
          },
        }
      )
      if (res.ok) {
        this.setState({
          reviews: {
            comment: '',
            rate: '',
            elementId: '',
          },
        })
      } else {
        throw new Error("C'è stato un errore nel salvataggio del commento")
      }
    } catch (error) {
      console.log('errore', error)
    }
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h5 className="text-center">Inserisci il tuo commmento</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Scrivi il tuo commento:</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={this.state.reviews.comment}
                  onChange={(e) => {
                    this.setState({
                      reviews: {
                        ...this.state.reviews,
                        comment: e.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>
              <Form.Select
                required
                value={this.state.reviews.rate}
                onChange={(e) => {
                  this.setState({
                    reviews: {
                      ...this.state.reviews,
                      rate: e.target.value,
                    },
                  })
                }}
              >
                <option>Come valuteresti questo libro?</option>
                <option>1</option>
                <option>1</option>
                <option>3</option>
                <option>4</option>
                <option>4</option>
              </Form.Select>

              <Button variant="primary" type="submit">
                Invia
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default AddComment
