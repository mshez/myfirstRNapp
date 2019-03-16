import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {Navigation} from "react-native-navigation";
import {connect} from 'react-redux';
import PlaceList from './../../components/PlaceList/PlaceList'

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placesLoaded: false,
      isSideDrawerVisible: false,
      removeAnim : new Animated.Value(1),
      addAnim : new Animated.Value(0)
    }
    this.placesSearchHandler = this.placesSearchHandler.bind(this)
    this.placesLoadedHandler = this.placesLoadedHandler.bind(this)
    this.navigationButtonPressed = this.navigationButtonPressed.bind(this)
  }

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'menuBtn') {
      (!this.isSideDrawerVisible) ? this.isSideDrawerVisible = true : this.isSideDrawerVisible = false
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: this.isSideDrawerVisible
          }
        }
      });
    }
  }

  placesLoadedHandler() {
    Animated.timing(this.state.addAnim,{
      toValue : 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }
  placesSearchHandler() {
    Animated.timing(this.state.removeAnim,{
      toValue : 0,
      duration: 500,
      useNativeDriver: true
    }).start(()=>{
      this.setState({
        placesLoaded: true
      })
      this.placesLoadedHandler()
    })
  }

  placeSelectHandler = (key) => {
    const selPlace = this.props.places.find(place => {
      return place.key === key
    })
    Navigation.push(this.props.componentId, {
      component: {
        name: 'awesome-places.PlaceDetailScreen',
        passProps: {
          selectedPlace: selPlace
        },
        options: {
          topBar: {
            title: {
              text: selPlace.name
            }
          }
        }
      }
    });
  }

  render() {
    let content = (
      <Animated.View style={{
        opacity :  this.state.removeAnim,
        transform: [
          {
            scale: this.state.removeAnim.interpolate({
              inputRange:[0,1],
              outputRange:[8,1]
            })
          }
        ]
      }}>
        <TouchableOpacity onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find places</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    )
    if (this.state.placesLoaded) {
      content = (
        <Animated.View style={{
          opacity: this.state.addAnim,
          width: '100%',
          flex: 1
        }}>
          <PlaceList places={this.props.places} onItemSelected={this.placeSelectHandler}/>
        </Animated.View>
      )
    }
    return (
      <View style={styles.buttonContainer}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchButton: {
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 26
  },
  buttonContainer : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}
export default connect(mapStateToProps)(FindPlaceScreen);
