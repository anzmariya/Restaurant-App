import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RestView() {
    const [show, setShow] = useState(false);
    const {id} = useParams()
    console.log(id);

    const restaurant = useSelector((state)=>state.restaurantSlice.allRestaurant)
    console.log(restaurant);
    const selectedrestaurant= restaurant.find(item=>item.id == id)
    console.log(selectedrestaurant);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Row className='mt-3 mb-5'>
            <Col md={1}></Col>
            <Col md={3} className='ms-3 mt-3'>
                <img src={selectedrestaurant.photograph} style={{height:'90%',width:'100%'}} alt="no img" />
            </Col>
            <Col md={7} className='px-5'>
                <hr />
                <h3 className='text-center'><span className='text-warning'>RESTAURANT</span> DETAILS</h3>
                <hr />
                <div>
                    <ListGroup>
                            <ListGroup.Item className='text-center p-4'>{selectedrestaurant.name}</ListGroup.Item>
                            <ListGroup.Item>{selectedrestaurant.neighborhood}</ListGroup.Item>
                            <ListGroup.Item>{selectedrestaurant.cuisine_type}</ListGroup.Item>
                            <ListGroup.Item>{selectedrestaurant.address}</ListGroup.Item>
                            <ListGroup.Item className='text-center p-3 mb-2'>
                                <div className='justify-content-center align-items-center'>
                                    <Button onClick={handleShow} className='btn btn-warning' style={{fontSize:'13px'}}>Opening Hours</Button>
                                
    
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                    >
                                        <Modal.Header closeButton>
                                        <Modal.Title>Opening Hours</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <ListGroup>
                                                <ListGroup.Item>Monday  {selectedrestaurant.operating_hours.Monday}</ListGroup.Item>
                                                <ListGroup.Item>Tuesday {selectedrestaurant.operating_hours.Monday}</ListGroup.Item>
                                                <ListGroup.Item>Wednesday   {selectedrestaurant.operating_hours.Monday}</ListGroup.Item>
                                                <ListGroup.Item>Thursday    {selectedrestaurant.operating_hours.Monday}</ListGroup.Item>
                                                <ListGroup.Item>Friday  {selectedrestaurant.operating_hours.Monday}</ListGroup.Item>
                                                <ListGroup.Item>Saturday    {selectedrestaurant.operating_hours.Monday}</ListGroup.Item>
                                                <ListGroup.Item>Sunday  {selectedrestaurant.operating_hours.Monday}</ListGroup.Item>
                                            </ListGroup>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="primary" onClick={handleClose}>Understood</Button>
                                        </Modal.Footer>
                                    </Modal>
    
                                    <RestReview />
                                </div>

                            </ListGroup.Item>
                    </ListGroup>
                    <hr />
                </div>
            </Col>
            
            <Col md={1}>
               
            </Col>
        </Row>
        
    </div>
  )
}

export default RestView