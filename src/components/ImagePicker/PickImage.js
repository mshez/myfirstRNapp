import React,{Component} from 'react'
import {Button, Image, StyleSheet, View} from "react-native";
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
const options = {
  title : "Pick an image",
  width: 300,
  height: 400,
  cropping: true,
  includeBase64: true
}
class PickImage extends Component {
  constructor(props){
    super(props)
    this.state = {
      pickedImage:null
    }
    this.pickImageHandler = this.pickImageHandler.bind(this)
  }
  pickImageHandler() {
    ImagePicker.openPicker(options).then(      (response) => {
      console.log(response)
      this.setState({
        pickedImage: {uri: response.path}
      })
      debugger
      this.props.onImagePicked({uri:response.path, base64: response.data})
    });
/*    ImagePicker.openPicker(
      options,
      (response) => {
        if (response.didCancel) {
          console.log("User canceled")
        } else if (response.error) {
          console.log('error', response.error)
        } else {
          this.setState({
            pickedImage: {uri: response.uri}
          })
          this.props.onImagePicked({uri:response.uri, base64: response.data})
        }
      }
    )*/
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image style={styles.previewImage} source={this.state.pickedImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={this.pickImageHandler}/>
        </View>
      </View>
    )
  }
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
export default PickImage
