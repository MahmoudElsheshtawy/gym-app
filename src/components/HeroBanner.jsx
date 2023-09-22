import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px" >
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '40px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises"style={{ marginTop: '35px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '10px', fontSize: '20px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore-Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '170px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
  )
}

export default HeroBanner