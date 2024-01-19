import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import {fetchRestaurant} from '../redux/restaurantSlice'

function Home() {
  const allrestaurant=useSelector((state)=>state.restaurantSlice.allRestaurant)
  console.log(allrestaurant);

  const dispatch = useDispatch()

  useEffect(()=>{                 //useEffect expecting a function, dependency
    dispatch(fetchRestaurant())
  },[])
  return (
    <Row>
        {allrestaurant?.length>0?
        allrestaurant.map((restaurant)=>(
        <Col className='px-5 py-3' sm={6} md={4}>
            <RestCard restaurant={restaurant}/>
        </Col>
        ))
        :
        <p className='text-danger fw-bolder'>No Restaurants Available</p>}
    </Row>
  )
}

export default Home