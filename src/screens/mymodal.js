import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

function ModalTester({name, api}) {
  //   console.log('props', );
  const [isModalVisible, setModalVisible] = useState(false);
  const [city, setCity] = useState('Mumbai');

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
      <View
        style={{
          borderColor: 'red',
          borderWidth: 1,
          borderRadius: 50,
          bottom: 0,
        }}>
        <Icon
          style={{fontSize: 50}}
          name="plus"
          color="#900"
          onPress={
            //   console.log('Add clicked..');
            toggleModal
          }
        />
      </View>

      <Modal isVisible={isModalVisible}>
        <View
          style={{
            height: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'dodgerblue',
            // top: 100,
          }}>
          <TouchableOpacity
            onPress={() => {
              setCity('Mumbai');
              name('Mumbai');
              console.log(city);
              toggleModal();
              api();
            }}>
            <Text style={styles.city}>Mumbai</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCity('Delhi');
              name('Delhi');
              console.log(city);
              toggleModal();
              api();
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
    borderColor: 'black',
    borderWidth: 2,
    width: 150,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default ModalTester;
