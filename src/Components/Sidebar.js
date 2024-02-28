import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import HistoryIcon from '@mui/icons-material/History'
import SidebarRow from './SidebarRow'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './Sidebar.css'
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className='sidebar'>
    <Link to='/' style={{ textDecoration: 'none', color:'black' }}> 
    <SidebarRow selected Icon={HomeIcon} title='Home' />
    </Link>
    
      <SidebarRow  Icon={HistoryIcon} title='History' />
      <Link to='/book/' style={{ textDecoration: 'none', color:'black' }}>
      <SidebarRow  Icon={CalendarMonthIcon} title='Holidays' />
      </Link>
 
    </div>
  )
}

export default Sidebar
