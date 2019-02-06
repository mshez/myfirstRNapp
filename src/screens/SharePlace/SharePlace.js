import React, {Component} from 'react';
import {View, Text, Button, ScrollView, StyleSheet,Image} from 'react-native';
import {connect} from 'react-redux'
import {addPlace} from './../../store/actions/index'
import {Navigation} from 'react-native-navigation'
import DefaultInput from './../../components/UI/DefaultInput/DefaultInput'
import MainText from './../../components/UI/MainText/MainText'
import HeadingText from './../../components/UI/HeadingText/HeadingText'
import ImagePicker from './../../components/ImagePicker/ImagePicker'
import LocationPicker from './../../components/LocationPicker/LocationPicker'

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSideDrawerVisible: false
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

  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName)
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
          <ImagePicker />
          <LocationPicker />
          <DefaultInput placeholder="Place Name"/>
          <View style={styles.button}>
            <Button title="Share the Place!"/>
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
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}
export default connect(null, mapDispatchToProps)(SharePlaceScreen);
