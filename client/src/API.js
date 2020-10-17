const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://petatkj.herokuapp.com/';
require('dotenv').config();
const api_key=process.env.REACT_APP_API_KEY;
export async function listHomeAddress() {
  const response = await fetch(`${API_URL}/api/address`);
  return response.json();
}

export async function createHomeAddress(entry) {
  const response = await fetch(`${API_URL}/api/address`,{
    method: 'POST',
    headers:{
      'content-type': 'application/json',
      'x-api-key': `${api_key}`,
    },
    body: JSON.stringify(entry),
  });
  return response.json();
}