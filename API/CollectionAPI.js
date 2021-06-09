const collectionAPI = {
    addCollection: async (data) => {

        let res;

        try {
            res = await fetch('/collections/create', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            console.log(error)
        }

        const json = await res.json();
        return json;
    }
}