import React, {useState, useEffect, createContext} from 'react';
import {NativeModules, NativeEventEmitter, Platform} from 'react-native';
import BleManager from 'react-native-ble-manager';
const BleManagerModule = NativeModules.BleManager;
const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const BleContext = createContext({
  isConnected: false,
  BleManager,
  BleManagerEmitter,
  setConnectionState: undefined,
});

export default BleContext;

export const BleContextProvider = ({children}) => {
  const [isConnected, setConnectionState] = useState(true);

  useEffect(() => {
    BleManager.start().then(() => {
      if (Platform.OS === 'android') {
        BleManager.enableBluetooth().then(() => {
          BleManager.getBondedPeripherals().then((res) => {
            console.log(res);
          });
        });
      }
    });
  }, []);

  return (
    <BleContext.Provider
      value={{isConnected, BleManager, BleManagerEmitter, setConnectionState}}>
      {children}
    </BleContext.Provider>
  );
};
