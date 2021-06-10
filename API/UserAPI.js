const UserAPI = {

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