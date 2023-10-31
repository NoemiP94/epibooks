import { Container, Row, Col } from 'react-bootstrap'
import CommentList from './CommentList'
import AddComment from './AddComment'
import { useState, useEffect } from 'react'

const CommentArea = (props) => {
  const [comments, setComments] = useState([])

  const getComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + props.bookId,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWExM2Y2ZTNkZDAwMTQ5NWU0NDEiLCJpYXQiOjE2OTgzMjI5NjMsImV4cCI6MTY5OTUzMjU2M30.UxVl_zD5o_v0P0FCDeKYHfPpf2tuoFFsdv1ci0LGLVU',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei commenti')
        }
      })
      .then((data) => {
        console.log('fetch completata, dati recuperati', data)
        setComments(data)
      })
      .catch((error) => {
        console.log('Error!', error)
      })
  }

  useEffect(() => {
    if (props.bookId) {
      getComments()
    }
  }, [props.bookId])

  return (
    <Container>
      <Row>
        <Col>
          <h5>Cosa si dice di questo libro:</h5>
          <CommentList reviews={comments} />
          <AddComment bookId={props.bookId} />
        </Col>
      </Row>
    </Container>
  )
}

export default CommentArea
