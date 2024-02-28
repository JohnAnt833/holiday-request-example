import React from 'react'
import './Header.css'
import MenuIcon from "@mui/icons-material/Menu"
import NotificationsIcon from "@mui/icons-material/Notifications"
import Avatar  from "@mui/material/Avatar"

export default function Header() {
  
    return (
      <div className='header'>
      <div className='header__left'>
      <MenuIcon  style={{ color: "white" }}/>
      <img 
      className='header__logo'
      src='https://anthill.co.uk/wp-content/themes/TEST/images/footer-logo.png'
      alt=''>
      </img>
      </div>
      <div className='header__title'>
      <span className='header_text'>Anthill Holiday Request</span>
      </div>
      <div className='header__icons'>
      <NotificationsIcon   style={{ color: "white" }} className='header_icon' />
      <Avatar  alt="Remy Sharp" src='https://avatars.githubusercontent.com/u/4999022?v=4'/>
      </div> 
      </div>
    )
  
}
