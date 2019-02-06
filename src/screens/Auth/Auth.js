import React, { Component } from 'react';
import { View, Button,StyleSheet,ImageBackground } from 'react-native';

import startMainTabs from './../MainTabs/startMainTabs';
import DefaultInput from './../../components/UI/DefaultInput/DefaultInput'
import HeadingText from './../../components/UI/HeadingText/HeadingText'
import MainText from './../../components/UI/MainText/MainText'
import ButtonWithBackground from './../../components/UI/ButtonWithBackground/ButtonWithBackground'
import backgroundImage from './../../assets/beautiful-place.jpg'

class AuthScreen extends Component {
  constructor(props){
    super(props)
    this.loginHandler = this.loginHandler.bind(this)
  }
  loginHandler = () => {
    startMainTabs();
  }
  render () {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <ButtonWithBackground color="blue">Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your Email address" style={styles.input}/>
            <DefaultInput placeholder="Password" style={styles.input}/>
            <DefaultInput placeholder="Confirm Password" style={styles.input}/>
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Login</ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage : {
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input : {
    backgroundColor : '#eee',
    borderColor : '#bbb'
  }
});

export default AuthScreen;
