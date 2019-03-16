import React from 'react'
import {StyleSheet, Text} from 'react-native'

const headingText = props => {
  return (
    <Text {...props} style={[props.style,styles.headingText]}>
      {props.children}
    </Text>
  )
}
const styles = StyleSheet.create({
  headingText : {
    fontSize : 28,
    fontWeight: 'bold'
  }
});
export default headingText
