const omdbSearchInit = () => {
    ///COLLECTION TYPE FORM INPUTS
    const movieTitle = document.getElementById('collectionItemSearch');

    const collectionSearchSubmit = document.getElementById("collection-search-submit");
    const shouldNavigateAway = false;

    const handleCollectionTypeSubmit = async (event) => {
        event.preventDefault();

        let searchTerm = movieTitle.value.trim().replaceAll(" ", "+");

        let searchResults = await movieSearchAPI.omdbMultiSearch(searchTerm);

        sessionStorage.setItem("searchResults", JSON.stringify(searchResults));
    }

    const validateInputs = () => {
        let isValid = true;

        if (!movieTitle.value.trim()) isValid = false;

        isValid ? collectionSearchSubmit.removeAttribute('disabled') : collectionSearchSubmit.setAttribute('disabled', true);
    }

    //EVENT LISTENERS

    document.querySelectorAll('input').forEach(element => element.addEventListener("input", validateInputs));

    collectionSearchSubmit.addEventListener('click', function (event) {
        // shouldNavigateAway;
        handleCollectionTypeSubmit(event);

    })

}
omdbSearchInit();
