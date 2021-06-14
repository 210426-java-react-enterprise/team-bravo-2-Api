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


// const shouldNavigateAway = false;

const handleCollectionItemSubmit = async (event) => {
    event.preventDefault();

    let collectionItemData = {};

    let { id } = JSON.parse(sessionStorage.movieReturn);

    // collectionItemData.title = title;
    // collectionItemData.year = year;
    // collectionItemData.prodCompany = prodCompany;
    // collectionItemData.mpaaRating = mpaaRating;
    // collectionItemData.lengthMin = lengthMin;
    // collectionItemData.genre = genre;
    // collectionItemData.description = description;

    collectionItemData.collectionInfoId = sessionStorage.collectionId;
    collectionItemData.movieID = id;
    collectionItemData.owned = collectionItemOwned.checked ? collectionItemOwned.value = 1 : collectionItemOwned.value = 0;
    collectionItemData.watched = collectionItemWatched.checked ? collectionItemWatched.value = 1 : collectionItemOwned.value = 0;
    collectionItemData.userRating = parseInt(collectionItemUserRating.value);
    collectionItemData.tradable = collectionItemTradeable.checked ? collectionItemTradeable.value = 1 : collectionItemOwned.value = 0;
    collectionItemData.userDescrip = collectionItemUserComment.value; //must be trim if optional input?

    itemAPI.createItem(collectionItemData);

    location.reload();

    // {
    //     "collectionInfoId":1,
    //     "movieID":2,
    //     "owned": 0,
    //     "watched": 1,
    //     "userRating": 10,
    //     "tradable": 0,
    //     "userDescrip": "This works and loks nice"
    // }


    // {
    //     "collInfo":{
    //         "id": 20,
    //             "account":{
    //             "id":4,
    //             "username":"ann"
    //             },
    //             "collType":{
    //             "id":1,
    //             "mediumType":"movies"
    //             },
    //     "collectionName":"Happy place!"
    //     },
    //     "movie":{
    //         "id": 2
    //     },
    //     "owned": 0,
    //     "watched": 1,
    //     "user_rating": 10,
    //     "tradeable": 0,
    //     "user_comment": "New item added to collection! I love this film."
    // }

    ///this is where route call would go

}


const validateItemInputs = () => {
    let isValid = true;

    if (!collectionItemOwned.checked) isValid = false;
    if (!collectionItemWatched.checked) isValid = false;

    isValid ? collectionItemSubmit.removeAttribute('disabled') : collectionItemSubmit.setAttribute('disabled', true);
}



//EVENT LISTENERS

document.querySelectorAll('input').forEach(element => element.addEventListener("input", validateItemInputs));

collectionItemSubmit.addEventListener('click', function (event) {
    // shouldNavigateAway;
    handleCollectionItemSubmit(event);
});

