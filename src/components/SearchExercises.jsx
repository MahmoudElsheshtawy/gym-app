import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fechData } from '../utils/fechData';
// import { exerseseOption  } from '../../src/utils/fechData'
import { exerseseOption,fetchData } from '../utils/fechData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises , setBodypart , bodypart  }) => {

  const [search, setSearch]=useState("");
  const [bodyparts, setbodyparts]=useState([]);

  useEffect(()=>{
    const fechexersicsedata =async()=>{
      const bodyPartData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerseseOption)
         
       setbodyparts(['all' ,...bodyPartData])

    }
    fechexersicsedata();

  },[])

  const  handlsearch = async ()=>{
   if(search){
  const exercisesData  =await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerseseOption)

  const searchedExercises = exercisesData.filter(
    (exercises)=>exercises.name.toLowerCase().includes(search)
    ||exercises.target.toLowerCase().includes(search)
    ||exercises.equipment.toLowerCase().includes(search)
    ||exercises.bodyPart.toLowerCase().includes(search)
  );
  setSearch("");
  setExercises(searchedExercises)

  }
  }
    
     
  return (
   
     
        <Stack alignItems={"center" } mt={'37px'} justifyContent={'center'}p={'20px'} >
           <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
              Awesome Exercises You <br /> Should Know
           </Typography>
           <Box position="relative" mb="72px" textAlign={'center'}>
            <TextField
              height="76px"
              sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="Search Exercises"
              type="text"
            />
            <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', right:'0px',position: 'absolute',fontSize: { lg: '20px', xs: '14px' } }} onClick={handlsearch}>
              Search
            </Button>
      </Box>


      <Box position={'relative'} width={'100%'} padding={'20px'} >
     <HorizontalScrollbar data={bodyparts} bodypart={bodypart} setBodypart={setBodypart}/>
      </Box>
        </Stack>
   
        
        
     





  )
}

export default SearchExercises