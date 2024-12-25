const express = require('express')
require('dotenv').config();
const app = express();

const axios = require('axios');

// Example GET request
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Example POST request
async function postData() {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error posting data:', error.message);
  }
}

// Example with timeout and headers
async function fetchWithHeaders() {
  try {
    const response = await axios.get(`${process.env.MICROSERVICE5}/getData`, {
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
  try{
    const response = await fetchWithHeaders();
    
return res.send({
    data: response.data
});
}catch(e){
  return res.send(e.message)
}

})
app.listen(3004)

