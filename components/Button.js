import { View, Text } from 'react-native';
import React from 'react';

import { TouchableOpacity, View, Text } from 'react-native';
//TouchableOpacity: just touching 

import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';



export const CircleButton = ({ imgUrl, ...props }) => {
  return (
    <TouchableOpacity
        style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props,
        }}
    >

    //하트버튼
    <Image 
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
    />


        

    </TouchableOpacity>
  )
}

export const RectButton = () => {
    return (
      <View>
        <Text>Button</Text>
      </View>
    )
  }
