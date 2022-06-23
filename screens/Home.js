import React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native'; 
//flatlist renders item
//safeareaview makes sure everything fits on the screen

import { COLORS, FlightData } from '../constants';


const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        //status bar 위에 검은띠
        <FocusedStatusBar background={COLORS.primary} /> 

        <View style={{ flex: 1}}>
            <View style={{ zIndex: 0 }}>
            <FlatList 
                data={FlightData} 
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
