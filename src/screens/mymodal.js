import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

function ModalTester({name, api}) {
  //   console.log('props', );
  const [isModalVisible, setModalVisible] = useState(false);
  const [city, setCity] = useState(null);

  console.log('city', city);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}
      <TouchableOpacity
        style={{
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
          // borderColor: "purple",
          // borderWidth: 2,
        }}
        onPress={
            //   console.log('Add clicked..');
            toggleModal
          }> 
        <Text style={
          {
            // height: 100,
            // width: 100,
            backgroundColor: "#FFFFFF",
            borderRadius: 100,
          }
        }>
          <Icon
            style={{
              fontSize: 50,
            }}
            name="plus"
            color="#293F58"
          />
        </Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View
          style={{
            height: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            top: -10,
            borderRadius: 2,
            borderColor: "red",
            borderWidth: 5
            // top: 100,
          }}
          onPressOut={console.log("Clicked out")}
        >
          <Text style={{fontSize: 30, color: "#FFF", marginVertical: 10}}>Select a city</Text>
          <TouchableOpacity
            onPress={() => {
              setCity('Mumbai');
              name('Mumbai');
              console.log(city);
              toggleModal();
              api("Mumbai");
            }}>
            <Text style={styles.city}>Mumbai</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCity('Delhi');
              name('Delhi');
              console.log(city);
              toggleModal();
              api("Delhi");
            }}>
            <Text style={styles.city}>Delhi</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  city: {
    fontSize: 30,
    borderColor: 'white',
    borderWidth: 2,
    color: "white",
    width: 150,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default ModalTester;
