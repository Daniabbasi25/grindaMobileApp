import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  RootTagContext,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Btn from '../components/Button';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Congratulations on your successful NFT creation.
      </Text>

      <ImageBackground
        style={styles.image}
        source={require('../../assets/Images/cat.png')}
        borderRadius={16}>
        <Image
          style={styles.iconbg}
          source={require('../../assets/Images/Vector.png')}
        />
      </ImageBackground>

      <Text style={styles.current}> Current Price</Text>
      <View style={styles.boldrow}>
        <Text style={styles.bold}>Sleeping meow #6968</Text>
        <Image
          source={require('../../assets/Images/Vector1.png')}
          style={styles.icon}
        />
        <Text style={styles.price}>7.8</Text>
      </View>

      {/**  CARD  **/}

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={[styles.graytext, {marginLeft: hp('1%')}]}>
            Created by
          </Text>
          <Text style={[styles.graytext, {marginLeft: hp('21%')}]}>
            Powered by
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/Images/hojin.png')}
            style={{marginLeft: hp('1.5%')}}
          />
          <Text style={[styles.title]}> Hojin Kang </Text>

          <View style={styles.divider} />

          <Image
            source={require('../../assets/Images/gogh.png')}
            style={[{marginLeft: hp('6%')}]}
          />
          <Text style={[styles.title]}> Gogh </Text>
        </View>
      </View>

      {/*******************/}

      <Text style={styles.paragraph}>
        Sleeping meow is a collection of grinda where each art gives you access
        to the most exclusive club on earth. Devoted Entrepreneurs, Artists, and
        investors...
      </Text>
      <Btn title="Mint" style={styles.btn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // backgroundColor:'yellow',
    backgroundColor: '#F5F5F5',
    height: hp('100%'),
    // width:wp('98%'),
    alignContent: 'center',
    // justifyContent:'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
    lineHeight: 18,
    color: '#777E90',
    marginTop: hp('5%'),
    width: wp('90%'),
    display: 'flex',
    textAlign: 'center',
    marginVertical: hp('1.5%'),
  },
  iconbg: {
    backgroundColor: 'white',
    // backgroundColor: 'transparent',
    width: wp('8%'),
    height: hp('4%'),
    borderRadius: 100,
    alignSelf: 'flex-end',
    marginTop: hp('35%'),
    marginRight: hp('2%'),
  },
  bold: {
    fontWeight: '700',
    lineHeight: 26,
    fontSize: 16,
    color: '#1E232E',
    alignSelf: 'center',
    marginLeft: hp('2%'),
    // width:wp('90%')
  },
  boldrow: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    width: wp('90%'),
    alignSelf: 'center',
    // marginTop: hp('2%'),
    marginHorizontal: hp('2%'),
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    color: '#1E232E',
    marginRight: hp('2%'),
  },
  current: {
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 16,
    textAlign: 'right',
    color: '#777E90',
    marginRight: hp('4%'),
    marginTop: hp('0.5%'),
    // backgroundColor:'red'
  },
  paragraph: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 24,
    alignSelf: 'center',
    color: '#1E232E',
    fontStyle: 'normal',
    width: wp('88%'),
    marginLeft: hp('2%'),
  },
  card: {
    width: wp('90%'),
    height: hp('9%'),
    // width:327,
    // height:76,
    backgroundColor: '#F1F5F9',
    // backgroundColor: 'red',
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // flexDirection: 'row',
    alignSelf: 'center',
    paddingLeft: 16,
    paddingRight: 24,
    marginVertical: hp('2%'),
  },
  title: {
    fontSize: 12,
    lineHeight: 16,
    color: '#0F172A',
    fontWeight: '600',
    marginBottom: hp('1.8%'),
    // marginLeft: hp('1.5%'),
    marginTop: hp('0.5%'),
  },
  image: {
    height: hp('40%'),
    width: wp('85%'),
    // width:327,
    // height:327,
    alignSelf: 'center',
    marginTop: hp('1%'),
    resizeMode: 'contain',
  },
  divider: {
    height: 40,
    width: 1,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginLeft: hp('10%'),
    marginTop: -hp('3%'),
    // alignSelf:'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  graytext: {
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 16,
    color: '#64748B',
    flexGrow: 0,
    marginTop: hp('3%'),
    marginBottom: hp('0.5%'),
  },
  icon: {
    // resizeMode:'contain',
    // height:hp('5%'),
    // width:wp('5%'),
    width: 9,
    height: 16,
    marginRight: -hp('12%'),
    marginTop: hp('0.6%'),
  },
  btn: {
    backgroundColor: '#377DFF',
    // backgroundColor:'red',
    borderRadius: 8,
    marginTop: hp('4%'),
    width: 327,
    height: 48,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // position:'absolute'
  },
});

export default Details;
