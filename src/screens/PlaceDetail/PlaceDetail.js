import React, {Component} from "react";
import {connect} from 'react-redux';
import {Navigation} from "react-native-navigation";
import {View, Text, StyleSheet, TouchableOpacity, Platform, Dimensions,Image} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import {deletePlace} from './../../store/actions/index'

class PlaceDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      viewMode: "portrait",
      location: {
        ...this.props.selectedPlace,
        latitudeDelta :0.0122,
        longitudeDelta:
          Dimensions.get('window').width /
          Dimensions.get('window').height *
          0.0122
      }
    };
    Dimensions.addEventListener("change", this.updateStyles);
  }
  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }
  onDeleteHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    Navigation.pop(this.props.componentId);
  }
  render(){
    return(
      <View
        style={[
          styles.container,
          this.state.viewMode === "portrait"
            ? styles.portraitContainer
            : styles.landscapeContainer
        ]}
      >
        <View style={styles.placeDetailContainer}>
          <View style={styles.subContainer}>
            <Image
              source={this.props.selectedPlace.image}
              style={styles.placeImage}
            />
          </View>
          <View style={styles.subContainer}>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.placeName}>
              {this.props.selectedPlace.name}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.onDeleteHandler}>
              <View style={styles.deleteButton}>
                <Icon
                  size={30}
                  name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
                  color="red"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1
  },
  portraitContainer: {
    flexDirection: "column"
  },
  landscapeContainer: {
    flexDirection: "row"
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  placeDetailContainer : {
    flex:2
  },
  deleteButton: {
    alignItems: "center"
  },
  subContainer: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace : key => dispatch(deletePlace(key))
  }
}
export default connect(null,mapDispatchToProps)(PlaceDetail);
