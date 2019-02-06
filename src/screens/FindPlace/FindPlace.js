import React, {Component} from 'react';
import {View} from 'react-native';
import {Navigation} from "react-native-navigation";
import {connect} from 'react-redux';
import PlaceList from './../../components/PlaceList/PlaceList'

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSideDrawerVisible : false
    }
  }

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({buttonId}) {
    if(buttonId==='menuBtn'){
      (!this.isSideDrawerVisible) ? this.isSideDrawerVisible = true : this.isSideDrawerVisible = false
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible : this.isSideDrawerVisible
          }
        }
      });
    }
  }
  placeSelectHandler = (key) => {
    const selPlace = this.props.places.find(place=>{
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
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectHandler}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}
export default connect(mapStateToProps)(FindPlaceScreen);
