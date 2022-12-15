import React from 'react-native';
import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Btn = ({ title, style }) => {
  return (
    <TouchableOpacity style={style}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#377DFF',
    borderRadius: 8,
    marginTop: hp('2%'),
    width: 327,
    height: 48,
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
    // position:'absolute'
  },
  text: {
    color: '#FFFFFF',
    alignSelf:'center',
    fontWeight:'600',
    fontSize:16,
    lineHeight:16,
    fontStyle:'normal',
  },
});

export default Btn;
