import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PrimaryButton from '../components/PrimaryButton';

const Data = [
  {
    id: 1,
    image: require('../../assets/1.png'),
    username: 'By Gogh',
    userimage: require('../../assets/user.png'),
  },
  {
    id: 2,
    image: require('../../assets/11.png'),
    username: 'By Gogh',
    userimage: require('../../assets/user.png'),
  },
  {
    id: 3,
    image: require('../../assets/12.png'),
    username: 'By Gogh',
    userimage: require('../../assets/user.png'),
  },
  {
    id: 4,
    image: require('../../assets/13.png'),
    username: 'By Gogh',
    userimage: require('../../assets/user.png'),
  },
  {
    id: 5,
    image: require('../../assets/14.png'),
    username: 'By Gogh',
    userimage: require('../../assets/user.png'),
  },
  {
    id: 6,
    image: require('../../assets/15.png'),
    username: 'By Gogh',
    userimage: require('../../assets/user.png'),
  },
  {
    id: 7,
    image: require('../../assets/16.png'),
    username: 'By Gogh',
    userimage: require('../../assets/user.png'),
  },
  {
    id: 8,
    image: require('../../assets/17.png'),
    username: 'By Gogh',
    userimage: require('../../assets/user.png'),
  },
];
const CategoryScreen = ({navigation}) => {
  const Item = ({title}) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
      <View style={styles.itemContainer}>
        <Image source={title.image} style={styles.itemImage} />
        <View style={{flexDirection: 'row', bottom: 15, left: 5}}>
          <Image
            source={title.userimage}
            style={{width: wp('12%'), height: hp('6%'), borderRadius: 4}}
          />
          <Text
            style={{
              left: 5,
              fontWeight: '600',
              color: '#000',
              fontSize: wp('4%'),
            }}>
            {title.username}
          </Text>
          <Image
            source={require('../../assets/Images/Vector.png')}
            style={{marginLeft: 5, marginTop: 5}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Item title={item} />;
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{
          //   backgroundColor: 'red',
          //   flex: 1,
          width: wp('100%'),
          marginTop: 20,
          //   backgroundColor: 'red',
        }}
        numColumns={2}
        // ItemSeparatorComponent={() => <View style={{margin: 10}}></View>}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
      <View style={{marginBottom: 5}}>
        <PrimaryButton
          buttonText="Create Collection"
          buttonFunction={() => navigation.navigate('CreateCollectionScreen')}
        />
      </View>
    </View>
  );
};
export default CategoryScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  itemContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    height: hp('30%'),
    margin: 3,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: wp('48%'),
    height: hp('20%'),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
