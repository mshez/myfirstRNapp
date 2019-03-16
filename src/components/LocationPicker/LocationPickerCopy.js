import React,{Component} from 'react'
import {Button, StyleSheet, Text, View,Dimensions} from "react-native";
import MapView from 'react-native-maps'

class LocationPicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      focusedLocation : {
        latitude : 33.9659116,
        longitude : 71.4221628,
        latitudeDelta :0.0122,
        longitudeDelta:
          Dimensions.get('window').width /
          Dimensions.get('window').height *
          0.0122
      },
      locationChosen : false
    }
    this.picklocationHandler = this.picklocationHandler.bind(this)
    this.getLocationHandler = this.getLocationHandler.bind(this)
  }
  getLocationHandler() {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent:{
          coordinate:{
            latitude : pos.coords.latitude,
            longitude : pos.coords.longitude
          }
        }
      }
      this.picklocationHandler(coordsEvent)
    }, err => {
      console.log(err);
      alert("Fetching the position failed")
    })
  }
  picklocationHandler (e) {
    const cords = e.nativeEvent.coordinate
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: cords.latitude,
      longitude: cords.longitude
    })
    this.setState(prevState =>{
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: cords.latitude,
          longitude: cords.longitude
        },
        locationChosen : true
      }
    })
    this.props.onLocationPick({
      latitude : cords.latitude,
      longitude : cords.longitude,
      latitudeDelta :0.0122,
      longitudeDelta:
        Dimensions.get('window').width /
        Dimensions.get('window').height *
        0.0122
    })
  }
  render(){
    let marker = null
    if(this.state.locationChosen){
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />
    }
    return(
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          onPress={this.picklocationHandler}
          style={styles.map}
          ref={ref=>this.map = ref}
        >
          {marker}
        </MapView>
        <View style={styles.button}>
          <Button title="Locate me" onPress={this.getLocationHandler}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width:'100%',
    justifyContent:'center',
  },
  map: {
    width: "100%",
    height: 250
  },
  button: {
    margin: 8
  }
})
export default LocationPicker
