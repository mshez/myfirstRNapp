import React from 'react'
import {Button, Image, StyleSheet, View} from "react-native";
import imagePlaceHolder from "../../assets/beautiful-place.jpg";

const imagePicker = props => {
  return(
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Image style={styles.previewImage} source={imagePlaceHolder} />
      </View>
      <View style={styles.button}>
        <Button title="Pick Image"/>
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
  },
  previewImage : {
    width: '100%',
    height: '100%'
  }
})
export default imagePicker
