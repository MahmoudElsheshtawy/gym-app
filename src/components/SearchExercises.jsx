import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SearchExercises = () => {
  const [search, setSearch]=useState("");
  const  handlsearch = async ()=>{
   
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
        </Stack>
   
        
        
     





  )
}

export default SearchExercises