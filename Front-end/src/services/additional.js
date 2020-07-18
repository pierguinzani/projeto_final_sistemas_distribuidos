const axios = require('axios');
const API = process.env.REACT_APP_URL_API

let AllAdditional;
let type;

async function GetAdditional() {
  const response = await axios.get(API + "/adicionais");
  AllAdditional = response.data
  type = 'ADICIONAIS'
  return AllAdditional
}

// GetAdditional()
// setTimeout(() => {
//   console.log(` --------------------- ${type} ----------------------`)
//   console.log(AllAdditional)
//   console.log(" -----------------------------------------------------")
// }, 3000)

export default GetAdditional;