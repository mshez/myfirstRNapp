import React from 'react'
import {StyleSheet, TextInput} from 'react-native'

const defaultInput = props => {
  return (
    <TextInput {...props}
               style={[props.style,styles.input,(!props.valid && props.touched)? styles.invalid:null]}
    />
  )
}
const styles = StyleSheet.create({
  input : {
    width : "100%",
    padding: 5,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee'
  },
  invalid:{
    backgroundColor:'#f9c0c0',
    borderColor: 'red'
  }
});
export default defaultInput
