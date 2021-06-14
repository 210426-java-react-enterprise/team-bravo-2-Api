const collectionInit = () => {
    ///COLLECTION TYPE FORM INPUTS ELEMENTS
    const collectionType = document.getElementById('collection-type');
    const collectionTypeDesc = document.getElementById("collection-type-description");
    const collectionTypeName = document.getElementById('collection-type-name');
    const collectionTypeSubmit = document.getElementById("collection-type-submit");
    const addItemBack = document.getElementById('addItemBack');
    const loadCollections = document.getElementById('loadCollections');

    //CONTAINERS ELEMENTS
    const collectionTypeContainer = document.getElementById('collectionTypeContainer');
    const collectionItemContainer = document.getElementById('collectionItemContainer');
    const searchItemContainer = document.getElementById('searchItemContainer');


    const shouldNavigateAway = false;

    const renderCollections = async () => {

        const collectionsAPI = await collectionAPI.getAllCollectionByID();
        sessionStorage.setItem('collections', JSON.stringify(collectionsAPI));

        let collections;

        !sessionStorage.collections ? collections = collectionsAPI : collections = JSON.parse(sessionStorage.collections);
        console.log(collections);
        //RENDER COLLECTION NAMES
        for (const [index, collection] of Object.entries(collections)) {
            console.log(index, collection)


            let collectiionTypeHTML = `<div class="card collection-card-container mt-3" style="width: 100%">
                                <div class="card-body collection-card-body" >
                                <h2 class="card-title" id="collectionName">${collection.collectionName}</h2>
                                <h5 class="card-title" id="collectionType">Type: ${collection.collType.mediumType}</h5>
                                <p class="card-text" id="collectionDescrip">${collection.collectionDescrip}</p>
                                <div class="collection-form-buttons">
                                    <button type="button" class="btn btn-success m-3 addItemButton" value='${collection}''>Add Item</button>
                                    <button type="button" class="btn btn-danger m-3" value='${collection.id}' id='deleteCollectionButon'>Delete</button>
                                </div>
                                <div class='collection-card-container mt-3' id='collectionCard${collection.id}'></div>
                                </div>`

            collectionsContainer.innerHTML += collectiionTypeHTML;

            let addItemButton = document.getElementsByClassName('addItemButton');

            for (let i = 0; i < addItemButton.length; i++) {
                addItemButton.value = collections[i].id;

                addItemButton[i].addEventListener('click', function (event) {
                    event.preventDefault();

                    sessionStorage.setItem(`collectionId`, collections[i].id);

                    searchItemContainer.classList.remove('d-none');
                    collectionTypeContainer.classList.add('d-none');

                })
            }

            let moveiArr = collection.movieCollections;

            for (item of moveiArr) {
                console.log(item)
                item.owned = 1 ? item.owned = "Yes" : item.ownd = "No";
                item.tradable = 1 ? item.tradable = "Yes" : item.tradable = "No";
                item.watched = 1 ? item.watched = "Yes" : item.watched = "No";

                let collectionItemHTML = `<div class="card item-card-body" id='${item.movie.id}'">
                                        <img src="${item.movie.imgUrl}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h4 class="card-title">${item.movie.title}</h4>
                                        <h5 class="card-title">${item.movie.year}</h5>
                                        <h5 class="card-title">${item.movie.prodCompany}</h5>
                                        <h5 class="card-title">${item.movie.mpaaRating}</h5>
                                        <h5 class="card-title">${item.movie.genre}</h5>
                                        <p>${item.movie.description}</p>
                                        <h5 class="card-title">Owned: ${item.owned}</h5>
                                        <h5 class="card-title">For Trade: ${item.tradable}</h5>
                                        <p class="card-title">User Description: ${item.userDescrip}</p>
                                        <h5 class="card-title">User Rating: ${item.userRating}</h5>
                                        <button type="button" class="btn btn-danger m-3" id='deleteItemButton'>Delete</button>

                                        </div>
                                    </div>`
                console.log(index, collection.id)


                let collectionCard = document.getElementById(`collectionCard${collection.id}`);
                collectionCard.innerHTML += collectionItemHTML
            }
        }
    }
    renderCollections();

    //Dynamic dropmenu load
    const typeDropdown = async () => {

        let typesObj = await collectionAPI.getCollectionTypes();
        sessionStorage.setItem('collectionTypes', JSON.stringify(typesObj))

        let dropdownType = document.getElementById('collection-type')

        for (type of typesObj) {
            let option = document.createElement('option');
            option.textContent = type.mediumType;
            dropdownType.append(option);
        }

        return typesObj;
    }
    typeDropdown();

    const handleCollectionTypeSubmit = async (event) => {
        event.preventDefault();

        let user = JSON.parse(sessionStorage.authUser);
        let collectionTypes = JSON.parse(sessionStorage.collectionTypes);

        let mediumId;
        for (const [key, value] of Object.entries(collectionTypes)) {
            console.log(value.id)
            if (value.mediumType === collectionType.value) {
                mediumId = value.id;
            }
        }

        let collectionTypeData = {
            "account": {
                "id": user.id,
                "username": user.username,
                "email": user.email
            },
            "collType": {
                "id": mediumId,
                "mediumType": collectionType.value
            },
            "collectionName": collectionTypeName.value.trim(),
            "collectionDescrip": collectionTypeDesc.value.trim()
        };

        let collection = await collectionAPI.addCollection(collectionTypeData);

        if (collection.status === 500) {
            alert("Collection creation failed.")
        }
        if (collection.id) {

            sessionStorage.setItem('userCollections', JSON.stringify(collection));

            // collectionTypeContainer.classList.add('d-none');
            // collectionItemContainer.classList.remove('d-none')
        }

        location.reload();


    }

    const validateInputs = () => {
        let isValid = true;
        if (collectionType.value === "Select a Collection Type") isValid = false;

        if (!collectionTypeName.value.trim()) isValid = false;

        isValid ? collectionTypeSubmit.removeAttribute('disabled') : collectionTypeSubmit.setAttribute('disabled', true);
    }

    //EVENT LISTENERS

    addItemBack.addEventListener('click', function (event) {
        collectionTypeContainer.classList.remove('d-none');
        searchItemContainer.classList.add('d-none');
    })

    loadCollections.addEventListener('click', async function (event) {
        const collectionsAPI = await collectionAPI.getAllCollectionByID();
        sessionStorage.setItem('collections', JSON.stringify(collectionsAPI));
        location.reload();

    })

    document.querySelectorAll('input').forEach(element => element.addEventListener("input", validateInputs));

    collectionTypeSubmit.addEventListener('click', function (event) {
        // shouldNavigateAway;
        handleCollectionTypeSubmit(event);

    })
}
collectionInit();
