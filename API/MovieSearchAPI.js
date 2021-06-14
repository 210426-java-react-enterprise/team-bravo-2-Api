const movieSearchAPI = {

    apiURL: 'http://p2api-env.eba-mrmas8kr.us-east-1.elasticbeanstalk.com',


    omdbMultiSearch: async (data) => {
        let res;

        console.log(data);

        try {
            res = await fetch(`${movieSearchAPI.apiURL}/omdb/multi-search/${data}`, {
                method: 'GET',
                //body: JSON.stringify(data),
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

    omdbImdbSearch: async (data) => {
        let res;

        console.log(data);

        try {
            res = await fetch(`${movieSearchAPI.apiURL}/omdb/imdb-search/${data}`, {
                method: 'GET',
                //body: JSON.stringify(data),
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


    saveItem: async (data) => {
        let res;

        console.log(data);

        try {
            res = await fetch(`${movieSearchAPI.apiURL}/movie/save`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        } catch (error) {
            // return undefined;
            console.log(error);
        }
        const json = await res.json();
        return json;
    }
}