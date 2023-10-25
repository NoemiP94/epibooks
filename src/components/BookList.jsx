import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import SingleBook from './SingleBook'

const BookList = (books)=>{
    return (
        <Container>
            <Row>
                this.books.map((book, index){
                    <Col>
                    <SingleBook books='{}'/>
                    </Col>
                
                })
            </Row>
        </Container>
    )
}

export default BookList