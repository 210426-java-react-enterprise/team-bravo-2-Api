const URL = 'http://localhost:5000';

function getTest(){


    
  // fetch(`${URL}/accounts/test`)
 //    .then((res) => res.json())
    // .then((res) => JSON.parse(res))
 //    .then((data) => console.log(data));
//    // .catch(error => console.log(error))
   
 }
 getTest();

function loginUser(data){
    fetch(`${URL}/accounts/login`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

