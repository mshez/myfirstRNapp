import React from 'react'
import {Navigation} from "react-native-navigation";
import {Provider} from "react-redux";
//Screens
import AuthScreen from "./Auth/Auth";
import SharePlaceScreen from "./SharePlace/SharePlace";
import FindPlaceScreen from "./FindPlace/FindPlace";
import PlaceDetail from "./PlaceDetail/PlaceDetail"
import SideDrawer from "./SideDrawer/SideDrawer"
//Redux
import configureStore from './../../src/store/configureStore';
const store = configureStore();

function registerScreens() {
  Navigation.registerComponent('awesome-places.AuthScreen', () => (props) => (
    <Provider store={store}>
      <AuthScreen {...props} />
    </Provider>
  ), () => AuthScreen);
  Navigation.registerComponent('awesome-places.SharePlaceScreen', () => (props) => (
    <Provider store={store}>
      <SharePlaceScreen {...props} />
    </Provider>
  ), () => SharePlaceScreen);

  Navigation.registerComponent('awesome-places.FindPlaceScreen', () => (props) => (
    <Provider store={store}>
      <FindPlaceScreen {...props} />
    </Provider>
  ), () => FindPlaceScreen);
  Navigation.registerComponent('awesome-places.PlaceDetailScreen', () => (props) => (
    <Provider store={store}>
      <PlaceDetail {...props} />
    </Provider>
  ), () => PlaceDetail);
  Navigation.registerComponent('awesome-places.SideDrawer', () => SideDrawer);
}

module.exports = {
  registerScreens
}
