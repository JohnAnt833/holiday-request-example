import React from 'react'
import BasicDateCalendar from './BasicDateCalendar'

import './HolidayForm.css'
import '../App.css';
function HolidayForm() {
  return (
    <div className='holiday-form'>
<div className='holiday-form__area'>
      <BasicDateCalendar />
      
      </div>
    </div>
  )
}

export default HolidayForm
