import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const PrimaryButton = props => {
  const {buttonText, buttonFunction} = props;
  return (
    <TouchableOpacity>
      <Text style={styles.primaryButton} onPress={buttonFunction}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  primaryButton: {
    // marginLeft:width/8,
    width: width / 1.02,
    backgroundColor: '#377DFF',
    textAlign: 'center',
    paddingVertical: height / 50,
    color: '#fff',
    borderRadius: 10,
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
