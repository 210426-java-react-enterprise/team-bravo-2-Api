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
                method: 'POST',//PUT?????
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




