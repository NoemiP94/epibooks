import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddComment = () => {
  // state = {
  //   reviews: {
  //     comment: '',
  //     rate: '1',
  //     elementId: this.props.bookId,
  //   },
  // }

  const [reviews, setReviews] = useState({
    comment: '',
    rate: '1',
    elementId: this.props.bookId,
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log('Invio commento')
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          body: JSON.stringify(reviews),
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWExM2Y2ZTNkZDAwMTQ5NWU0NDEiLCJpYXQiOjE2OTgzMjI5NjMsImV4cCI6MTY5OTUzMjU2M30.UxVl_zD5o_v0P0FCDeKYHfPpf2tuoFFsdv1ci0LGLVU',
          },
        }
      )
      if (res.ok) {
        alert('commento salvato!')
      } else {
        throw new Error("C'è stato un errore nel salvataggio del commento")
      }
    } catch (error) {
      console.log('errore', error)
    }
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <h5 className="text-center">Inserisci il tuo commmento</h5>
      <Form.Group className="mb-3">
        <Form.Label>Scrivi il tuo commento:</Form.Label>
        <Form.Control
          type="text"
          required
          value={reviews.comment}
          onChange={(e) => {
            // this.setState({
            //   reviews: {
            //     ...reviews,
            //     comment: e.target.value,
            //   },
            // })
            setReviews({
              ...reviews,
              comment: e.target.value,
            })
          }}
        />
      </Form.Group>
      <Form.Label>Come valuti questo libro?</Form.Label>
      <Form.Select
        aria-label="comment rating"
        value={reviews.rate}
        onChange={(e) => {
          // this.setState({
          //   reviews: {
          //     ...reviews,
          //     rate: e.target.value,
          //   },
          // })
          setReviews({
            ...reviews,
            rate: e.target.value,
          })
        }}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Select>

      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  )
}
export default AddComment
