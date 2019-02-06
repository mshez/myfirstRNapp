import React from 'react'
import {StyleSheet, Text} from 'react-native'

const mainText = props => {
  return (
    <Text {...props} style={styles.Text}>
      {props.children}
    </Text>
  )
}
const styles = StyleSheet.create({
  Text : {
    color: 'black'
  }
});
export default mainText
