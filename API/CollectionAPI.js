const collectionAPI = {

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
            res = await fetch(`${collectionAPI.localURL}/collectionType/get-all`);
        } catch (error) {
            console.log(error);
        }
        let json = await res.json();
        return json;

    },

    getAllCollectionByID: async () => {
        let res;

        try {
            res = await fetch(`${collectionAPI.localURL}/collection/get-info-by-id`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.JWT

                },
            })
        } catch (error) {
            // return undefined;
            console.log(error);
        }

        const json = await res.json();
        return json;


    },

    addCollection: async (data) => {

        console.log(data);

        let res;

        try {
            res = await fetch(`${collectionAPI.localURL}/collection/save`, {
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
            res = await fetch(`${collectionAPI.localURL}/collection/delete/${data}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            console.log(error)
        }
    },
}


