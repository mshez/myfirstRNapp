import React from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import imagePlaceHolder from "../../assets/beautiful-place.jpg";

const locationPicker = props => {
  return(
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Text>Map</Text>
      </View>
      <View style={styles.button}>
        <Button title="Locate me"/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width:'80%',
    justifyContent:'center',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: '#eee',
    width: '100%',
    height: 150
  },
  button: {
    margin: 8
  }
})
export default locationPicker
