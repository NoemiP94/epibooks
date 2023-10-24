import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <>
        <Alert className='bg-secondary m-3 border border-secondary text-center text-light'>
          <h1>Benvenuto/a! in Epibooks!</h1> 
          <p className='fs-3'>Il migliori libri sul web</p>
        </Alert>
    </>
  );
}

export default Welcome;