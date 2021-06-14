const collectionAPI = {

    apiURL: 'http://p2api-env.eba-mrmas8kr.us-east-1.elasticbeanstalk.com',

    localURL: 'http://localhost:5000',

    JWT: sessionStorage.JWT,

    addItem: async () => {
        let res;

        try {
            // res = await (fetch(`${collectionAPI.localURL}/movieCollections/save`)
        } catch (error) {
            console.log(error)
        }
    },

    getCollectionTypes: async () => {

        let res;

        try {
            res = await fetch(`${collectionAPI.apiURL}/collectionType/get-all`);
        } catch (error) {
            console.log(error);
        }
        let json = await res.json();
        return json;

    },

    getAllCollectionByID: async () => {
        let res;

        try {
            res = await fetch(`${collectionAPI.apiURL}/collection/get-info-by-id`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.JWT

                },
            })
        } catch (error) {
            console.log(error);
        }

        const json = await res.json();
        return json;


    },

    addCollection: async (data) => {

        console.log(data);

        let res;

        try {
            res = await fetch(`${collectionAPI.apiURL}/collection/save`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            console.log(error)
        }

        const json = await res.json();
        return json;

    },
    deleteCollection: async (data) => {

        console.log(data);

        let res;

        try {
            res = await fetch(`${collectionAPI.apiURL}/collection/delete/${data}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            console.log(error)
        }
    },
}


