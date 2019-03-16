import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity,Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class SideDrawer extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon style={styles.drawerItemIcon}
                  name={Platform.OS==='android'?"md-log-out":"ios-log-out"}
                  size={30} color="black"/>
            <Text>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container : {
    paddingTop: 50,
    backgroundColor:'white',
    flex: 1
  },
  drawerItem : {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee'
  },
  drawerItemIcon:{
    marginRight:  10
  }
})
export default SideDrawer
