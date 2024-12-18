const express = require('express')
require('dotenv').config();
const app = express();

const axios = require('axios');

// Example with timeout and headers
async function fetchWithHeaders() {
  try {
    console.log('URL ',process.env)
    const response = await axios.get(`${process.env.MICROSERVICE4}/getData`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
} catch (error) {
    console.error('Error fetching data with headers:', error.message);
  }
}

app.get('/getData',async(req, res)=>{
    const response = await fetchWithHeaders();
    console.log('response ',response)
res.send({
    data: response.data
});

})
app.listen(3003)

