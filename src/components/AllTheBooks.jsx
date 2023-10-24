import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Component } from 'react';
import books from '../data/fantasy.json'


class AllTheBooks extends Component {
    render(){
  return (   
    <Container>
        <Row direction='horizontal' gap={4} className=''>
           {books.map((book)=>{ 
            return (
            <Col md={3} className='my-2' key={book.asin}>    
                   <Card className='h-100'>
                    <Card.Img src={book.img} alt={book.title}/>
                    <Card.Body>
                     <Card.Title>{book.title}</Card.Title>
                        <Card.Text>{book.price}</Card.Text>
                    </Card.Body>
                   </Card>  
                </Col>
            )
        })}
        </Row>
    </Container>
  );
}
}

export default AllTheBooks;