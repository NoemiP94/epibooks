import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MyFooter = () => {
  return (
    <Container fluid data-bs-theme="dark" className='sticky-bottom bg-dark'>
      <Row>
        <Col className='text-light p-3 d-flex justify-content-center'>Epibooks! 2023</Col>
      </Row>
    </Container>
  )
}

export default MyFooter
