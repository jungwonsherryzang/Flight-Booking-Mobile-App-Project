import { TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';

import { COLORS } from '../constants/theme.js';
import { SIZES } from '../constants/theme.js';
import { SHADOWS } from '../constants/theme.js';
import { FONTS } from '../constants/theme.js';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => { 
  //need to pass all of the props that passes to the circle
  return (
    <TouchableOpacity 
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white, 
        position: 'absolute', //누를수있는 네모난 버튼 왼쪽 위에 생기고
        borderRadius: SIZES.extraLarge, //버튼 모양 동그랗게
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props //props 위에 설정하고 여기까지하면 오른쪽 위에 동그라미 생김
      }}
      onPress={handlePress}
      >
        <Image 
          source={imgUrl} //FlightCard.js에 설정해노음
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
    </TouchableOpacity>
  )
}

export const RectButton = ({ handlePress, fontSize, minWidth, ...props }) => {
    return (
      <TouchableOpacity 
        style={{
          backgroundColor: COLORS.indianred, 
          borderRadius: SIZES.extraLarge, //버튼 모양 동그랗게
          minWidth: minWidth,
          padding: SIZES.small,
          ...props //props 위에 설정하고 여기까지하면 오른쪽 위에 동그라미 생김
        }}
        onPress={handlePress}
        >
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: fontSize,
            color: COLORS.white,
            textAlign: 'center',
          }}>
          Book Flight</Text>
      </TouchableOpacity>
    )
}

