import React, {useState, useEffect, createContext} from 'react';
import {Platform, Modal, View, Text, Button} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';
import styles from '../styles/modal';

const BTContext = createContext({
  isConnected: false,
  setConnectionState: function () {},
  sendData: function (data) {},
});

export default BTContext;

export const BTContextProvider = ({children}) => {
  const [isConnected, setConnectionState] = useState(false);
  const [modalVisible, setModalVisibility] = useState(false);
  const [modalText, setModalText] = useState('');

  const attemptToConnect = (device) => {
    BluetoothSerial.connect(device.id)
      .then(() => {
        setConnectionState(true);
      })
      .catch((err) => {
        console.error(err);
        attemptToConnect(device);
      });
  };

  const searchDevice = (devices) => {
    var LEDDevice = null;

    devices.forEach((device) => {
      if (device.name === 'Bururu LEDs') {
        LEDDevice = device;
      }
    });

    return LEDDevice;
  };

  const startBluetooth = async () => {
    const isEnabled = await BluetoothSerial.isEnabled();
    await BluetoothSerial.on('connectionLost', async () => {
      setConnectionState(false);
      setModalText('Conexão Perdida :(');
      setModalVisibility(true);

      attemptToConnect(LEDDevice);
    });
    await BluetoothSerial.on('bluetoothDisabled', async () => {
      setConnectionState(false);

      setModalText('O Bluetooth foi desligado :(');
      setModalVisibility(true);

      while (!(await BluetoothSerial.isEnabled())); //Wait user to enable the bluetooth
      attemptToConnect(LEDDevice);
    });

    if (!isEnabled) {
      if (Platform.OS === 'android') {
        await BluetoothSerial.enable();
      } else {
        setModalText('Por favor, ative o Bluetooth do dispositivo');
        setModalVisibility(true);
      }
    }
    while (!(await BluetoothSerial.isEnabled())); //Wait user to enable the bluetooth
    var devices = await BluetoothSerial.list();

    var LEDDevice = searchDevice(devices);

    if (!LEDDevice) {
      setModalText('O controlador LED não está pareado com seu dispositivo');
      setModalVisibility(true);

      while (!LEDDevice) {
        devices = await BluetoothSerial.list();
        LEDDevice = searchDevice(devices);
      }
    }

    attemptToConnect(LEDDevice);
  };

  const sendData = (data) => {
    BluetoothSerial.write(data);
  };

  useEffect(() => {
    startBluetooth();
  }, []);

  return (
    <BTContext.Provider value={{isConnected, setConnectionState, sendData}}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisibility(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={{...styles.centeredView, paddingHorizontal: 30}}>
            <Text style={styles.text}>{modalText}</Text>
            <Button
              color="#A42CD6"
              title="Ok"
              onPress={() => {
                setModalVisibility(false);
              }}
            />
          </View>
        </View>
      </Modal>
      {children}
    </BTContext.Provider>
  );
};
