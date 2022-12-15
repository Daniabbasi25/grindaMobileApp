import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const TextField = props => {
  const {label, placeholder, keyboardtype, pas, val, setvalue, height, type} =
    props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      {type ? (
        <TouchableOpacity
          style={[
            styles.inputfield,
            {
              height: 50,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30,
              paddingHorizontal: 30,
            },
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../assets/Group.png')} />
            <Text style={{marginLeft: 50, fontSize: 18, color: '#000'}}>
              Ethereum
            </Text>
          </View>
          <Icon name="down" size={20} color="#1E232E" />
        </TouchableOpacity>
      ) : (
        <TextInput
          style={[styles.inputfield, {height: height && height}]}
          placeholder={placeholder}
          placeholderTextColor={'rgba(100, 116, 139, 1)'}
          keyboardType={keyboardtype}
          secureTextEntry={pas ? true : false}
          value={val}
          onChangeText={v => setvalue(v)}
          textAlignVertical={height ? 'top' : 'center'}
        />
      )}
    </View>
  );
};

export default TextField;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  inputfield: {
    borderWidth: 1,
    width: width / 1.1,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: '#CBD5E1',
    backgroundColor: 'rgba(241, 245, 249, 0.4)',
    paddingLeft: 20,
  },
  label: {
    color: '#000',
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 20,
  },
});
