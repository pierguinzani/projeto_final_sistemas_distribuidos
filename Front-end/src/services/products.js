const axios = require('axios');
const API = process.env.REACT_APP_URL_API
// const API = "http://rafaelsbot.herokuapp.com"


let AllProducts;
let type;

async function GetProducts() {
  
  // axios.get( API ).then(res => {console.log("deu bom")}).catch(err => {console.log("deu ruim " + err)})


  const response = await axios.get(API + "/cardapio");
  //console.log("aqui é pra vir os produtos")
  AllProducts = response.data
  //console.log("aqui é pra vir os produtos")
  type = 'PRODUTOS';
  //console.log(AllProducts)
  return AllProducts
}
GetProducts()

// GetProducts()
// setTimeout(() => {
//   console.log(` --------------------- ${type} ----------------------`)
//   console.log(AllProducts)
//   console.log(" -----------------------------------------------------")
// }, 3000)

export default  GetProducts;