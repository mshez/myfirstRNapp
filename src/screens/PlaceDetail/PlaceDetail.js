import React, {Component} from "react";
import {connect} from 'react-redux';
import {Navigation} from "react-native-navigation";
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import {deletePlace} from './../../store/actions/index'

class PlaceDetail extends Component {
  constructor(props) {
    super(props);
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
  }

  onDeleteHandler () {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    Navigation.pop(this.props.componentId);
  }
  render(){
    return(
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.onDeleteHandler}>
            <View style={styles.deleteBtn}>
              <Icon name="ios-trash" size={30} color="red"/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
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
  deleteBtn: {
    alignItems: "center"
  }
});
const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace : key => dispatch(deletePlace(key))
  }
}
export default connect(null,mapDispatchToProps)(PlaceDetail);
