const collectionAPI = {

    localURL: 'http://localhost:5000',

    getCollectionTypes: async () => {

        let res;

        try {
            res = await fetch(`${collectionAPI.localURL}/collectionType/getAll`);
        } catch (error) {
            console.log(error);
        }
        let json = await res.json();
        return json;

    },

    addCollection: async (data) => {
        console.log(data);





        // let res;

        // try {
        //     res = await fetch('/collection/create', {
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //         headers: { 'Content-Type': 'application/json' }
        //     });
        // } catch (error) {
        //     console.log(error)
        // }


        // const json = await res.json();
        // return json;

        ///to create cool info type object
        //account json object => from local storage
        //collection type object

        /*
              {  
                "account": {
                    "id": 1,
                    "username": "test",
                    "email": "tester@test.org"
                },
                "collType": {
                    "id": 1,
                    "mediumType": "movies"
                },
                "collectionName": "test collection",
                "collectionDescrip": "test"
            }

            {  
    "account": {
        "id": 3,
        "username": "jackjack",
        "email": "jack@dog.com"
        },
    "collType": {
        "id": 1,
        "mediumType": "movies"
        },
    "collectionName": "test collection",
    "collectionDescrip": "test"
}
        */
    },


}


