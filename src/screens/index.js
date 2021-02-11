import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
var weather = 'cloudy';
var city = 'Mumbai';

const Index = (props) => {
  return (
    <View
      style={[
        styles.parent_container,
        {backgroundColor: weather === 'cloudy' ? '#162840' : '#CEA544'},
      ]}>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          resizeMode="stretch"
          style={[styles.bgImage]}
          source={
            weather === 'cloudy'
              ? require('../assets/backgound/cloudy_bg.png')
              : require('../assets/backgound/sunny_bg.png')
          }>
          <View style={styles.topBarPosition}>
            <View style={styles.topBarContainer}>
              <Image
                style={styles.topBarIcons}
                source={require('../assets/ui-icons/drawer.png')}
              />
              <Text style={styles.cityName}>{city}</Text>
              <Image
                style={styles.topBarIcons}
                source={require('../assets/ui-icons/Setting.png')}
              />
            </View>
          </View>
          <View
            style={{
              top: '25%',
              height: 380,
              alignSelf: 'stretch',
              alignItems: 'center',
            }}>
            <ImageBackground
              resizeMode="stretch"
              source={
                city === 'DELHI'
                  ? require('../assets/backgound/delhi_image.png')
                  : require('../assets/backgound/mumbai_image.png')
              }
              style={{
                height: '95%',
                width: '96%',
                // marginLeft: '4%',
              }}>
              <View style={{flex: 1, justifyContent: 'center', top: '24%'}}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 60, color: 'white'}}>
                    {18 + '\xB0'}
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginHorizontal: '2%',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{fontSize: 20, marginRight: 10, color: 'white'}}>
                        {26 + '\xB0'}
                      </Text>
                      <Image
                        style={{height: 8, width: 10}}
                        source={require('../assets/Weather_icons/max.png')}
                      />
                    </View>
                    <View>
                      <Text style={{fontSize: 30, color: 'white'}}>Cloudy</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{fontSize: 20, marginRight: 10, color: 'white'}}>
                        {15 + '\xB0'}
                      </Text>
                      <Image
                        style={{height: 8, width: 10}}
                        source={require('../assets/Weather_icons/min.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
      <ImageBackground
        style={styles.lowerBg}
        source={require('../assets/backgound/lower_40.png')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: 60,
            top: -40,
          }}>
          <Text
            style={{
              backgroundColor: 'white',
              top: 20,
              borderRadius: 50,
            }}>
            <Icon style={{fontSize: 50}} name="plus" color="#900" />
          </Text>
        </View>
        <View style={styles.forecastBar}>
          <Text style={{fontSize: 20, color: '#697F97'}}>Monday</Text>
          <Text style={{fontSize: 20, color: '#697F97'}}>{23 + '\xB0'}</Text>
          <Image
            source={require('../assets/Weather_icons/sunny.png')}
            style={{
              height: 35,
              width: 35,
              //   opacity: 0.1,
              //   color: '#697F97',
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cityName: {
    color: '#FFFFFF',
    fontSize: 32,
  },
  bgImage: {
    width: '100%',
    height: 270,
    flex: 0.6,
    alignItems: 'center',
    opacity: 1,
    color: '#FCF1D8',
    // shadowColor: '#FEA085',
    // shadowOpacity: 0.8,
  },
  forecastBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    paddingBottom: '2%',
    // marginVertical
  },
  lowerBg: {
    flex: 0.4,
    height: 370,
    width: '100%',
    paddingTop: '10%',
  },
  parent_container: {
    // backgroundColor: '#162840',
    backgroundColor: '#CEA544',
    opacity: 0.8,
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  topBarContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '4%',
  },
  topBarIcons: {
    height: 30,
    width: 30,
  },
  topBarPosition: {
    flexDirection: 'row',
    top: '10%',
  },
});

export default Index;
