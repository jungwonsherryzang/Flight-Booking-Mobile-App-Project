import { View, Text, SafeAreaView, FlatList } from 'react-native';
//flatlist is more efficient than scrollview
import React, { useState } from 'react';
import { COLORS } from '../constants/theme.js';
import { FlightData } from '../constants/data.js';

//importing components
import { HomeHeader } from '../components/index.js';
import { TopStatusBar } from '../components/index.js';
import { FlightCard } from '../components/index.js';



const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList 
            data={FlightData}
            renderItem={({ item }) => <FlightCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>

        <View style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.lightpink}} />
          <View style={{ flex: 1, backgroundColor: COLORS.white}} />
        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default Home;