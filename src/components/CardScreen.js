import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, ListItem} from 'react-native-elements';
const CardScreen = ({item, onPress}) => {
  return (
    <View style={styles.usernameView}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          left: 6,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontFamily: 'Inter-Regular',
            fontWeight: '900',
            right: 8,
          }}>
          {item.item.no}
        </Text>
        <Avatar
          title={'Gogh AI'}
          size="medium"
          source={item.item.image}
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
          {item.item.name}
        </ListItem.Title>
        <View
          style={{
            top: hp('1.5%'),
            right: hp('11%'),
            width: wp('30%'),
            justifyContent: 'center',
            height: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
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
                fontSize: 14,
                fontFamily: 'Inter-Regular',
                fontWeight: '700',
              }}>
              {item.item.eth}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: wp('12%'),
          }}>
          <View
            style={{
              right: hp('5%'),
              width: wp('40%'),
              // justifyContent: 'center',
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
              {item.item.eth}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  usernameView: {
    width: wp('95%'),
    height: hp('9%'),
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
});
