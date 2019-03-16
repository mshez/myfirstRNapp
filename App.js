import React from 'react'
import {Navigation} from "react-native-navigation";
import {registerScreens} from './src/screens/index';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      barStyle: 'default',
      background: {
        color: 'white',
        translucent: true,
        blur: false
      },
      title: {
        color: 'black',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white'
      },
      buttonColor: 'white',
    },
    statusBar: {
      hideWithTopBar: true,
      blur: false
    },
    sideMenu: {
      left : {
        animationVelocity: 1500
      },
      animationType: 'parallax',
      openGestureMode: 'entireScreen'
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      barStyle: 'black',
      translucent: true
    },
    bottomTab: {
      textColor: 'white',
      selectedTextColor: 'orange',
      iconColor: 'white',
      selectedIconColor: 'orange',
    }
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'awesome-places.AuthScreen',
            options: {
              topBar: {
                visible: true,
                title: {
                  text: 'Login',
                  color: 'Black'
                }
              }
            }
          }
        }]
      }
    }
  });
});
