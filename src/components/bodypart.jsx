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
    borderTop:  bodypart === item ?   '4px solid #FF2625': '' ,
    background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px'
  
  
  
  
  }}

      >

   <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>



    </Stack>
  )
}

export default Bodypart