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


    localURL: 'http://localhost:5000',

    register: async (data) => {

        let res;
        try {
            res = await fetch(`${UserAPI.localURL}/accounts/register`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })
        } catch (err) {
            console.log(err);
        }

        const json = await res.json();
        console.log(json)


    }

}

