import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Index = (props) => {
  return (
    <View style={styles.parent_container}>
      <View style={{flexDirection: 'row'}}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  cityName: {
    color: '#FFFFFF',
    fontSize: 32
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
    top: 66,
    marginHorizontal: 30,
  },
  topBarIcons: {
    height: 30,
    width: 30,
  },
});

export default Index;
