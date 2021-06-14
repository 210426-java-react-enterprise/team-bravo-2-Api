
const userAPI = {

    apiURL: 'http://p2api-env.eba-mrmas8kr.us-east-1.elasticbeanstalk.com',

    localURL: 'http://localhost:5000',

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
    }
}





