import React from 'react'
import {Navigation} from "react-native-navigation";
import {registerScreens} from './src/screens/index'

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#ccc'
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
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow'
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black',
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
                  text: 'Welcome screen',
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
