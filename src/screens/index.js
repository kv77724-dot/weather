import React, {useState, useEffect} from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import weather from '../api/weatherApi';
import Days from '../component/Days';
import moment from 'moment';
import Modal from 'react-native-modal';
import ModalTester from './mymodal';

const Index = (props) => {
  const [results, setResults] = useState('');
  const [today, setToday] = useState('');
  const [name, setName] = useState('');

  var day = today.WeatherText;
  var city = name.toUpperCase();
  var cityKey = city === 'DELHI' ? '/202396' : '/204842';
  const week = `forecasts/v1/daily/5day${cityKey}`;
  const current = `currentconditions/v1${cityKey}`;
  const searchApi = async (type, value) => {
    try {
      const response = await weather.get(type, {
        params: {
          apikey: 'GDf7psbd695sp2G6ltEtmRjtYBHuRFJA',
          metric: true,
          // details: true
        },
      });
      console.log(value, response.data);
      value === 'current'
        ? setToday(response.data[0])
        : setResults(response.data.DailyForecasts);
    } catch (err) {
      console.log('Something went wrong', err);
    }
  };
  useEffect(() => {
    searchApi(current, 'current');
    searchApi(week, 'week');
  }, []);

  console.log('resul', results);

  return (
    <View
      style={[
        styles.parent_container,
        {
          backgroundColor:
            day.includes('cloudy') === true ? '#162840' : '#CEA544',
        },
      ]}>
      <View style={{alignItems: 'center'}}>
        {console.log('name', name)}
        {console.log('bool :', day.includes('cloudy') === true)}
        <ImageBackground
          resizeMode="stretch"
          style={[styles.bgImage]}
          source={
            day.includes('cloudy') === true
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
                {/* // Above cloudy */}
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 60, color: 'white'}}>
                    {today !== '' ? today.Temperature.Metric.Value : 0 + '\xB0'}
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
                        {/* {1 + '\xB0'} */}
                        {results !== ''
                          ? results[0].Temperature.Maximum.Value
                          : null + '\xB0'}
                      </Text>
                      <Image
                        style={{height: 8, width: 10}}
                        source={require('../assets/Weather_icons/max.png')}
                      />
                    </View>
                    <View>
                      <Text style={{fontSize: 30, color: 'white'}}>
                        {today !== '' ? today.WeatherText : 'Clear'}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{fontSize: 20, marginRight: 10, color: 'white'}}>
                        {results !== ''
                          ? results[0].Temperature.Minimum.Value
                          : null + '\xB0'}
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
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              top: 20,
              borderRadius: 50,
            }}>
            <ModalTester
              name={(val) => setName(val)}
              api={() => {
                searchApi(current, 'current');
                searchApi(week, 'week');
              }}
            />
          </TouchableOpacity>
        </View>
        {console.log(results !== '' ? results[0].Day.IconPhrase : 0)}
        {console.log(results.length)}
        <View style={{flex: 1, marginHorizontal: 10}}>
          <FlatList
            style={{flex: 1}}
            data={results}
            renderItem={(result) => {
              const day = moment(result.item.Date).format('dddd');
              var dayCondition = result.item.Day.IconPhrase;
              console.log(dayCondition);
              return (
                <Days
                  title={day}
                  temp={result.item.Temperature.Maximum.Value}
                  dayCondition={dayCondition}
                />
              );
            }}
            keyExtractor={(item) => item.Date}
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
    paddingBottom: '1%',
    // marginVertical
  },
  lowerBg: {
    // flex: 0.4,
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});

export default Index;
