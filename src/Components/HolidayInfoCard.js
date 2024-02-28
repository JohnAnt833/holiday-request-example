import React from 'react'
import './HomeInfoCard.css'
import { useNavigate } from 'react-router-dom'

const withNavigate = Component => props => {
  const navigate = useNavigate();
  return <Component {...props} navigate={navigate} />
}

function HolidayInfoCard({ image, title, info, targetUrl, navigate}) {

  const navigateToUrl = targetUrl ? () => navigate(targetUrl) : null;
  return (
    <div className='home-info-card' onClick={navigateToUrl}>
      <div className='home-info-card__details'>
      <img className='home-info-card__thumbnail' src={image} alt='' />
      <div className='home-info-card__text'>
      <h2>{title}</h2>
      <p> • </p>
      <p>{info}</p>
      </div>
      </div>
    </div>
  )
}

export default withNavigate(HolidayInfoCard)
