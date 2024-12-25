const express = require('express')
const app = express();
require('dotenv').config();

const axios = require('axios');

// Example with timeout and headers
async function fetchWithHeaders() {
  try {
    console.log(process.env)
    const response = await axios.get(`${process.env.MICROSERVICE2}/getData`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('#################### ', response)
    return response.data;
} catch (error) {
    console.error('Error fetching data with headers:', error.message);
    return error
  }
}

app.get('/getData',async(req, res)=>{
  try{
    const response = await fetchWithHeaders();
    console.log('response ', response)
    
return res.send({
    data: response.data
});
}catch(e){
  return res.send(e.message)
}

})
app.listen(3001)

