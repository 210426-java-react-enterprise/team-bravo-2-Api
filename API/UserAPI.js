
const userAPI = {

    apiURL: 'http://localhost:5000',

    getTest: () => {



        // fetch(`${URL}/accounts/test`)
        //    .then((res) => res.json())
        // .then((res) => JSON.parse(res))
        //    .then((data) => console.log(data));
        //    // .catch(error => console.log(error))

    },

    loginUser: async (data) => {
        let res;

        try {
            res = await fetch(`${userAPI.apiURL}/accounts/login`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                
                },
            })
        } catch (error) {
            // return undefined;
            console.log(error);
        }
        
        const json = await res.json();
        console.log(json)
        return json;


        // .then((res) => res.json())
        // .then((data) => console.log(data));
    },

    register: async (data) => {

        let res;
        try {
            res = await fetch(`${userAPI.apiURL}/accounts/register`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })
        } catch (err) {
            console.log(err);
        }

        const json = await res.json();
        return json;
    }
}





