
const userAPI = {

    apiURL: 'http://localhost:5000',

    getTest: () => {



        // fetch(`${URL}/accounts/test`)
        //    .then((res) => res.json())
        // .then((res) => JSON.parse(res))
        //    .then((data) => console.log(data));
        //    // .catch(error => console.log(error))

    },

    loginUser: (data) => {

        fetch(`${UserAPI.apiURL}/accounts/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    },

    register: async (data) => {

        let res;
        try {
            res = await fetch(`${UserAPI.apiURL}/accounts/register`, {
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





