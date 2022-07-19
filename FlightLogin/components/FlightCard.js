import React from 'react'
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../constants/theme.js';
import { SIZES } from '../constants/theme.js';
import { SHADOWS } from '../constants/theme.js';
//import { heart } from '../constants/assets.js';
import assets from '../constants/assets.js';

import { CircleButton } from './Button.js';
import { RectButton } from './Button.js';

import { FlightPpl, SubInfo } from './SubInfo.js';
import { FlightPrice } from './SubInfo.js';
import { FlightTitle } from './SubInfo.js';





const FlightCard = ({ data }) => {

  const navigation = useNavigation();

  return ( //여러개 카드 나눠지는것 정의
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image 
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />
      
      <View style={{ width: "100%", padding: SIZES.font }}>

          <FlightTitle 
            title={data.id}
            titleSize={SIZES.large}
            subtitle={data.name}
            subtitleSize={SIZES.medium}
          />

          <View style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
          }}>

            <FlightPrice price={data.price} />
            <FlightPpl people={data.maxppl} />
            <RectButton 
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={() => navigation.navigate("Deatils", { data })}/>
          </View>
      </View> 

    </View>
  )
}

export default FlightCard;