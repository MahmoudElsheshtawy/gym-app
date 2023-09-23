import React from 'react'
import Icon from'../assets/icons/gym.png'
import { Stack, Typography } from '@mui/material'
const Bodypart = ({item ,bodypart,setBodypart}) => {
  return (

     <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodypart-card"
    sx={{
    borderTop : bodypart === item ? '4px solid #FF2625': "",
    background: '#aaa',
    //  borderBottomLeftRadius: '20px',
      width: '100px', height: '150px',
       cursor: 'pointer', gap: '4px'
}}

      >

   <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="20px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>



    </Stack>

   

  )
}

export default Bodypart