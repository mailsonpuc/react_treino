import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return (
    <div>
        <div class="card" style={{marginTop:50}}>
        <div class="card-header">
        <address>
Written by John Doe.
Visit us at:
Example.com
Box 564, Disneyland
USA
</address>
<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
        <p> &copy; 2023</p>
       </div>
       <div className="card-body">

       <h5 className="card-title">Todos os direitos resevados</h5>
       

        <Container>


         <Row className="justify-content-md-center">
        <Col xs lg="2">
          <i className="material-icons Large">email</i>
        </Col>
        <Col xs lg="2">
        <i class="material-icons Large">store_mall_directory</i>
        </Col>
        <Col xs lg="2">
        <i class="material-icons Large">verified_user</i>
        </Col>
        </Row>
        </Container>

       <a href="#" style={{float:'right'}}><i className='material-icons' >vertical_align_top</i></a>
       </div>
       </div>
       </div>
  )
}

export default Footer