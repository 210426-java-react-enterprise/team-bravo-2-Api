
///COLLECTION TYPE FORM INPUTS
const collectionType = document.getElementById('collection-type');
const collectionTypeDesc = document.getElementById("collection-type-description");
const collectionTypeName = document.getElementById('collection-type-name');

const collectionTypeSubmit = document.getElementById("collection-type-submit");
const shouldNavigateAway = false;

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
console.log(JSON.parse(sessionStorage.collectionTypes))

const handleCollectionTypeSubmit = async (event) => {
    event.preventDefault();

    let collectionTypeData = {};

    //needs validated
    collectionTypeData.type = collectionType.value;
    collectionTypeData.name = collectionTypeName.value.trim();
    collectionTypeData.desc = collectionTypeDesc.value;

    console.log(collectionTypeData);
    collectionAPI.addCollection(collectionTypeData);

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



