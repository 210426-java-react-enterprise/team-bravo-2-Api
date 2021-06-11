const userAPI = {

    apiURL: 'http://localhost:5000',


    createItem: async (data) => {
        let res;

        try {
            res = await fetch(`${userAPI.apiURL}/movieCollections`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        } catch (error) {
            console.log(error);
        }
        const json = await res.json();
        return json;


        // .then((res) => res.json())
        // .then((data) => console.log(data));
    },

    getAllItems: async (data) => {

        let res;
        try {
            res = await fetch(`${userAPI.apiURL}/movieCollections/getAll`, {
                method: 'GET',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })
        } catch (err) {
            console.log(err);
        }

        const json = await res.json();
        return json;
    },

    getItem: async (data) => {
        let res;
        try {
            res = await fetch('${userAPI.apiURL}/movieCollections/getById', {

                method: 'GET',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }

            })
        } catch (err) {
            console.log(err);
        }

        const json = await res.json();
        return json;


    },

    updateItem: async (data) => {

        let res;
        try {
            res = await fetch(`${userAPI.apiURL}/movieCollections/updateById`, {
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




