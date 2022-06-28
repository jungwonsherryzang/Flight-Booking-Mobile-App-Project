//such a navigation bar
//giving info about the currently logged in person

import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image 
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
          />

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.login}  //Later, this needs to be changed to dynamic login info image
            resizeMode="contain"
            style={{ width: '100%', height: '100%'}}
          />
        </View>
      </View>

      
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white }}>
          Hello, Username  {/* Later, username needs to be changed to the dynamic function*/}
        </Text>


        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.medium, color: COLORS.white, marginTop: SIZES.base / 2 }}>
          Let's find a nice flight
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          flexDirection: 'row',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2,
          backgroundColor: COLORS.gray,
          alignItems: 'center'
        }}>
          <Image 
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput 
            placeholder="Seacrh Flights"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader