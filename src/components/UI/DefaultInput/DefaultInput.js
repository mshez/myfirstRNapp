import React from 'react'
import {StyleSheet, TextInput} from 'react-native'

const defaultInput = props => {
  return (
    <TextInput {...props} style={[props.style,styles.input]}/>
  )
}
const styles = StyleSheet.create({
  input : {
    width : "100%",
    padding: 5,
    margin: 8,
    borderWidth: 1,
    borderColor: '#eee'
  }
});
export default defaultInput
