import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CommentList from './CommentList'

class CommentArea extends Component {
  state = {
    reviews: [],
  }

  getComments = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWExM2Y2ZTNkZDAwMTQ5NWU0NDEiLCJpYXQiOjE2OTgzMjI5NjMsImV4cCI6MTY5OTUzMjU2M30.UxVl_zD5o_v0P0FCDeKYHfPpf2tuoFFsdv1ci0LGLVU',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei commenti')
        }
      })
      .then((data) => {
        console.log('fetch completata, dati recuperati', data)
        this.setState({
          reviews: data,
        })
      })
      .catch((error) => {
        console.log('Error!', error)
      })
  }
  componentDidMount() {
    this.getComments()
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h5>Cosa si dice di questo libro:</h5>
            <CommentList />
            {/* add comment */}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CommentArea
