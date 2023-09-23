import React, { useState } from 'react'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'
import { Box } from '@mui/material'
const Home = () => {
  const [exercises, setExercises]=useState('all');
  const [bodypart, setBodypart]=useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises}
      bodypart={bodypart} 
      setBodypart={setBodypart}/>
      <Exercises  
      setExercises={setExercises}
      bodypart={bodypart} 
      setBodypart={setBodypart}/>
    </Box>
  )
}

export default Home