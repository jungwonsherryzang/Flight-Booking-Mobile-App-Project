import { View, Text , Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme';
import assets from '../constants/assets.js';


export const FlightTitle = ({ title, titleSize, subtitle, subtitleSize }) => {
  return (
    <View>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>{title}</Text>
      <Text style={{ fontFamily: FONTS.regular, fontSize: subtitleSize, color: COLORS.primary }}>{subtitle}</Text>
    </View>
  )
}




export const ImageInfo = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={assets.logo}
                resizeMode="contain"
                style={{
                    width: 100,
                    height: 100,
                    marginLeft: -SIZES.font
                }}/>
        </View>
    );
};

export const FlightName = () => {
    return (
      <View>
        <Text>FlightName</Text>
      </View>
    )
}

export const FlightPpl = ({ people }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image 
              source={assets.users}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: 2 }}
          />
          
          <Text style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.font,
              color: COLORS.primary,
          }}>{people}</Text>
  
        </View>
      )
}

export const FlightTime = () => {
    return (
      <View style={{
        paddingHorizontal: SIZES.font,
        paddingVertical:  SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
      }}>
        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary}}>Taking about...</Text>
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.primary}}>13m</Text> 

      </View>
    )
}

export const FlightPrice = ({ price }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image 
            source={assets.dollar}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 2 }}
        />
        
        <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary,
        }}>{price}</Text>

      </View>
    )
}

//Later, flighttime and flight price will be designed to be received from real-time dataset
export const SubInfo = () => {
    return (
      <View style={{ 
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge, //여기까지하면 subinfo가 이미지안으로 들어간다
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <ImageInfo />
        <FlightTime /> 
      </View>
    )
}

