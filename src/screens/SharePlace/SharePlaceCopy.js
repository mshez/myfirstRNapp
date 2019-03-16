import React, {Component} from 'react';
import {View, Button, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import validate from '../../utility/validation'
import {addPlace} from './../../store/actions/index'
import {Navigation} from 'react-native-navigation'
import MainText from './../../components/UI/MainText/MainText'
import HeadingText from './../../components/UI/HeadingText/HeadingText'
import PickImage from '../../components/ImagePicker/PickImage'
import LocationPicker from './../../components/LocationPicker/LocationPicker'
import PlaceInput from "../../components/PlaceInput/PlaceInput";

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSideDrawerVisible: false,
      controls : {
        placeName: {
          value: "",
          valid: false,
          touched: false,
          validationRules: {
            'isEmpty': true
          }
        },
        location : {
          value : null,
          valid: false
        }
      }
    }
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
  onLocationPickHandler = (location) => {
    this.setState(prevState=>{
      return {
        controls : {
          ...prevState.controls,
          location : {
            value : location,
            valid : true
          }
        }
      }
    })
  }
  placeNameChangedHandler = val => {
    this.setState(prevState=>{
      return {
        controls : {
          ...this.state.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: val,
            valid: validate(val,prevState.controls.placeName.validationRules)
          }
        }
      }
    });
  };
  placeAddedHandler = () => {
    this.props.onAddPlace(this.state.controls.placeName.value,this.state.controls.location.value)
  }
  render() {

    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>
              Share a Place with us !
            </HeadingText>
          </MainText>
          <PickImage />
          <LocationPicker onLocationPick={this.onLocationPickHandler}/>
          <PlaceInput placeName={this.state.controls.placeName.val} onChangeText={this.placeNameChangedHandler}/>
          <View style={styles.button}>
            <Button title="Share the Place!" disabled={!this.state.controls.placeName.valid ||
            !this.state.controls.location.valid
            } onPress={this.placeAddedHandler}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width:'100%'
  },
  button: {
    margin: 8
  }
})
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName,location) => dispatch(addPlace(placeName,location))
  }
}
export default connect(null, mapDispatchToProps)(SharePlaceScreen);
