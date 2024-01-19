import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {data} from '../pages/Home'

function RestCard({restaurant}) {
  return (
    <Link to={`/restaurant_view/${restaurant.id}`} style={{textDecoration:'none'}}>
        
                 
        <Card style={{ width: '18rem',fontSize:'15px' }}>
           <Card.Img variant="top" src={restaurant.photograph} />
           <Card.Body>
               <Card.Title className='text-center text-warning'>{restaurant.name}</Card.Title>
               <hr/>
               <Row className='p-4'>
                   <Col className='ms-4'>
                       <Card.Text>
                           {restaurant.neighborhood}
                       </Card.Text>
                   </Col>
                   <Col className='ms-4'>
                       <Card.Text>
                           {restaurant.cuisine_type}
                       </Card.Text>
                   </Col>
               </Row>
           </Card.Body>
        </Card>
                
    </Link>
  )
}

export default RestCard