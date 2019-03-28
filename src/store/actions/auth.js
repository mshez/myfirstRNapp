import {TRY_AUTH, AUTH_SET_TOKEN} from './actionTypes'
import {uiStartLoading, uiStopLoading} from './ui'
import startMainTabs from "../../screens/MainTabs/startMainTabs";

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    dispatch(uiStartLoading())
    let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAzUVb4VJnvziYEioiplakoJ7CzdS6kKdM"
    if (authMode === 'signup') {
      url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAzUVb4VJnvziYEioiplakoJ7CzdS6kKdM"
    }
    fetch(
      url,
      {
        method: "POST",
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(parsedResponse => {
        console.log(parsedResponse)
        dispatch(uiStopLoading())
        if (!parsedResponse.idToken) {
          alert(parsedResponse.error.message)
        } else {
          dispatch(authSetToken(parsedResponse.idToken))
          startMainTabs();
        }
      })
      .catch(err => {
        console.log(err)
        alert(err.message)
        dispatch(uiStopLoading())
      })
  }
};

export const authSetToken = token => {
  return {
    type: AUTH_SET_TOKEN,
    token: token
  }
}

export const authGetToken = () => {
  return (dispatch,getState)=>{
    const promise = new Promise((resolve,reject)=>{
      let token = getState().auth.token
      if(!token){
        reject()
      } else{
        resolve(token)
      }
    })
    return promise
  }
}
