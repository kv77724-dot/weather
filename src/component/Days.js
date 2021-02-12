import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
var url = "";
function Days({ title, temp, dayCondition }) {
    switch (dayCondition) {
        case "cloudy":
            url = require("../assets/Weather_icons/cloudy_sunny.png");
            break;
    
        case "Hazy sunshine":
            url = require("../assets/Weather_icons/sunny.png");
            break;
    
        case "Intermittent clouds":
            url = require("../assets/Weather_icons/partial_rainy.png");
            break;
    
        default:
            url = require("../assets/Weather_icons/sunny.png");
            break;
    }
    return (
        <View style={styles.forecastBar}>
          <Text style={{fontSize: 20, color: '#697F97', width: 102}}>{title}</Text>
          <Text style={{fontSize: 20, color: '#697F97'}}>{temp + '\xB0'}</Text>
          <Image
            source={url}
            style={{
              height: 35,
              width: 35,
              //   opacity: 0.1,
              //   color: '#697F97',
            }}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    forecastBar: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: '2%',
        paddingBottom: '2%',
        // marginVertical
    },
});

export default Days;
