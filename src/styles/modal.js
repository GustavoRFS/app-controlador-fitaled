import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 60,
    justifyContent: 'center',
  },
  centeredView: {
    backgroundColor: '#2d2d2d',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    height: 280,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  text: {
    color: '#fbf5f3',
    fontSize: 20,
    textAlign: 'center',
  },
});
