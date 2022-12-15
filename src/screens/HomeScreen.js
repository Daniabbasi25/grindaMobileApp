import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar, ListItem} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Card from '../components/CardScreen';
const DATA = [
  {
    no: '1',
    eth: ' 1.39 ETH',
    name: '이말년 AI',
    image: require('../../assets/Images/1.png'),
  },
  {
    no: '2',
    eth: ' 7.8 ETH',
    name: 'Gogh AI',
    image: require('../../assets/Images/Rectangle.png'),
  },

  {
    no: '3',
    eth: ' 0.39 ETH',
    name: 'Monet AI',
    image: require('../../assets/Images/Rectangle.png'),
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Image
          source={require('../../assets/Images/KakaoTalk.png')}
          style={styles.logoStyle}
        />
        <Feather
          name="search"
          color={'#000000'}
          size={30}
          style={styles.iconStyle}
        />
      </View>
      <View style={styles.mainImageStyle}>
        <Image
          source={require('../../assets/Images/Rectangle.png')}
          style={styles.imageStyle}
        />
        <View style={styles.timingMainView}>
          <View style={styles.timingViews}>
            <Text style={[styles.textStyle, {fontWeight: '600'}]}>2</Text>
            <Text style={styles.textStyle}>DAYS</Text>
          </View>
          <View style={styles.timingViews}>
            <Text style={[styles.textStyle, {fontWeight: '600'}]}>12</Text>
            <Text style={styles.textStyle}>HRS</Text>
          </View>
          <View style={styles.timingViews}>
            <Text style={[styles.textStyle, {fontWeight: '600'}]}>6</Text>
            <Text style={styles.textStyle}>MINS</Text>
          </View>
          <View style={styles.timingViews}>
            <Text style={[styles.textStyle, {fontWeight: '600'}]}>49</Text>
            <Text style={styles.textStyle}>SECS</Text>
          </View>
        </View>
        <View style={styles.usernameView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar
              title={'Gogh AI'}
              size="medium"
              source={require('../../assets/Images/Rectangle.png')}
              rounded
            />
            <ListItem.Title
              style={{
                fontSize: 20,
                bottom: hp('1.5%'),
                left: hp('1%'),
                fontFamily: 'Inter-Regular',
                fontWeight: '700',
                color: '#000',
              }}>
              Gogh AI
            </ListItem.Title>
            <View
              style={{
                top: hp('1.5%'),
                right: hp('13%'),
                width: wp('30%'),
                justifyContent: 'center',
                height: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontSize: 12,
                  fontFamily: 'Inter-Regular',
                  fontWeight: '500',
                }}>
                Gogh
              </Text>
              <Image
                source={require('../../assets/Images/Vector.png')}
                style={styles.iconLogoStyle}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: wp('12%'),
              }}>
              <ListItem.Title
                style={{
                  fontSize: 10,
                  bottom: hp('1.5%'),
                  left: hp('1%'),
                  fontFamily: 'Inter-Regular',
                  fontWeight: '500',
                  color: '#000',
                }}>
                Current Price
              </ListItem.Title>
              <View
                style={{
                  top: hp('1%'),
                  right: hp('11%'),
                  width: wp('30%'),
                  justifyContent: 'center',
                  height: hp('5%'),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/Images/Vector1.png')}
                  style={[styles.iconLogoStyle, {left: -5}]}
                />
                <Text
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    fontSize: 20,
                    fontFamily: 'Inter-Regular',
                    fontWeight: '700',
                  }}>
                  7.8
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.trendingView}>
          <View style={styles.trendingSubView}>
            <Text
              style={[
                styles.textStyle,
                {fontSize: 16, fontFamily: 'Inter-Regular', color: '#000'},
              ]}>
              Trending
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('CategoryScreen')}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Inter-Regular',
                  color: 'gray',
                  top: hp('1%'),
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <SafeAreaView>
            <FlatList
              data={DATA}
              renderItem={item => <Card item={item} />}
              keyExtractor={item => item.no}
              style={{height: hp('22%')}}
            />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  secondContainer: {
    width: wp('100%'),
    height: hp('10%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
  },
  logoStyle: {
    width: wp('50%'),
    height: hp('20%'),
    alignSelf: 'center',
    right: wp('5%'),
  },
  iconStyle: {
    alignSelf: 'center',
    paddingRight: wp('8%'),
  },
  mainImageStyle: {
    width: wp('95%'),
    height: hp('43%'),
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  usernameView: {
    width: wp('95%'),
    height: hp('8%'),
    // backgroundColor: 'red',
    alignSelf: 'center',
    bottom: hp('6%'),
  },
  imageStyle: {
    width: wp('95%'),
    height: hp('40%'),
    borderRadius: 16,
  },
  timingMainView: {
    width: wp('70%'),
    height: hp('10%'),
    // backgroundColor: 'green',
    overflow: 'hidden',
    bottom: hp('6%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timingViews: {
    width: wp('15%'),
    height: hp('8%'),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
  },
  textStyle: {
    color: '#ffff',
    fontFamily: 'Inter-Regular',
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 14,
  },
  iconLogoStyle: {
    width: wp('3%'),
    height: hp('2%'),
    left: wp('2%'),
  },
  trendingView: {
    width: wp('95%'),
    height: hp('43%'),
    alignSelf: 'center',
    bottom: hp('5%'),
  },
  trendingSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
