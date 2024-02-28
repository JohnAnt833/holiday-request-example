import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './HolidayDetail.css'
function HolidayDetail() {
  return (
    
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '250px' },
    }}
    noValidate
    autoComplete="off"
  >
    <div className='holiday-detail'>
    <div className='no-of-days'>
      <TextField
      required
        id="outlined-number"
        label="Number of days to take"
        type="number"
     
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>
      <div className='reason'>
      
      <TextField
      id="outlined-multiline-static"
      label="Reason"
      multiline
      rows={4}
  
    />
    </div>
    </div>

  </Box>
  )
}

export default HolidayDetail
