  export const  m  const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
      params: {limit: '10'},
      headers: {
        'X-RapidAPI-Key': '419f8afa0cmsh10a55b835e47af5p178d00jsn7736a14ec53d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };




export const fechData =async (url,optians)=>{
      const response =await fetch(url,optians);
      const data =await response.json()
      return data;
} 