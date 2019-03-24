import {SET_PLACES} from './actionTypes';
import {uiStopLoading, uiStartLoading} from "./ui";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    dispatch(uiStartLoading())
    fetch("https://us-central1-omega-winter-151719.cloudfunctions.net/storeImage", {
      method: "POST",
      body: JSON.stringify({
        image: image.base64
      })
    })
      .then(res => res.json())
      .then(parsedRes => {
        const placeData = {
          name: placeName,
          location: location,
          image: parsedRes.imageUrl
        };
        return fetch("https://omega-winter-151719.firebaseio.com/places.json", {
          method: "POST",
          body: JSON.stringify(placeData)
        })
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again!");
        dispatch(uiStopLoading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        dispatch(uiStopLoading());
      });
  };
};

export const getPlaces = () => {
  return dispatch => {
    fetch("https://omega-winter-151719.firebaseio.com/places.json")
      .catch(err => {
        console.log(err)
        alert("Something went wrong try again")
      })
      .then(res => res.json())
      .then(parsedRes => {
        let places = []
        Object.keys(parsedRes).map((place, index) => {
          places.push(
            {
              ...parsedRes[place],
              image: {
                uri: parsedRes[place].image
              },
              key: index
            })
        })
        console.log(places)
        dispatch(setPlaces(places))
      })
  }
}

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places: places
  }
}

// export const deletePlace = (key) => {
//   return {
//     type: DELETE_PLACE,
//     placeKey: key
//   };
// };
