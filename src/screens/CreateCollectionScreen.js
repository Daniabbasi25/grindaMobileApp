import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PrimaryButton from '../components/PrimaryButton';
import TextField from '../components/TextField';

const CreateCollectionScreen = () => {
  const [prompt, setPrompt] = useState('');
  const [description, setDescription] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/coverpicture.png')}
          style={{
            width: wp('100%'),
            height: hp('25%'),
            resizeMode: 'cover',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity style={{right: 10, bottom: 10}}>
            <Image source={require('../../assets/icon.png')} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.profile}>
          <Image
            source={require('../../assets/user.png')}
            style={{width: '100%', height: '100%'}}
          />
          <TouchableOpacity
            style={{bottom: 15, alignSelf: 'flex-end', right: -15}}>
            <Image source={require('../../assets/icon.png')} />
          </TouchableOpacity>
        </View>

        {/* input fields */}
        <TextField
          label="PROMPT"
          // placeholder="study@gmail.com"
          val={prompt}
          setvalue={setPrompt}
          // keyboardtype="email-address"
        />
        <TextField
          label="DESCRIPTION"
          placeholder="Infomation your collection"
          val={description}
          setvalue={setDescription}
          // keyboardtype="email-address"
          height={100}
        />
        <TextField
          label="BLOCKCHAIN"
          placeholder="Infomation your collection"
          val={description}
          type={'dropdown'}
          setvalue={setDescription}
          // keyboardtype="email-address"
          //   height={100}
        />

        <View>
          <PrimaryButton buttonText="Create" />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateCollectionScreen;

const styles = StyleSheet.create({
  profile: {
    width: wp('28%'),
    height: hp('14%'),
    backgroundColor: 'red',
    alignSelf: 'center',
    top: -hp('5%'),
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderWidth: 3,
    borderColor: '#fff',
  },
});
