//such a navigaton bar
//giving an info about the current logged in person
import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';

import assets from '../constants/assets.js';
import { COLORS } from '../constants/theme.js';
import { SIZES } from '../constants/theme.js';
import { FONTS } from '../constants/theme.js';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.lightpink,
      padding: SIZES.font //여기까지하면 위에 홈헤더 자리 여유가 조금 생긴다
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image 
          source={assets.airtaxi}
          resizeMode="contain"
          style={{ width: 80, height: 80 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image 
            source={assets.user}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />

          <Image 
            source={assets.badge}
            resizeMode="contain"
            style={{ width: 15, height: 15, bottom: 0, right: 0, position: 'absolute' }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{ fontFamily:FONTS.regular, fontSize: SIZES.small, color: COLORS.white }}>
        Hello, Sherry 👋
        </Text> 

        <Text style={{ fontFamily:FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2 }}>
        Book your flight🛩️
        </Text> 
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: SIZES.small - 2,
          paddingHorizontal: SIZES.font,
        }}>
          <Image 
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput 
            placeholder="Search Flight"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>

    </View>
  )
}

export default HomeHeader