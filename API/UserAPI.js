
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
            console.log(error);
        }
        if (res.status !== 500) {
            sessionStorage.setItem('JWT', res.headers.get("Authorization"));
        }

        const json = await res.json();
        return json;

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





