import React from "react";
import DefaultInput from './../../components/UI/DefaultInput/DefaultInput'

const placeInput = (props) => {
  return (
    <DefaultInput value={props.placeName} onChangeText={props.onChangeText} placeholder="Place Name"/>
  );
}

export default placeInput;
