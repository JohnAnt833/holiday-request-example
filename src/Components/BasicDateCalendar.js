import React from 'react'
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import './BasicDateCalendar.css'
import HolidayDetail from './HolidayDetail';


function BasicDateCalendar() {
  const today = new Date();
  return (
    <div className='basic-date-calendar'>
    <h2>Book your holiday</h2>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <DemoContainer
        components={['DatePicker', 'DesktopDatePicker', 'MobileDatePicker']}>
        <div className='date-picker'>
        <div className='reponsive-picker'>
        <DemoItem  label="Start">
          <DatePicker  defaultValue={dayjs(today)} />
        </DemoItem>
        </div>
         <DemoItem  label="End">
          <DatePicker  defaultValue={dayjs(today)} />
        </DemoItem>
        
        </div>
       <div className='mobile-picker'>
        <DemoItem label="Mobile variant">
          <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        </div>

      </DemoContainer>
    </LocalizationProvider>
    <HolidayDetail />
    </div>
  )
}


export default BasicDateCalendar
