import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

const Index = (props) => {
  return (
    <View style={styles.parent_container}>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          resizeMode="contain"
          style={styles.cloudImage}
          source={require('../assets/backgound/cloudy_bg.png')}>
          <View style={styles.topBarPosition}>
            <View style={styles.topBarContainer}>
              <Image
                style={styles.topBarIcons}
                source={require('../assets/ui-icons/drawer.png')}
              />
              <Text style={styles.cityName}>DELHI</Text>
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
              source={require('../assets/backgound/delhi_image.png')}
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
        <View style={styles.forecastBar}>
          <Text style={{fontSize: 20, color: '#697F97'}}>Monday</Text>
          <Text style={{fontSize: 20, color: '#697F97'}}>{23 + '\xB0'}</Text>
          <Image
            source={require('../assets/Weather_icons/sunny.png')}
            style={{height: 35, width: 35, color: '#697F97'}}
          />
        </View>
        <View style={styles.forecastBar}>
          <Text style={{fontSize: 20, color: '#697F97'}}>Monday</Text>
          <Text style={{fontSize: 20, color: '#697F97'}}>{23 + '\xB0'}</Text>
          <Image
            source={require('../assets/Weather_icons/sunny.png')}
            style={{height: 35, width: 35, color: '#697F97'}}
          />
        </View>
        <View style={styles.forecastBar}>
          <Text style={{fontSize: 20, color: '#697F97'}}>Monday</Text>
          <Text style={{fontSize: 20, color: '#697F97'}}>{23 + '\xB0'}</Text>
          <Image
            source={require('../assets/Weather_icons/sunny.png')}
            style={{height: 35, width: 35, color: '#697F97'}}
          />
        </View>
        <View style={styles.forecastBar}>
          <Text style={{fontSize: 20, color: '#697F97'}}>Monday</Text>
          <Text style={{fontSize: 20, color: '#697F97'}}>{23 + '\xB0'}</Text>
          <Image
            source={require('../assets/Weather_icons/sunny.png')}
            style={{height: 35, width: 35, color: '#697F97'}}
          />
        </View>
        <View style={styles.forecastBar}>
          <Text style={{fontSize: 20, color: '#697F97'}}>Monday</Text>
          <Text style={{fontSize: 20, color: '#697F97'}}>{23 + '\xB0'}</Text>
          <Image
            source={require('../assets/Weather_icons/sunny.png')}
            style={{height: 35, width: 35, color: '#697F97'}}
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
  cloudImage: {
    width: '100%',
    flex: 0.6,
    alignItems: 'center',
    opacity: 1,
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
    backgroundColor: '#162840',
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
