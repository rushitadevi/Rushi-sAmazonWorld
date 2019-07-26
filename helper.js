let username = 'user8';
let password = 'eAqd2ZPk3Rbtm8Mw';
let url = "https://cors-anywhere.herokuapp.com/https://strive-school-testing-apis.herokuapp.com/api/product/";
let authString = `${username}:${password}`

let headers = new Headers({
    "Content-Type": "application/json",
});
headers.set('Authorization', 'Basic ' + btoa(authString))


getProductsById = async id => {
    
    var response = await fetch(url+id,{method: 'GET', headers: headers});
    return await response.json();
    
  };

  submitProductToserver=async products => {
      console.log(products);
    var response=await fetch(url,{method: 'POST', body:JSON.stringify(products), headers: headers});     
    var jSon=await response.json();         
    }

  updateProductToserver=async (products,id) => {
    console.log(products);
  var response=await fetch(url+id,{method: 'PUT', body:JSON.stringify(products), headers: headers});     
  var jSon=await response.json();  
  }