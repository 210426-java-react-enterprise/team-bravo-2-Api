const itemAPI = {

    apiURL: 'http://localhost:5000',


    createItem: async (data) => {
        console.log(data);
        let res;

        try {
            res = await fetch(`${userAPI.apiURL}/movieCollections/save`, {
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
    },

    getAllItems: async (data) => {

        let res;
        try {
            res = await fetch(`${userAPI.apiURL}/movieCollections/get-all`, {
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
            res = await fetch('${userAPI.apiURL}/movieCollections/get-by-id', {

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
        console.log('in update', data.movieID)
        let res;
        try {
            res = await fetch(`${userAPI.apiURL}/movieCollections/update/${data.movieID}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })
        } catch (err) {
            console.log(err);
        }

        const json = await res.json();
        return json;
    },

    deleteItem: async (data) => {

        let res;
        try {
            res = await fetch(`${userAPI.apiURL}/movieCollections/delete/${data}`, {
                method: 'DELETE',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })
        } catch (err) {
            console.log(err);
        }
    }
}




