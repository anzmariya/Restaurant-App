import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

function RestReview() {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Button onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open} className='btn btn-warning ms-3' style={{fontSize:'13px'}}>Click here to see reviews</Button>
        <Collapse in={open}>
            <div className='my-2'>
                <hr />
                <div className='mt-5'>
                    <h6>name and date</h6>
                    <p>Rating</p>
                    <p>Description</p>
                </div>
            </div>
        </Collapse>
    </>
  )
}

export default RestReview