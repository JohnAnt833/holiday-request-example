import React from 'react'
import './HomeInfo.css'
import HolidayInfoCard from './HolidayInfoCard'
import { Link } from "react-router-dom"


function HomeInfo() {
    const imageUrl = 'https://anthill.co.uk/wp-content/themes/TEST/images/footer-logo.png'
  return (
    <div className='home-info'>
    <div className='home-info__area'>    
    <HolidayInfoCard 
    image={imageUrl}
    title='Holidays to Take'
    info='20.5'
    />
    <HolidayInfoCard 
    image={imageUrl}
    title='Requests Pending'
    info='2'
    />
    <HolidayInfoCard 
    image={imageUrl}
    title='Requests Authorised'
    info='3'
    />
    
    <HolidayInfoCard 
    image={imageUrl}
    title='Book Time Off'
      info='Click Here'
    targetUrl="/book/"
      
    />

    </div>  
    </div>
  )
}

export default HomeInfo
