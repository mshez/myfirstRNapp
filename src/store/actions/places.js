import {SET_PLACES, REMOVE_PLACE} from './actionTypes';
import {uiStopLoading, uiStartLoading, authGetToken} from "./index";

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
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        dispatch(getPlaces())
        dispatch(uiStopLoading());
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again!");
        dispatch(uiStopLoading());
      })
  };
};

export const getPlaces = () => {
  return dispatch => {
    dispatch(authGetToken())
      .catch(()=>{
        alert('No valid token')
      })
      .then(token=>{
        return fetch("https://omega-winter-151719.firebaseio.com/places.json?auth="+token)
      })
      .then(res => res.json())
      .then(parsedRes => {
        if(parsedRes.error){
          console.log(parsedRes.error)
          alert("Something went wrong try again")
        } else{
          let places = []
          Object.keys(parsedRes).map((placeKey) => {
            places.push(
              {
                ...parsedRes[placeKey],
                image: {
                  uri: parsedRes[placeKey].image
                },
                key: placeKey
              })
          })
          console.log(places)
          dispatch(setPlaces(places))
        }
      })
      .catch(err => {
        console.log(err)
        alert("Something went wrong try again")
      })
  }
}

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places: places
  }
}

export const deletePlace = (key) => {
  return dispatch => {
    dispatch(authGetToken())
      .catch(()=>{
        alert('No valid token')
      })
      .then(token=>{
        dispatch(removePlace(key))
        return fetch("https://omega-winter-151719.firebaseio.com/places/" + key + ".json?auth="+token, {
          method: "DELETE"
        })
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log("Done")
      })
      .catch(err => {
        console.log(err)
        alert("Something went wrong try again")
      })
  }
};

export const removePlace = key => {
  return {
    type: REMOVE_PLACE,
    key: key
  }
}
