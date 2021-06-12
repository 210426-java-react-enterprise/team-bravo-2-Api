const collectionInit = () => {
    ///COLLECTION TYPE FORM INPUTS ELEMENTS
    const collectionType = document.getElementById('collection-type');
    const collectionTypeDesc = document.getElementById("collection-type-description");
    const collectionTypeName = document.getElementById('collection-type-name');
    const collectionTypeSubmit = document.getElementById("collection-type-submit");

    //CONTAINERS ELEMENTS
    const collectionTypeContainer = document.getElementById('collectionTypeContainer');
    const collectionItemContainer = document.getElementById('collectionItemContainer');

    const shouldNavigateAway = false;





    const renderCollections = async () => {
        //COLLECTION DISPLAY ELEMENTS
        // let collectionType = document.getElementById('collectionType');
        // let collectionName = document.getElementById('collectionName');
        // let collectionDescription = document.getElementById('collectionDescrip');
        let collectionsContainer = document.getElementById('collectionsContainer');


        const collections = await collectionAPI.getAllCollectionByID();
        // collectionItemContainer.classList.remove('d-none');
        console.log(collections)
        // console.log(collectionTypeRender)
        //RENDER COLLECTION NAMES
        for (const [index, collection] of Object.entries(collections)) {
            console.log(index, collection)
            // collectionType.innerText = collection.collType.mediumType;
            // collectionDescription.innerText = collection.collectionDescrip;
            // collectionName.innerText = collection.collectionName;


            let htmlString = `<div class="card" id='collectionCard${collection.account.id}' style="width: 100%;">
                                <img src="..." class="card-img-top" alt="...">
                                <div class="card-body collection-body">
                                <!-- <h5 class="card-title" id="collectionType">${collection.collType.mediumType}</h5> -->
                                <h4 class="card-title" id="collectionName">${collection.collectionName}</h4>
                                <p class="card-text" id="collectionDescrip">${collection.collectionDescrip}</p>
                                <a href="#" class="btn btn-danger" id="deleteItem">Delete</a>
                                </div>`

            collectionsContainer.innerHTML = htmlString;

        }

        // collectionType.innerText = collections.collType.mediumType;


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
            "collectionDescrip": collectionTypeDesc.value
        };

        // let collection = await collectionAPI.addCollection(collectionTypeData);

        // if (collecion.status === 500) {
        //     alert("Collection creation failed.")
        // }
        // if (collection.id) {

        // sessionStorage.setItem('userCollections', collection);

        collectionTypeContainer.classList.add('d-none');
        collectionItemContainer.classList.remove('d-none')
        // }


    }

    const validateInputs = () => {
        let isValid = true;
        if (collectionType.value === "Select a Collection Type") isValid = false;

        if (!collectionTypeName.value.trim()) isValid = false;

        isValid ? collectionTypeSubmit.removeAttribute('disabled') : collectionTypeSubmit.setAttribute('disabled', true);
    }

    //EVENT LISTENERS

    document.querySelectorAll('input').forEach(element => element.addEventListener("input", validateInputs));

    collectionTypeSubmit.addEventListener('click', function (event) {
        // shouldNavigateAway;
        handleCollectionTypeSubmit(event);

    })
}
collectionInit();
