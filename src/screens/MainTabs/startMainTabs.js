import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map",30),
    Icon.getImageSource("md-share-alt",30),
    Icon.getImageSource("md-menu",30)
  ]).then((sources)=>{
    /*Navigation.setRoot({
      root: {
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
                          color: 'Black'
                        }
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
                        }
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
        },
        sideMenu : {
          left: {
            component: {
              name: 'awesome-places.SideDrawer',
              options: {
                topBar: {
                  visible: true,
                  title: {
                    text: 'Side drawer',
                    color: 'Black'
                  }
                }
              }
            }
          }
        },
        options: {
          statusBar: {
            hideWithTopBar: false,
            blur: true
          },
          topBar: {
            barStyle: 'black',
            background: {
              color: 'white',
              translucent: true,
              blur: false
            },
            backButton: {
              title: 'Back',
              showTitle: true
            },
          }
        }
      }
    });*/
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
                              color:'black'
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
                              color:'black'
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
