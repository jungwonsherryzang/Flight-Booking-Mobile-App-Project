import React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native'; 
//flatlist is efficient than scrollview

import { COLORS } from '../constants/theme.js';
import { FlightData } from '../constants/data.js';

//importing components
import { HomeHeader } from '../components/index.js';
import { TopStatusBar } from '../components/index.js';
import { FlightCard } from '../components/index.js';


const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        //status bar 위에 검은띠
        <StatusBar background={COLORS.primary} /> 

        <View style={{ flex: 1}}>
            <View style={{ zIndex: 0 }}>
            <FlatList 
                data={FlightData}  //Later, this data will be changed to receive real-time data through API
                renderItem={({ item }) => <FlightCard data={item} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
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

            <View style={{ height: 300, background: COLORS.primary }} />
            <View style={{ flex: 1, background: COLORS.white }} />

            </View>

        </View>
        
    </SafeAreaView>
  )
}

export default Home;
