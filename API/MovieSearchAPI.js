const movieSearchAPI = {

    apiURL: 'http://localhost:5000/omdb',


    omdbMultiSearch: async (data) => {
        let res;

        console.log(data);

        try {
            res = await fetch(`${movieSearchAPI.apiURL}/multiSearch/${data}`, {
                method: 'GET',
                //body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        } catch (error) {
            // return undefined;
            console.log(error);
        }
        const json = await res.json();
        console.log(json)
        return json;


        // .then((res) => res.json())
        // .then((data) => console.log(data));
    }

}