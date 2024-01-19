import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch=useDispatch()
  return (
    <>
        <Navbar variant='dark'>
            <Container>
              <Navbar.Brand href="#home" className='d-flex'>
                
                  <img
                    alt="no image"
                    src="https://cdn4.iconfinder.com/data/icons/map-pins-2/256/21-512.png"
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                  />{' '}
                  <h5 className='mt-3 ms-4'><span className='text-warning'>Chinese</span> Town</h5>
              </Navbar.Brand>  

                  <input onChange={(e)=> dispatch(search(e.target.value))} className='form-control w-25' type='text' placeholder='Enter a location'></input>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  
                
              
            </Container>
          </Navbar>
    </>
  )
}

export default Header