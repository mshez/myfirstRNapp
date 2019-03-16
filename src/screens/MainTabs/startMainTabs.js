import {Navigation} from 'react-native-navigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? "md-map" : "ios-map", 30),
    Icon.getImageSource(Platform.OS === 'android' ? "md-share-alt" : "ios-share", 30),
    Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30)
  ]).then((sources) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              id: 'leftSideDrawer',
              name: 'awesome-places.SideDrawer',
              passProps: {
                side: 'left'
              }
            }
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [{
                      component: {
                        name: 'awesome-places.FindPlaceScreen',
                        passProps: {
                          text: 'This is tab 1'
                        },
                        options: {
                          topBar: {
                            visible: true,
                            title: {
                              text: 'Find place screen',
                              color: 'black'
                            },
                            leftButtons: [{
                              id: 'menuBtn',
                              icon: sources[2],
                              title: 'Menu',
                              color: 'orange'
                            }]
                          }
                        }
                      }
                    }],
                    options: {
                      bottomTab: {
                        text: 'Find Place',
                        testID: 'Find_Place',
                        icon: sources[0]
                      }
                    }
                  }
                },
                {
                  stack: {
                    children: [{
                      component: {
                        name: 'awesome-places.SharePlaceScreen',
                        passProps: {
                          text: 'This is tab 1'
                        },
                        options: {
                          topBar: {
                            visible: true,
                            title: {
                              text: 'Share place screen',
                              color: 'Black'
                            },
                            leftButtons: [{
                              id: 'menuBtn',
                              icon: sources[2],
                              title: 'Menu',
                              color: 'orange'
                            }]
                          }
                        }
                      }
                    }],
                    options: {
                      bottomTab: {
                        text: 'Share Place',
                        testID: 'Share_Place',
                        icon: sources[1]
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      }
    });
  })
};

export default startTabs;
