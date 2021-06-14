/*
GET from API
- Request => user input - title
- response (display)
    - title
    - year
    - mppaRating
    - length
    - genre
    - descrip
    - prodCompany
- User input
    - owned - checkbox
    - watched - check box
    - userRating - radio 1 - 10
    - userComment - textArea
    - tradeable - checkbox
*/


//CollectionItem FORM INPUTS
// const collectionItem = document.getElementById('collectionItem');
const collectionItemOwned = document.getElementById('collectionItemOwned');
const collectionItemWatched = document.getElementById('collectionItemWatched');
const collectionItemUserRating = document.getElementById('collectionItemUserRating');
const collectionItemUserComment = document.getElementById('collectionItemUserComment');
const collectionItemTradeable = document.getElementById('collectionItemTradeable');
const collectionItemSubmit = document.getElementById('collectionItemSubmit');

const handleCollectionItemSubmit = async (event) => {
    event.preventDefault();

    let collectionItemData = {};

    let { id } = JSON.parse(sessionStorage.movieReturn);
    let itemMethod = 'createItem';
    if (parseInt(sessionStorage.updateItemId) > 0) {
        id = JSON.parse(sessionStorage.updateItemId);
        itemMethod = 'updateItem';
    }

    collectionItemData.collectionInfoId = sessionStorage.collectionId;
    collectionItemData.movieID = id;
    collectionItemData.owned = collectionItemOwned.checked ? collectionItemOwned.value = 1 : collectionItemOwned.value = 0;
    collectionItemData.watched = collectionItemWatched.checked ? collectionItemWatched.value = 1 : collectionItemOwned.value = 0;
    collectionItemData.userRating = parseInt(collectionItemUserRating.value);
    collectionItemData.tradable = collectionItemTradeable.checked ? collectionItemTradeable.value = 1 : collectionItemOwned.value = 0;
    collectionItemData.userDescrip = collectionItemUserComment.value; //must be trim if optional input?

    if (JSON.parse(sessionStorage.updateItemId) > 0) {
        itemAPI.updateItem(collectionItemData);
    } else {
        itemAPI.createItem(collectionItemData);
    }

    sessionStorage.setItem('updateItemId', 0);

    location.reload();
}


const validateItemInputs = () => {
    let isValid = true;

    // if (!collectionItemOwned.checked) isValid = false;
    // if (!collectionItemWatched.checked) isValid = false;

    isValid ? collectionItemSubmit.removeAttribute('disabled') : collectionItemSubmit.setAttribute('disabled', true);
}



//EVENT LISTENERS

document.querySelectorAll('input').forEach(element => element.addEventListener("input", validateItemInputs));

collectionItemSubmit.addEventListener('click', function (event) {
    handleCollectionItemSubmit(event);
});

