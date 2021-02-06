/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import BleManager from 'react-native-ble-manager';
import BluetoothList from './src/components/BluetoothList';

const BleManagerModule = NativeModules.BleManager;
const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const teste = () => {
  BleManager.getDiscoveredPeripherals([]).then((res) => {
    console.log('Discovered: ', res);
  });
  BleManager.getConnectedPeripherals([]).then((res) => {
    console.log('Connected: ', res);
  });
  BleManager.getBondedPeripherals([]).then((res) => {
    console.log('Bonded: ', res);
  });
};

const App = () => {
  useEffect(() => {
    BleManager.enableBluetooth()
      .then(() => {
        BleManager.start({forceLegacy: true}).then(() => {
          BleManager.scan([], 1000, true).then(() => {
            console.log('Scanning');
            BleManagerEmitter.addListener(
              'BleManagerDiscoverPeripheral',
              (ev) => {
                console.log(ev);
              },
            );
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFAABB" />
      <SafeAreaView>
        <View>
          <Text>UEEE LLLKKKaK</Text>
          <Button
            title="KK"
            onPress={(ev) => {
              teste();
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
